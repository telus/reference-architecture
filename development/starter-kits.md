# Starter Kits

## Why

Our reference architecture has quickly evolved and expanded throughout the organization. However, there are a LOT of concepts and tools to juggle, each with their own best practices, with few domain experts available to support each concern. How do we keep all of our standards in check, as we accelerate through this transition into reference architecture? How do we minimize the time to kickoff a new application? How do we ensure that our new applications are compliant with our specification and security standards? How do we keep ourselves from wasting time, by reinventing every wheel?

## What

Starter kits are a reference implementation of our reference architecture. A living styleguide. A production-ready, fool-proof "Hello World". They are designed to easily be cloned, in order to start new applications on the right foot, with the current best practices implemented from the start. There's also a means of merging in new changes from the starter kits, to ensure they stay current.

## How

Our starter kits are autonomous GitHub repositories, with all of the functional implementation for a full [Continuous Integration](../process/continuous-integration.md) and [Continuous Delivery](../process/continuous-delivery.md) build pipeline. They implement our best practices for [Node.js](node.md), [React](react.md), [Redux](redux.md), [Express](express.md), [Jenkins](../delivery/jenkins.md), [Docker](../delivery/docker.md), [Kubernetes](../delivery/kubernetes.md), [OpenShift](../delivery/openshift.md), [Secrets](../delivery/secrets.md), [Logging](logging.md), [New Relic](newrelic.md), [Code Formatting](code-formatting.md), [BFFs](bff.md), and much, much more.

They have been developed in a collaborative partnership with the following teams:
- Delivery
- Security
- API Platform
- Content Platform
- Telus Design System
- Quality Assurance
- Incident Management
- etc.

No one team owns the starter kits. They are worked on collaboratively, with an open-source pull-request model. The standards are managed through the weekly [Architecture Forum](https://github.com/telusdigital/architecture-forum), on [#TechMondays](https://telusdigital.atlassian.net/wiki/display/techmondays/Schedule).

The starter kit projects are designed to be [named anything](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/CLONING.md), and be [deployed to any OpenShift project](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/openshift/README.md). We are working on [shippy](../delivery/shippy.md) to expedite the creation of projects in GitHub, using starter kit templates.

## Who

Everyone!

## References

- [Telus Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit)
- [API Starter Kit](https://github.com/telusdigital/api-starter-kit)
- [Starter Kit Starter Kit](https://github.com/telusdigital/starter-kit-starter-kit)
