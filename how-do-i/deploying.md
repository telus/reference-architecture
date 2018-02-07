# Deploying to staging/production

TELUS Digital uses self-provisioning, which means **developers ship code themselves**. This is achieved through the OpenShift platform.

## Why

Because you want to ship code, of course!

## What

To get access to the provisioning platform, [follow these instructions](https://github.com/telusdigital/openshift-cluster-provisioning).

**NOTE:** To have deployment access, you need be listed inside a **squad** as a **tech-lead**.

Once this step is done:

- If you're working on an existing application, you should be able see it on the [OpenShift Console](https://console.telusdigital.openshift.com/console/)
- If you want to create a new application, either use [shippy-cli](https://www.npmjs.com/package/@telusdigital/shippy-cli)
 to create it or refer to the [delivery/OpenShift](../delivery/openshift.md) documentation.

## Who

@developers

## References

- [delivery/OpenShift](../delivery/openshift.md)
-  [telusdigital/openshift-cluster-provisioning](https://github.com/telusdigital/openshift-cluster-provisioning)
- [OpenShift Console](https://console.telusdigital.openshift.com/console/)
- [shippy-cli](https://www.npmjs.com/package/@telusdigital/shippy-cli)
