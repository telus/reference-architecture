# Creating an API

## Why

To create an API that's part of the TELUS Digital API platform, there are a number of steps to follow. These steps ensure that your API is properly integrated with [Auth Proxy](authorization-proxy.md) and can be easily consumed by other teams.

## What

* APIs should start from the [API starter kit](https://github.com/telusdigital/api-starter-kit)
* APIs should be deployed to the `api-platform` project in OpenShift. If you need access, follow the steps described [here](https://github.com/telusdigital/openshift-cluster-provisioning/).
APIs that need to call services behind SDF or other digital APIs should be behind [Auth Proxy](authorization-proxy.md). To use Auth Proxy you'll need to:
  * Configure your API as a [new target](https://github.com/telusdigital/authorization-proxy/blob/master/src/config/api-targets/production.js)
  * Make sure the Oauth scope required by the service you want to call has been added to the [configuration](https://github.com/telusdigital/authorization-proxy/blob/master/src/config/sdf-env/prod.js)
* Update the [Platform API docs](https://github.com/telusdigital/api-platform-docs) to include the [Swagger](https://swagger.io/) documentation for your service

## How

There are a number of TELUS libraries that make building digital APIs easier:
* [node-utility-middlewares](https://github.com/telusdigital/node-utility-middlewares)
* [express-error-handlers](https://github.com/telusdigital/express-error-handlers)
* [api-platform-utils](https://github.com/telusdigital/api-platform-utils)
* [api-platform-middleware](https://github.com/telusdigital/api-platform-middleware)


## References

- [Authorization Proxy](authorization-proxy.md)
- [API Platform Swagger](https://www.telus.com/api-platform/home/)
- [API Starter Kit](https://github.com/telusdigital/api-starter-kit)
