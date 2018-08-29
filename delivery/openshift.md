# OpenShift

## Why

We need our platform to be able to build and store our [Docker](docker.md) images.

## What

RedHat's OpenShift platform is (as of v3.0) an extension of Google's [Kubernetes](kubernetes.md), which several useful features, in order to make it easier to use for full end to end delivery pipelines. Most prominently, templates (allows variable substitution in YAML configuration), bootstrapping for build pipelines, and a router that helps us expose our applications. It also has a more developed web console, where we get OAuth and role-based-access-control (RBAC), and shell access into our running pods.

## How

### Video Tutorials

Use your Telus google account to view [YouTube Delivery Playlist](https://www.youtube.com/playlist?list=PLJgHilVD2rhL8Xne1UwpCwiVIB9F1JDL6)

### Clusters

We currently have two deployed clusters, [main](https://console.telusdigital.openshift.com/) and [sandbox](https://console.telusdigitalsandbox.openshift.com/). The main cluster is intended for our official delivery pipelines, for any application that is intended to go live to customers. The sandbox is designed for short-lived testing: feature branches, test apps, etc. Don't expect projects on the sandbox environment to stick around too long... we purge it occasionally `:)`

### CLI

Install the [OpenShift CLI](https://docs.openshift.org/latest/cli_reference/get_started_cli.html), to be able to access the cluster from your development workspace.

#### Login

For the main cluster (for production apps), log in with:
> `oc login --server=https://api.telusdigital.openshift.com`

For the sandbox cluster (for development apps), log in with:
> `oc login --server=https://api.telusdigitalsandbox.openshift.com`

Visit the URL it tells you to, copy the first `oc login` line, with the token in it, and paste it into your terminal.

#### Select project

If you are on the sandbox environment, you can create a new personal project space:
> `oc new-project my-project`

To select an existing project (on either main or sandbox):
> `oc project my-project`

Each outcome team also gets an `o-outcome-team` namespace. Only users who are administrators of their outcome teams can make modifications to these spaces. Otherwise, users will only get view access.

### OpenShift Cluster Provisioning

Our [OpenShift Cluster Provisioning](https://github.com/telusdigital/openshift-cluster-provisioning) scripts set up the baseline of our OpenShift clusters. All projects and user access roles are defined here. You'll have to submit a pull request to this git repository, if you want to set up a user, squad or project.

### Configurations

OpenShift extends the [Kubernetes](kubernetes.md#how) configuration objects with a few of its own, which we use extensively...

#### Templates

A template allows us to inject variables into our YAML templates. Once a template is applied to the cluster, we can use `oc process` to pass parameters into the template, and apply the resulting YAML back to the cluster. For our starter kits, we define two templates. One template for the builds (Docker and Jenkins), which lets us configure the branch. Another template is used for the deployment, so that we can specify the environment and the number of replicas we want.

Templates are also exposed through the OpenShift Web UI, so that you can instantiate them by filling out the parameters on a website. You could use this, for example, to deploy a specific version of the application or choose a custom branch for a sandbox project.

#### Builds

We use two types of OpenShift build strategies: `JenkinsPipeline` and `Docker`:

- The `Docker` build, when triggered, will pull your git repo and compile its `Dockerfile`.
- The `JenkinsPipeline` uses an ephemeral jenkins container, deployed within your project. It sets up a jenkins job that runs the `Jenkinsfile`. We use this to automate our delivery pipeline.

#### Routes

A route exposes a Service over a given cluster URL. It also adds [SSL edge termination](tls-routes.md).

#### ImageStreams

Simply put, an ImageStream is an OpenShift component representation of a Docker image registry. This is where your compiled Docker container ends up, tagged with the specific build number, by the delivery pipeline.

#### Projects

Projects are roughly equivalent to Kubernetes namespaces, however they enable network isolation by default.

#### DeploymentConfig

A DeploymentConfig is _roughly_ analogous to a Kubernetes Deployment (in fact, it predates it, and RedHat pushed Google to make Deployments a core feature). However, under the hood the DeploymentConfig leverages the older Kubernetes ReplicationController paradigm, in order to mimic the Deployment behaviour. For most purposes, they are one and the same... however DeploymentConfigs do not get the same quality of Event monitoring, and has other strange quirks. Many features in OpenShift are, in fact, backports: Mimicking new functionality in old versions of Docker/Kubernetes under the hood.

### Cluster upgrade process

#### Standard Upgrade Process

Red Hat will communicate with TELUS digital via email (DL List here) with a possible list of times to perform an upgrade to our `sandbox` cluster first.  This window should be:
- In off hours (after 8PM PST and before 5AM EST)
- Communication should be provided 2 weeks in advance
- There should be an option for multiple windows
- Red Hat will provide a single time which may be rescheduled if it does not work (we are working with Red Hat to provide a few possibilities)
- Red Hat will also provide any expectations of outages so we may plan accordingly

Our Sandbox cluster will be upgraded first as it has no production applications running on it and will allow us to validate any impacts an upgrade or patch will have on our products.  Once the sandbox upgrade is complete:
- Any issues will be raised to Red Hat via ticketing
- If there are any production impacting issues upgrade to production will be waved off until fixed
- Once fixed a new window will be provided to TELUS via email as per standard process

Red Hat will perform their upgrade at the scheduled time, TDIM will monitor for any unexpected issues, should any unexpected issues occur TELUS digital will call Red Hat to resolve.  Once upgrade is complete TELUS digital will verify all applications have come back up otherwise engage the Delivery team via (XYZ).

#### Emergency / Critical Patching

Occasionally Red Hat may need to deploy a critical release to ensure our environment is safe from high profile vulnerabilities.  When this happens:
- Red Hat will patch both `sandbox` and `main` clusters notification should be provided at least 1 hour in advance
- Notice must be provided via email and telephone call to <XYZ> to inform them an emergency patch is going to happen ASAP
- Any issues as a result of the patching process should result in tickets being opened with Red Hat via the Customer Support Portal

TDIM will verify the stability of applications within OpenShift and engage teams as required once the patching process is complete

### Notifications & Communication

Red Hat will provide notification of a patch to our main cluster.  This date must be communicated to TDIM, TDIM Owner (Shane Boles), Release Management (Krystal Jackson) and the Delivery Platform team.  Emails below should all be notified when a patch to our main (telusdigital) cluster is going to happen to ensure the upgrade window is suitable.  If it is not the window can be changed by emailing Red Hat or opening a ticket.

### Creating Tickets

Team members will require access to the Red Hat Customer Portal, once access is gained team members may create tickets as needed.  Ticket response time SLA’s will follow per windows located in the SLA link below (note: our support level is Premium).

If additional team members are interested in updates in this ticket you can add them in the section `Send Email Notifications to:` section.

### Openshift Status Dashboard

OpenShift provides a status dashboard that will be updated as work / activity / outages occur on our two clusters.  This dashboard does require access however once you have access you can update the DL or phone numbers in which are notified of new events.

The status dashboard is located [here](https://status-dedicated.openshift.com/)

#### Updating Comms Emails / SMS alerts

The status page provided by Red Hat can be used to provide email or SMS alerts as new items are added or planned.  To add or remove people you can self service via the status dashboard URL below.

#### Gaining Access

A ticket can be created via the [Red Hat Customer Support Portal](https://access.redhat.com/support/cases/#/case/list) to gain access or remove access as required.

### Minishift

To test OpenShift locally, we recommend using [minishift](https://docs.openshift.org/latest/minishift/getting-started/quickstart.html).

On Mac we can install minishift with brew:

```bash
brew update

brew install docker-machine-driver-xhyve

sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

brew cask install minishift

minishift config set memory 8192

minishift start
``` 

On other platforms: [see instructions](https://docs.openshift.org/latest/minishift/getting-started/installing.html#installing-instructions)

Once minishift is running, you can log in, create projects, and install your Jenkins and applications normally.

## Who

@delivery

## References

- [OpenShift docs](https://docs.openshift.com/container-platform/3.5/welcome/index.html)
- [OpenShift vs Kubernetes](https://www.slideshare.net/SamuelTerburg/openshift-enterprise-31-vs-kubernetes)
- [OpenShift Sandbox Console](http://console.telusdigital.openshift.com) 
- [OpenShift Main Console](http://console.telusdigital.openshift.com)
- [Red Hat Customer Support Portal](https://access.redhat.com/support/cases/#/case/list)
- [Openshift Status Dashboard](https://status-dedicated.openshift.com/)
- [OpenShift SLA Table](https://access.redhat.com/support/offerings/production/sla) Note: We have PREMIUM support
- [Minishift](https://github.com/minishift/minishift)
