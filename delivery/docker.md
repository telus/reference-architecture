# Docker

## Why

Previously when we would develop applications, the developers would be required to install their own local dependencies, to be able to run the apps. The production servers were being built specifically for the application, either by hand or by using Ansible. It typically took days for developers to be onboarded, and weeks to set up production environments. Once these environments are running, they are also very hard to update, without risking breaking the code.

Over the last decade there has been a switch in mindset towards using virtual machines, both for local development and for production. This way, the differences with local environments and production environments are kept to a minimum. Also, creating new production environments is as simple as deploying a virtual server image to the cloud. However, traditional virtual machines work by emulating everything from the kernel to the application process. This makes them slow to build, slow to run, etc.

"Containers" offer an alternative to traditional virtual machines. We get the same dev-prod parity and quick setup that we are looking for. Unlike virtual machines, they emulate only above the existing kernel. This makes them faster to build and run, while still offering process isolation. These artifacts are easily versioned, predictable (removes human-error in configuration), and flexible.

## What

Developers are now capable of managing their application dependencies. Their application and its dependencies are bundled into a single Docker image artifact. The same artifact used locally can be shipped to production: "works for me" = "works in prod". When a Docker image is deployed, it is as if an entirely new server has been built from scratch. The application is tested against its dependencies.

Docker images are layered. The `Dockerfile` is a declarative list of commands (e.g. COPY, RUN, etc). At each and every step, it stores a snapshot of the image. Images can be built on top of other images. If we use a base image that gets updated, our application will get updated as well.

## How

Docker runs natively on Linux, but there are easy to use virtual machines for Windows and Mac OS X. On Linux, run `apt-get install docker`. On Mac or Windows you may [download it here](https://www.docker.com/products/docker). You may also need to install `docker-compose`. Use `brew` on Mac or `pip` on Linux.

In your application, define a `Dockerfile` that encapsulates its dependencies. We also prefer using a `docker-compose.yml` to declare how that `Dockerfile` gets run, via the `docker-compose` command line tool. We use a `.dockerignore` file to speed the build performance, by ignoring files/folders that are irrelevant for building the docker images.

Containers should be **immutable & ephemeral**. This means it should be able to be destroyed and rebuilt with no setup or configuration after the fact. All of the dependencies of your app should be in your codebase.

### DockerHub

We use DockerHub (the canonical Docker image source), to pull our base Alpine Linux images.

Currently we only support official base images, which are maintained by the application publishers. You should avoid using random 3rd party images whenever possible, as they could include malicious/exploitable code.

Supported base images include:
```
node:6-alpine
ruby:2-alpine
php:7-fpm-alpine
nginx:alpine
redis:alpine
```

Programming language distributions should track the stable "LTS" versions. For example, we will start using Node 8 [when it becomes "LTS"](https://github.com/nodejs/LTS#lts-schedule1). You should avoid using Node 7, unless explicitly necessary, as it will lack future support.

### Dockerfile

[Dockerfile Docs](https://docs.docker.com/engine/reference/builder/)

The Dockerfile is an iterative list of commands that a developer uses to build a docker image. Running `docker build .` will run those commands in succession. When steps or base images have not been modified, docker will automatically serve those steps from its internal caching mechanism. This makes it really fast to build.

#### Best practices

- Order dependencies to optimize caching, e.g. copy your source code AFTER you've installed dependencies via `apt-get`, otherwise those dependencies must be installed whenver you modify your code
- Minimize number of layers, e.g. if many successive RUN commands, combine them with &&
- Avoid installing unnecessary packages
- Each container should only have one application process (e.g. don't run nginx and php-fpm in the same container)
- Optimize startup speed and resource consumption: where possible, run all static compilation steps at build time, rather than loading them on startup

#### The difference between `CMD` and `ENTRYPOINT`

The `ENTRYPOINT` option makes the docker image behave like an executable binary. Typically we define the entrypoint as the binary that launches our application (e.g. in node, `npm`).

The `CMD` command can also point to a binary (in the absence of an `ENTRYPOINT`), but it is better used as the **default parameters** into the entrypoint. So for example, using `npm` as our entrypoint, defining the command `start` means that when the container is run with no args, it triggers `npm start`. When the container is run with args (e.g. `test`), this triggers `npm test` instead.

#### Root vs User mode

By default, a Docker container runs as root. This can be hazardous if you are mounting volumes. Also, certain "container breakout hacks" have been demonstrated, which have allowed users that are root in the container to gain access to root on the host.

Our current OpenShift platform therefore does not allow us to run containers as the root user, but we can still be a user in the root group. This means during the Dockerfile build process, we also need to create a user, grant them access to the source code, and switch to using that user at the end of the `Dockerfile`, before the source code is run.

For example:
```
ENV HOME=/root
RUN useradd -u 1001 -g root -d $HOME --shell /bin/false nodeuser && \
    chmod -R g+rw /app $HOME && \
    chmod g+x $HOME
USER nodeuser
```

This creates a `nodeuser` user that gains access to the `/app` and `/root` directories. Note that the `chmod` step can take quite some time, and it also doubles the size of our docker image, since it is storing a cache of both when it was previously owned by admin, as well as currently being owned by the user. But this does satisfy the security constraints on OpenShift, and avoids the container breakout hacking.

### docker-compose.yml

[Docker Compose Docs](https://docs.docker.com/compose/compose-file/)

`docker-compose` is a tool for running one or more Docker applications, together as an aggregate wholistic webapp. We currently use version 3 of the yaml format (and try to keep this up-to-date with the latest version).

A minimal example would be:
```yaml
version: '3'
services:
  app:
    container_name: my-app
    build: .
    ports:
      - '3000:3000'
```

This would expose a service called `app` on port `3000`, built from the `Dockerfile` in the current directory, with the image tagged as `my-app`.

#### Linking

If our example application requires an external dependency, e.g. nginx or a redis cache, you can define a new service and link them:

```yaml
services:
  app:
    ...
    links:
      - nginx
  nginx:
    image: nginx:alpine
```

Now the `nginx` container is available to the app container on the `nginx` URL, e.g. `http://nginx/`

#### Volumes

To add volumes to our application (typically used for mounting secrets, or for getting data out of a container), we can define a `volume` block. For secrets we want to use `:ro` to mount it as read-only.

For example, to mount some secret certs into our running container:
```yaml
services:
  app:
    ...
    volumes:
      - ./certs:/app/certs:ro
```

Volumes can also be used to create a development workspace with live code reloads. However, this is very difficult to achieve on Linux, due to the way permissions work. You would have to run the container with the same UID/GID as the user who owns the source code directory. On Mac or Windows however, since a Hypervisor/VM is used, it will be able to access the source code as long as the user running it owns it (UID/GID mapping happens automagically). In general we don't support this practice, though if you do want to do it, we recommend using a separate `docker-compose.dev.yml` file to override the `docker-compose.yml`, by adding the volumes for your source code.

### .dockerignore

To speed up the build, ignore things that are irrelevant to the Docker image artifact. For example, you definitely want to ignore any 3rd party dependencies that would be installed with `npm`, `bundler` or `composer` (this has a SIGNIFICANT effect on build time). We also want to ignore IDE metadata, readmes, or any generated code.

Example `.dockerignore`:
```
node_modules // installed 3rd party deps
*.md         // readmes
.idea        // IDE metadata
coverage     // generated code
```

## Who

@delivery

## References

- [Docker Docs](https://docs.docker.com/)
- [Dockerfile Docs](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
