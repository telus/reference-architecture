# Libraries

## Why

To prevent teams from duplicating work and to allow for easier maintenance of our applications, teams may want to create [npm libraries](npm.md) to allow for reuse of components or logic. Defining standards and principals behind this type of code reuse will help us to reduce the effort required by teams to use and maintain these libraries.

## What

Teams should consider creating an npm library for reuse across TELUS when:

*   There's TELUS-specific logic that we want to share between applications
*   There's no existing open source alternative for the problem we're trying to solve
*   We're confident that the solution is relatively stable
*   Library responsibilities are clear

## How

Any library should:

*   Be driven by the needs of the consumer
*   Be decoupled from the implementation of the consuming application
*   Have easy-to-consume APIs
*   Be explicit about dependencies
*   Include documentation with example usage
*   Follow the versioning strategy defined [here](versioning.md)
*   Include [automated tests](https://github.com/telusdigital/reference-architecture/tree/master/testing)
*   Have clear [contribution guidelines](https://github.com/telusdigital/reference-architecture/blob/master/.github/CONTRIBUTING.md)
*   Use the [npm library starter Kit](https://github.com/telusdigital/npm-library-starter-kit) as a starting point.


## References

-   [Versioning](versioning.md)
-   [npm library starter kit](https://github.com/telusdigital/npm-library-starter-kit)
