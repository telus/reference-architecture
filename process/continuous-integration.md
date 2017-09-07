# Continuous Integration

## Why

In an Agile development team, we want to release changes quickly. We want to minimize the time it takes to release code. However, we are working with many other teams in a large organization... we need some way to minimize the integration friction that we experience, when several teams are working on different features in the same codebases. Integration issues need to be caught as early as possible.

## What

Continuous integration is a set of principles, practices and procedures that makes it easier for large teams to collaborate together. Previously, under waterfall development, large chunks of scope would be peeled off and worked on in isolation, until the entirety of the scope was completely finished. Integration was pushed as late as possible, because it causes lots of friction due to exposing numerous bugs all at once.

With continuous integration, teams push changes to the shared codebase several times per day. We have an automated build pipeline that tests every commit, which detects the bugs as early as possible in the development process. This allows us to move much quicker with feature rollouts, minimizes friction between teams, and ensures we don't release broken code.

On our previous PHP My-Account codebase, it would take a week to manually merge dozens of feature branches into a single release. If any changes to any feature in any branch of any github repository caused issues, the whole release would be delayed or called off. Integration friction happened in the majority of releases. Now with continuous integration in our new architecture, we release dozens of times per day, to dozens of apps, with FAR fewer issues than before.

## How

### Story sizing

It is important that user stories are kept small. Large tasks are broken down into smaller ones, until they can be accomplished within a day.

### Trunk based development

For most changes, we now use Trunk Based Development. This means most changes are committed directly to master, without first making a branch. Sometimes branches are unavoidable, e.g. when doing large refactoring, etc., but these should be as short-lived as possible.

### Feature toggles

For stories that take longer than a day, consider using a "feature toggle" (in its most basic form, a boolean configuration plus an if/else block), where your feature is disabled in production upon deployment. You can leave it enabled in development and staging environments, for integration testing. This still ensures that code is integrated continuously, so there are less, if any, merge conflicts.

### Test driven development

Before a feature is developed, we write a unit test that tests the feature we want to implement. First we run the test, to ensure that it fails. This is a good thing! Now we write the feature that satisfies the test. If your test doesn't make breaking changes to the interface, it is safe to commit at this point. If it does modify the interface, the integration test needs to be updated to account for the new feature.

### Security testing

Additionally, we include tools like `nsp` and `snyk` to test our code for known vulnerabilities. More can (and will!) be added here... e.g. Twistlock allows us to monitor all running Docker containers on our cluster for application vulnerabilities as well.

### Git commit hooks

We use a pre-commit hook to guarantee that tests are run, before committing a feature. This ensures that the delivery pipeline is not broken very often.

### Delivery pipeline

The delivery pipeline takes each and every commit, builds the application artifact and unit tests it. If the tests pass, it deploys it to a pre-production integration testing environment, where integration tests are run to ensure the application functions (either end-to-end browser tests for UI or API contract tests for backend). Finally if all stages have passed, the option is given to deploy to production.

### Visibility

Failures and production deployments should be as visible as possible. We have dashboards in Jenkins and OpenShift, as well as Slack notifications, to tell us when things are good or bad.

### Smaller applications

Monolithic architecture, waterfall development and large code changes are not conducive to independent, high performance teams. It is hard for many teams to truly _own_ a single project. And tight-coupling between shared libraries and frameworks causes integration friction that harms development.

Rather than our previous single shared codebase, switching to microservices and standalone single-page-app UIs has been one of the major keys to unlocking delivery performance and release safety. Microservices can have well-defined contracts for integrating with each other. Our standalone UIs leverage a shared design framework to ensure that, while they are still independent codebases, they still look the same.

### Product Ownership vs Project Management

TELUS digital teams have restructured into outcome teams, to improve ownership of code, and independence of releasing. With smaller projects, teams can now own entire github repos, with their own standalone build pipelines, etc.

### Declarative programming

The tools we have chosen for reference architecture support **declarative programming**. Rather than traditional applications, which are not immutable or ephemeral, declarative code describes the structure, without describing its control flow.

For example, in React.js, we define a template that displays a specific view model. To change the page, we simply update the view model with new data. React will declaratively reconstruct the page, on the fly, without requiring us to manually edit the DOM.

Similarly, with our container platform Kubernetes, we upload a "state" of an application, e.g. deploy container X with environment variables Y and this much RAM. Kubernetes doesn't ask "how": it internally decides where to deploy your application, on any node in the cluster with enough space.

### Dev/prod parity

Minimizing the differences between development and production also decreases the number of missed bugs. Similarly, all pre-production environments should be built as close to, if not identical to, the production environment.

## Who

@delivery

## References

- [Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html)
- [Thoughtworks CI](https://www.thoughtworks.com/continuous-integration)
- [Wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)