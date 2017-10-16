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

### Ownership and updating

No one team owns the starter kits. They are worked on collaboratively, with an open-source pull-request model. The standards are managed through the weekly [Architecture Forum](https://github.com/telusdigital/architecture-forum), on [#TechMondays](https://telusdigital.atlassian.net/wiki/display/techmondays/Schedule). If you are looking for a new feature to be added, you should join the forum and open an issue, although this is not required to submit a pull request.

The starter kit projects are designed to be [named anything](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/CLONING.md), and be [deployed to any OpenShift project](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/openshift/README.md). We are working on [shippy](../delivery/shippy.md) to expedite the creation of projects in GitHub, using starter kit templates.

### Make a change

To make a change to a starter kit:

- Fork the starter kit or create a branch
- Make your changes to the branch (with commit messages using [Karma format](https://conventionalcommits.org/))
- Once changes are ready, it is recommended that you merge any changes from master, and run `yarn upgrade` to ensure you are up to date
- Test your branch on the sandbox environment, all the way to "production" ([following the OpenShift setup instructions](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/openshift/README.md))
- If your pipeline fails in sandbox, make the appropriate fixes
- Once tested end to end, open a pull request (add a link to your sandbox namespace in the comments)
- For pull requests that are not intended to be merged immediately, make sure you label them as WIP (work in progress)
- The pull request can be reviewed and completed by members of the Technical Outcomes team or any GitHub administrators
- The pull request should be *SQUASHED*, not merged, so that there's one easy-to-follow commit for developers who are merging changes from the starter kit to their older projects
- If there are any pipeline failures in master, either revert your change, or fix it immediately! This is of paramount importance, as people will be cloning it in a broken state, if it is not fixed.
- Use GitHub to tag and release the starter kit with a changelog and a new version: Major changes should be reserved for extreme breaking changes (e.g. switching out a core framework used by the tool). Minor changes can denote updates to existing tooling with significant complexity to update. Patch changes can denote trivial updates or newly added tooling that is easily ported.
- For each release, post in the `#gong` and `#g-developers` slack channel when you make an update, so that developers know to pull the change if they need it

## Who

Everyone!

## References

- [Telus Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit)
- [API Starter Kit](https://github.com/telusdigital/api-starter-kit)
- [Starter Kit Starter Kit](https://github.com/telusdigital/starter-kit-starter-kit)
