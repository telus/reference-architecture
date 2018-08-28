# Creating an API

## Why

To create an API that's part of the TELUS Digital API platform, there are a number of steps to follow. These steps ensure that your API is properly integrated with [Auth Proxy](authorization-proxy.md) and can be easily consumed by other teams.

## What

*   APIs should be created using the [API starter kit](https://github.com/telus/api-starter-kit)
*   If your API requires the use of SDF, it must be deployed to the `o-api-platform` project in OpenShift. To get it deployed there, follow instructions using the [shippy-cli](https://github.com/telus/shippy-cli). Otherwise, the API may be hosted in a different OpenShift project.
APIs that need to call services behind SDF or other digital APIs needs to be behind [Auth Proxy](authorization-proxy.md). To use Auth Proxy you'll need to:
    -   Configure your API as a [new target](https://github.com/telus/authorization-proxy/tree/master/src/config/application-wide) in all required environments.
    -   If your API is outside the `o-api-platform`, use the openshift URL of your service as the target.
    -   If your API requires to be authenticated, you must add your API name to the default.js file under the proper domain (Telus, koodo, etc) [here](https://github.com/telus/authorization-proxy/blob/master/src/config/request-context)
*   Ensure that you have updated documentation in your API's GitHub repository under /swagger.
You will need to link your documentation from the [main hub](https://github.com/telus/api-platform-docs/tree/master/src/config) under the appropriate environment.

## How

There are a number of TELUS libraries that make building digital APIs easier:
*   [node-utility-middlewares](https://github.com/telus/node-utility-middlewares)
*   [express-error-handlers](https://github.com/telus/express-error-handlers)
*   [api-platform-utils](https://github.com/telus/api-platform-utils)
*   [api-platform-middleware](https://github.com/telus/api-platform-middleware)


## References

-   [Authorization Proxy](authorization-proxy.md)
-   [API Platform Swagger](https://www.telus.com/api-platform/home/)
-   [API Starter Kit](https://github.com/telus/api-starter-kit)
