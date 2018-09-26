# Continuous Integration (CI)

> **CI vs CD ?** Please refer to the [CI/CD topic](ci-cd.md).

## Why

When developers are integrating code into a shared repository several times a day. Each code commit needs to be verified, tested and inspected to ensure it follows our Reference Architecture standards, security requirements, and general policies and best practices.  

Continuous Integration is cheap. Not integrating continuously is expensive. When running integrations and tests so frequently, there is significantly less back-tracking to discover where things went wrong, so we can spend more time building features.

## What

In our context, given the technology platform and tools we use, we've identified the following key areas of interest for CI:

### Critical Needs

The following areas are critical needs for TELUS:

#### Modern developer experience

All modern organizations heavily depend on a digital workforce to achive their outcomes, in the context of software development, the developer workforce requires higher order of digital friendly products that _accelerate_ and _enable_ rather than _gate_ and _hinder_ their outcomes.

While this is a hard and ever evolving target to measure, it's immediately clear a balance needs to be struck between stability and modern practices, with an eye on the technology platforms of choice and the market forces driving these changes.

#### Declarative Config

Modern CI products rely on declartive configuration with focus on simplicity and customization to enable a modern developer experience, and while this might be limiting in some cases, it is more empowering for cross-team collaboration and provides better visibility and auditability than programatic configuration systems.

#### Single Sign On

We have a large team, and we need to ensure onboarding and offboarding to developer tooling is inclusive of our SSO corporate identity

#### iOS support

There are many _mobile app_ focused CI solutions. However, we prefer to keep our web and mobile tooling close and consistent. _iOS_ makes this very difficult as an added complexity for supporting the Apple platform.

#### Security Compatibility with our corporate policies

As a Canadian Telecom business, we have a set of security and privacy policies that govern our operations, therefore any product or service we rely on needs to support those policies, _(e.g. encryption, access controls, credential binding, log filtering, etc ...)_

#### Docker as first class citizen

Since we rely on [Docker](../delivery/docker.md) for our local development and in our deployment infrastructure, our CI tools should also reflect these choices to ensure highest level of interoperability.

#### Decoupled from Infrastructure

While solutions like [Docker](../delivery/docker.md) allow for a higher order of de-coupling between code and infrustructure, we found that in many cases, special care is needed to configure Docker to work in both CI and CD domains, which leads to sacrifices and unwanted complexity.

### Ideal CI Features

The following areas are nice-to-have but not critical features we expect in CI tooling:

#### SaaS First

In alignment with our tooling choices and a digital-first products, we choose to rely on SaaS solutions _FIRST_, until a need arises where we have to maintain a solution within our own infrastructure _(e.g. security and privacy concerns)_

#### Tooling Integration

CI Solutions need to enable a higher level of integrations out of the box with other developer tooling, to better enable developer acceleration, without relying on custom integrations _(unless absolutely needed)_

#### Dashboards & Reporting

Automation without visibitliy is meaningless, products in the CI space need to provide clear and open dashboards, reports and build history to track the status of code commits and enable auditabiility

#### Build Logs

Relying on local development environments is not enough, therefore any CI solution needs to surface detailed logs to allow for debugging build issues.

#### Flexible Capacity

We're a big development team that is constantly committing code to our repositories every day, therefore CI solutions need to accomodate our size and our speed.

### API Enabled

We should be able to trigger, configure and completely manage any development tooling product though APIs, especially CI solutions.

### Product Maturity

New CI products surface on the market almost every month, we should be careful to what products and services we adopt if they are not mature enough or the company / open source community supporting them is not mature enough.

### Build Stages

Modern CI tooling enable complex workflow design through a "staged" approach to a build process, this is key for complex and large applications to enable shortened build times in context of change and target environment.

### Centralized Configuration

A large team has an even larger application catalogue, which leads to an even larger amount of code repositories. Having centralized configuration alleviates the need for duplication as well as enable governance and policy controls.

## How

We're currently using Jenkins for both CI and CD domains. and we're in the process of evaluating separate CI tooling.

## References

- [Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html)
- [Thoughtworks CI](https://www.thoughtworks.com/continuous-integration)
- [Wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)
