# Jenkins

## Why

As part of our delivery practices, we are pushing for [Continuous Integration](../process/continuous-integration.md) and [Continuous Delivery](../process/continuous-delivery.md), across all of our reference architecture applications. This means that when we make changes to our code, we need a delivery pipeline that builds, tests, and deploys our changes automatically, all the way to production.

## What

By virtue of using [OpenShift](openshift.md), we get Jenkins pipelines as a first-class platform feature. OpenShift comes with all the boostrapping necessary to spawn new Jenkins instances, mount build pipelines to them, and set up git webhooks that trigger the pipelines.

OpenShift also alleviates the traditional achilles heel of Jenkins: being a hyper-managed "pet", which needs to have all of the developer tools and custom plugins installed on it. In OpenShift, Jenkins are ephemeral, immutable Docker containers. Rather than building and testing the software on the Jenkins instance directly, OpenShift includes tooling to trigger the build and test to run, by utilizing the cluster resources instead. So Jenkins is simply used to orchestrate tasks against the OpenShift cluster. This means we can keep our Jenkins instances plain and disposable.

## How

### Jenkins starter kit

Currently we are using an OpenShift dedicated cluster. Sadly, this means we cannot update the default Jenkins Docker image, to include plugins like the Slack notifier. As such, we have extended the OpenShift image with our own, in a separate git repository. To kick off any reference architecture project, you'll need to install the [Jenkins Starter Kit](https://github.com/telus/openshift-jenkins-starter-kit) to your project.

### Jenkinsfile

OpenShift includes [bootstrapping](https://docs.openshift.com/container-platform/3.5/architecture/core_concepts/builds_and_image_streams.html#pipeline-build), which installs the delivery pipeline for a given application into the Jenkins starter kit Docker container. It also sets up a webhook, which will trigger the pipeline to run, on commit.

The Jenkinsfile is a groovy language script that defines the ordering of the stages and commands that are executed in order to build, test and deploy our application.

#### Default stages

##### Checkout

Check out your code from GitHub, and determine the version (based off of commit # plus short commit hash)

##### Apply Templates

This step updates the OpenShift templates that will be used by the pipeline to build and deploy our code.

##### Building the containers

This step will trigger the OpenShift Docker Builds. Your source will be checked out and installed, according to the `Dockerfile`.

Once the container is built, a post-build hook runs tests against the container, before finally uploading the image to your ImageStream, and tagging it with your GitHub version.

##### Deploy staging/production

This deploys your container to staging (automatically) and production (manually). It will notify NewRelic when the deployment is successful (you will need to configure your own application ID here).

##### End to End staging/production

This step runs a functional integration test against the deployed environment. For user interfaces, it uses Nightwatch and Chrome against your deployed application. For APIs, we can write a simple integration test with CURL/node-fetch or use customer-driven contract tests (an integration test, against your API written by a downstream client).

#### Best practices

- Do your work on OpenShift, as opposed to on Jenkins. Do not write a custom Jenkins image that has a tool installed on it; instead, Dockerize your tool and run it on OpenShift with `oc run`.
- Use Jenkinsfile, as opposed to the older Job DSL and/or Build Pipeline plugin
- Always wrap your pipeline in a try/catch block
- Send slack notifications at key points in your pipeline (e.g. when failed, when waiting for input, when deployed to production)
- Ensure you wrap the discrete steps in your pipeline in `stage` blocks, to promote visibility
- If you can parallelize something, do it! In the default starter kits, all of our OpenShift Docker container builds will run in parallel.
- Do all of your work within a `node` block (exception: things like waiting for user input should be left outside of a `node`, as we don't want to consume a Jenkins node while we wait for a user to click to go to production)
- Use a timeout for user input, so you don't block builds indefinitely

## Who

@delivery

## References

- [Standard Jenkinsfile functions](https://jenkins.io/doc/pipeline/steps/)
- [OpenShift Jenkinsfile functions](https://jenkins.io/doc/pipeline/steps/openshift-pipeline/)
- [OpenShift pipeline strategy](https://docs.openshift.com/container-platform/3.5/architecture/core_concepts/builds_and_image_streams.html#pipeline-build)
- [OpenShift pipeline strategy configuration](https://docs.openshift.com/container-platform/3.5/dev_guide/builds/build_strategies.html#pipeline-strategy-options)
- [Slack notifications](https://jenkins.io/blog/2016/07/18/pipline-notifications/)
- [Best practices](https://www.cloudbees.com/blog/top-10-best-practices-jenkins-pipeline-plugin)
