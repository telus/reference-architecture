# Versioning

## Why

Software such as applications, APIs or libraries require versioning to track new developments in the code. Semantic versioning categorizes changes into major, minor or patch. These categories indicate whether the changes are backwards-compatible in functionality. Semantic versioning lets developers know if it is safe to upgrade libraries in their codebases.

## What

Semantic versioning defines a version number in the format of MAJOR.MINOR.PATCH.

When updating the version, increment the:
- MAJOR version when you make incompatible changes,
- MINOR version when you add functionality in a backwards-compatible manner
- PATCH version when you make backwards-compatible bug fixes.

In some cases, this is not necessary, and simple incremental major version numbers is also acceptable.

## How

### Library versioning

Use semantic versioning with the standard [npm publishing](npm.md) interface.

### API versioning

If an API frequently introduces incompatible changes, versioning is necessary. It is recommended to keep consumed features backwards compatible in new releases. Consumed features are pieces of functionality that applications are using at the time the version is updated. These features should remain functioning even as the version increments. It is not recommended to keep copies of incompatible versions running to serve applications that are still on older versions.

API platform services typically require versioning since these services are shared by teams.

There are multiple ways a version could be passed to an API:

1. By defining version in a custom request header
2. By defining version in the URL path
3. By defining version as a query string parameter
4. By using a custom media type, within Accept and Content-Type headers

In general, we would encourage using approach (1) with a custom header named "Version" and the value as the version number.

eg. `Version: 1.0.2`

Problems with the other approaches:

- Defining it as part of the URL (2) is not RESTful. When a version increments, the URL path will change, however, the returned resource remains the same. This is not RESTful behaviour. It is only commonly used for versioning that only has MAJOR.
- Defining it as a query string parameter (3) requires special parsing, cannot be sent back through a response and is not conforming to POST standards.
- Overloading media types and accept headers (4) is difficult to understand for the client and breaks standard media type conventions.

## Who

Everyone!

## References

- [semver.org](http://semver.org/)
