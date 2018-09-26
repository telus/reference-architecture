# Continuous Integration (CI) & Continuous Delivery (CD)

## Why

[Continuous Delivery](continuous-delivery.md) is closely related to [Continuous Integration](continuous-integration.md) but they are often provided within the same tools, and while the topics are co-dependant, they do represent two separate paradigms.

## What

Areas of concern:

### Continuous Integration

- Focuses on enabling a smooth developer experience
- Coupled to Code Repositories
- Functional testing _(unit, quality, interaction, headless, etc ...)_
- Produces build artifacts
- Promotes release _candidates_
- Allows for flexibility of developer workflows _(branch based, pull requests, etc ...)_
- Code Isolation _(No Customer Data, or live databses)_
- Facilitates Quality measurements through integrations with other tools
- Provides Dashboards for build status and visibility into build artifacts

### Continuous Delivery

- Focuses on protecting and gating infrastructure environments _(e.g. production, staging)_
- Coupled to Infrastructure Design
- Integration testing _(knows about secrets, tokens, environments)_
- Load & Performance testing in the right infrastructure environment
- Environment management and deployment configuration
- Provides deployment strategies & rollbacks

## How

- [Continuous Integration](continuous-integration.md)
- [Continuous Delivery](continuous-delivery.md)
