# API Versioning Process

## Why

In current state we have no versioned APIs. Eventually we will. This document defines the process for managing this future state with multiple extant versions.

Software versioning is intended to identify breaking changes to consumers of that software.

For example, Customer API plans changes to the address model which will break applications which rely on the current address model.

The current version of Customer API is designated V1. The version including the breaking changes is designated V2. Users of the Customer API will be able to request the version of the API which serves the address model they expect.

How does TELUS Digital manage these contemporaneous versions?

## What

[The TMForum standard for REST API versioning](https://projects.tmforum.org/wiki/display/API/Versioning) is to use [SemVer](https://semver.org/) with major and minor components specified in the URI and major, minor, and patch components in the header. For example:

```
[NO :] X-TELUS-DIGITAL-API-VERSION: v1.2.4
[NO :] GET /v1.2
```

This is done to simplify routing in use cases which are **not applicable to TELUS Digital.**

TELUS Digital standard is to use major and minor in the URI, prepended with a lowercase “v”. For example:

```
[YES:] /v1.2
[YES:] /v2.0
```

## How

**tl;dr:** *Ship a single version of your API and rely on the gateway for routing to different versions of it. Use no more than two production versions, deprecating older versions in order to launch new ones. Route within your codebase only if the gateway is unavailable.*

### Two Production Versions Only

We allow two production versions: `current` and `next`.

`current` and `next` are defined per-API. For example, Customer API could have:

* `current` set to `v1.0`, and
* `next` set to `v2.0`.

Whereas Inventory API could have:

* `current` set to `v5.4`, and
* `next` set to `v5.5`

The actual values of the versions are left to individual teams. `current` and `next` could also, for example, point to major-compatible API versions:

* `current` represents `v5.*`
* `next` represents `v7.*`

When a breaking change occurs the intent is that `current` becomes `next` and `next` is pointed to the new version.

The decision of how many versions to have running in non-production environments, and in the codebase, is left to implementation teams.

### Deprecation Policy

We allow no more than two production versions, as described in the previous section. In order to launch an additional version an older version MUST be deprecated (enforced at the gateway).

You can launch APIs as fast as you like, but you must clean up after yourself! 😀

Communicate to your users as you bump `next` and `current`. **The easiest way to do this is to get a list of your users from the gateway and contact them directly.**

Annoucements should also be made in Slack channels related to the API in question and in `#g-api-practice`.

We recommend you think about your release cadence and the cadence of your dependent teams. When shipping a new version, plan its deprecation at a fixed time in the future which will fit within your **slowest** dependent team's cadence -- avoid making breaking changes more rapidly than your slowest dependent team can ingest.

### Platform Configuration

Versions map directly to branches (similar to GitFlow, and equivalent to tags in trunk-based development). This allows separate versions to share a codebase without duplication.

OpenShift pipelines are configured to ship one version (branch/tag, as above) per API.

Routing is handled at the gateway level. The gateway will not route to more than two versions of each API: `current` and `next` (as above).