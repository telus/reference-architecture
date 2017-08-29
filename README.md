![Reference Architecture Wiki Logo](logo.png "Reference Architecture Wiki")
---
> **Note**: This is a work in progress, you are welcome to contribute and suggest changes, please follow the [contribution guidelines](.github/CONTRIBUTING.md)

## Why

For new and existing team members, a single place where all the technical knowledge and platform specifications can be documented, tracked and debated.

## What

### Development

#### Process

- [Continuous Integration](process/continuous-integration.md)
- [Continuous Delivery](process/continuous-delivery.md)
- [User Stories](process/user-stories.md)
  - [Smaller Stories Are Faster](process/small-stories-are-faster.md)
- [Project Template](process/project-template.md)
- [Contribution Model](process/contribution-model.md)

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

- [Publishing to NPM](development/npm.md)
- [Webpack](development/webpack.md)
- [Jest](development/jest.md)
- [NewRelic](development/newrelic.md)
- [Logging](development/logging.md)
- [Caching](development/caching.md)
- [Databases](development/databases.md)

#### Syntax & Style

- [Code formatting](development/code-formatting.md)
- [Gitignore](development/gitignore.md)
- [ESLint](development/eslint.md)

#### Best Practices

- [Caching user data](best-practices/caching.md)

### API Platform

- [Authorization Proxy](api/authorization-proxy.md)

### Testing Practice

- [Unit testing](testing/unit.md)
- [End to End testing](testing/e2e.md)
- [Security testing](testing/security.md)
- [Visual regression testing](testing/visual-regression.md)
- [Accessibility testing](testing/accessibility.md)
- [Load testing](testing/load.md)
- [SEO testing](testing/seo.md)
- [Analytics testing](testing/analytics.md)
- [Consumer driven contract testing](testing/consumer_driven_contracts.md)
- [Performance Testing](testing/automated-testing.md)

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

### Analytics

_TBD_

### Design

_TBD_

## How

A *thin* and simple format documentation for technical resources, tools, platforms and decisions. Members can quickly and easily get context on "Why, What & How" for every part of our platform

A Github repository, with Markdown articles as content, (using the repository itself, rather than the "Github Wikis" Feature, this ensures:

- version tracking, and usage of github git gui features (blame, history, branches, diff, etc ...)
- publish into a static website using Github Pages
- leverage branch locking and other Github features only available in content repos

The format should loosely follow the following template:

```
# Subject Title

## Why

provide background information, problem description, challanges and/or goals

## What

The subject details, describe the tool / technology in detail, prefer linking to external sources if a 3rd party

## How

The **TELUS Digital context** of how we're using the described subject, provide **deep details** here, including usage manual, API documentation, operational guidelines, etc ...

## Who

`@` mention **teams** who are stakeholders or owners of described subject (see Github Members Groups)

## References

- [[link]] to internal references, and other wikis
- [[link]] to external references, documentation, product manuals and documentations
```
