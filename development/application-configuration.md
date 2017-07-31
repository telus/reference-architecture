# Application Configuration

## Why

An application deployment may have different configurations (e.g. between development, staging and production), for the same build artifact. These configurations may change aspects of the application behaviour, or they may include secrets like database credentials.

## What

There are many ways to store configurations. Configurations may be written in the same language as the codebase, as standard "POJO" plain old javascript objects, to make it easier to parse. Configurations may be written in a standardized format (e.g. "properties" key-value store). Approaches like [12-factor](https://12factor.net/config) insist on putting all of the application configuration in the environment.

## How

Within TELUS digital we have several different contexts that need to support configurations for reference architecture:

- Local node development
- Local docker-compose development
- Remote kubernetes/openshift hosting

We also need to delineate between secrets and non-secrets. **Secrets must NEVER be committed to code**.

### APP_ENV

Generally speaking, our preferred approach is to set a single `APP_ENV` environment variable, which is used to load a configuration file in your native application language (e.g. `config/staging.js` for JS code deployed to staging... APP_ENV=staging).

Define a constrained list of environments that are supported by the codebase. Generally these are local `development`, plus remote environments controlled by the delivery pipeline, such as `staging` and `production`. Each of these local/remote application environments can be configured differently, while they will still use the same artifact.

Usually the shared libraries we use also take in their configuration as JavaScript objects, so it is simple to read this data from a JavaScript object configuration file.

#### Isomorphic APP_ENV

In our isomorphic [starter kit](starter-kits.md), we want to support per-environment configuration files on the client side, without having to re-run [webpack compilation](webpack.md#how). As such, we inject APP_ENV into the client-side JavaScript (as `window.__APP_ENV__`). This should be used to load the relevant configuration file on the client side (v.s. `process.env.APP_ENV` on server-side). Use `process.env.BROWSER` to determine whether you are on client side, or not, and choose the correct APP_ENV source accordingly (note: `process.env.APP_ENV` is not available on client-side.

### NODE_ENV

NODE_ENV is a special environment variable used by Express.js, React, Redux and Webpack. It should not be confused with APP_ENV, even though it has similar values:

- *test*: used when running unit tests
- *development*: used when running dynamic development code locally
- *production*: used when running in a static production-like environment

Note that all of our Docker environments, whether local or remote, are using the production NODE_ENV. We typically hardcode this value in the `npm start` command, while hardcoding NODE_ENV as development in the `npm run dev` command.

### Environment variables

Only for the purpose of secrets do we use environment variables. These secrets must be read from HashiCorp/Ansible vault, and stored ephemerally in the environment. You can either read and set these values in your local shell environment, or store them on the local filesystem (**IMPORTANT**: if storing on the filesystem you MUST add the path to .gitignore so that you NEVER commit them... once they are committed you can assume the secret is now "leaked", and should be re-rolled, as git history lasts forever).

For secrets in Kubernetes, the HashiCorp/Ansible vault secrets should be read, and new Kubernetes secrets should be created. Those Kubernetes secrets then get mounted to the deployment, e.g.:
```yaml
- name: SUPER_SECRET_LICENSE_KEY
  valueFrom:
    secretKeyRef:
      name: super-secret-license-secret
      key: super-secret-license
```

### On 12 factor

We have also seen teams opt for the 12-factor approach, using properties-formatted `.env` files. While this is a popular (Heroku-backed) cloud-native way of defining configurations, in general this is somewhat problematic for our toolchain. Docker-compose can easily mount `.env` files into the environment of the Docker container... but for local Node and remote Kubernetes, it is not so straightforward. For local Node you can use tools like `dotenv` to read the secrets and put them in your current shell session. For Kubernetes, every single configuration needs to be declared for each container.

One practice we do not encourage is using the OpenShift template to pass parameters into the deployment. Teams have been using --param-file to convert the env file into parameters for a template, which then pass the values into the deployment configuration. Or worse, some teams are not using param-file and instead are using weird cat/sed/tr hacks: `cat .env/${attrs.nodeEnv} | sed 's/^/--env /' | tr '\n' ' '"`. With this approach you have to define each configuration in multiple places, with multiple lines of code per-config... first the `.env` file configuration, then in the openshift template, and finally in the deployment. With this approach you end up with ~5-7 LOC to bootstrap every line of configuration. It is also problematic if one value gets missed, or if there's a typo, etc.

Also another problem with putting all environment values in the environment is that you can actually change the configuration of a "running" application (changes to trigger a restart). We do not want configuration to be modified outside of the build pipeline. We want configuration changes to be made in github, and tested and released through the build pipeline. Otherwise on the next build pipeline deployment, the changes will get wiped. You can also introduce instability in your application by changing a configuration improperly.

If your team wants to use `.env` files, this is a fine practice on its own. However, we encourage you to use `autoenv` to mount these environment variables during application startup, rather than defining them as environment variables which can be modified.

## Who

@delivery @development

## References

- [12 factor configuration](https://12factor.net/config)
- [autoenv](https://github.com/ahmadnassri/autoenv)
- [OpenShift env-file, param-file](https://github.com/openshift/origin/pull/12164)
```
