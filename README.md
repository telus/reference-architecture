![Reference Architecture Wiki Logo](logo.png "Reference Architecture Wiki")
---
> This is a collaborative effort to document our digital standards, tooling and process, you are welcome to contribute and suggest changes, please follow the [contribution guidelines](.github/CONTRIBUTING.md)

## Why

For new and existing team members & partners, a single place where all the technical knowledge and platform specifications can be documented, tracked and debated.

## What

### Development

#### Concepts & Architecture

- [Starter Kits](development/starter-kits.md)
- [Versioning](development/versioning.md)
- [BFF](development/bff.md) _(Backend-for-frontend)_
- [URI Templates & Structure](development/uri-structure.md)
- [Application Configuration](development/application-configuration.md)

#### Languages & Frameworks

- [CSS](development/css.md)
- [JavaScript](development/javascript.md)
  - [Node.js](development/node.md)
  - [Isomorphic / Universal](development/isomorphic.md)
  - [Transpiling](development/transpiling.md)
  - [Express](development/express.md)
  - [React](development/react.md)
  - [Redux](development/redux.md)

#### Tooling & Libraries

- [Caching](development/caching.md)
- [Databases](development/databases.md)
- [Git & GitHub](development/git.md)
- [Jest](development/jest.md)
- [Logging](development/logging.md)
- [NewRelic](development/newrelic.md)
- [Publishing to NPM](development/npm.md)
- [Webpack](development/webpack.md)

#### Syntax & Style

- [Code formatting](development/code-formatting.md)
- [ESLint](development/eslint.md)
- [Gitignore](development/gitignore.md)

### Process

- [Continuous Integration](process/continuous-integration.md)
- [Continuous Delivery](process/continuous-delivery.md)
- [User Stories](process/user-stories.md)
  - [Smaller Stories Are Faster](process/small-stories-are-faster.md)
- [Project Template](process/project-template.md)
- [Contribution Model](process/contribution-model.md)
- [Archiving Repositories](process/archiving-repositories.md)
- [Architecture](process/architecture.md)

### API Platform

- [Authorization Proxy](api/authorization-proxy.md)

### Testing

- [Testing Overview](testing/)

### Delivery

- [Docker](delivery/docker.md)
- [Kubernetes](delivery/kubernetes.md)
- [OpenShift](delivery/openshift.md)
- [Jenkins](delivery/jenkins.md)
- [Secrets](delivery/secrets.md)
- [TLS Routes](delivery/tls-routes.md)
- [Inbound Proxies](delivery/inbound-proxies.md)
- [Shippy](delivery/shippy.md)

### Performance

- [Performance Baseline](performance/performance-baseline.md)
- [API Optimization (Server Side)](performance/api-optimization.md)
- [Server Side Rendering](performance/server-side-rendering.md)
- [Image Optimization](performance/image-optimization.md)
- [CSS Optimization](performance/css-optimization.md)
- [Resource Hinting](performance/resource-hinting.md)
- [Page Speed Insights](performance/page-speed-insights.md)

## How

A *thin* and simple format documentation for technical resources, tools, platforms and decisions. Members can quickly and easily get context on "Why, What & How" for every part of our platform

A Public Github repository, with Markdown articles as content, (using the repository itself, rather than the "Github Wikis" Feature, this ensures:

- version tracking, and usage of github git gui features (blame, history, branches, diff, etc ...)
- publish into a static website using Github Pages
- leverage branch locking and other Github features only available in content repos

The format should follow [this template](.template.md)

### Conformance

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://www.faqs.org/rfcs/rfc2119.html).
