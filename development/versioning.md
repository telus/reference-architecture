# Versioning

## Why

Our applications, and _especially_ libraries and APIs require versioning, to indicate new features and whether they are breaking changes or not.

## What

Use semantic versioning:
- Major (definitely a breaking change)
- Minor (added functionality in a backwards-compatible manner)
- Patch (backwards-compatible bug fixes that add no functionality)

In some cases, this is not necessary, and simple incremental major version numbers is also acceptable.

## How

### Library versioning

Use semantic versioning with the standard [npm publishing](npm.md) interface.

### API versioning

It may or may not be important to version our APIs. Typically we would avoid using versions, if at all possible. If versions are necessary, rather than keeping the old versions running, it is recommended to have _all supported versions_ implemented in your current API. 

- Our BFFs should have a single client: The UI. The UI and BFF are coupled through one delivery pipeline, and released together. In this case their domain models and versioning are coupled, and the UI should always simply be accessing the latest version of its BFF.
- For our API platform services, we most likely need to version them, as they will be shared by teams, and we don't want to break other projects.

There are multiple ways we _could_ pass our version to an API:

- Using a custom header
- Defining it as part of the URL
- Passing it as a query parameter
- Using a custom media type, within Accept and Content-Type headers

In general, we would encourage using the first approach: a custom `Version` header, where the desired version is passed to the API by its client.

Problems with the other approaches:

- Defining it as part of the URL is not RESTful; the URL changes but the resource does not. Also this is only commonly used for major versions.
- Using a query parameter requires special parsing, cannot be sent back through a response, and is not conformant with POST standards.
- Overloading media types and accept headers is difficult to understand for the client, and breaks standard media type conventions.

## Who

Everyone!

## References

- [semver.org](http://semver.org/)
