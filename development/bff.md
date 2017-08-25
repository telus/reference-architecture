# BFF _(Backend For Frontend)_

## Why

- In a Microservices & API centric environment:
  - Achieve release independence for front-end and mobile applications from API and backend systems.
  
  - Ability to **filter** and **transform** large datasets to fit the UI model
    Domain APIs are likely to be chatty and verbose, which introduces additional processing responsibilities on front-end and mobile applications

  - Limit expensive HTTP traffic
    Battery and performance consideration in mobile web and native mobile applications are usually not addressable through API strategy alone.

- For Web Services (LEGACY):
  - Provide **abstraction of SOAP services** as a transition step into API centric approach.
  - Act as the early prototype for a RESTFUL TELUS API.
  - Web Friendly:
    - JSON transformation from XML
    - RESTFUL Interface

## What

BFF stands for "Backend For Frontend". It's a term that's been discussed a lot as Microservices have grown in popularity.

In the mobile app world, often the BFF is a microservice that helps the app orchestrate and aggregate other domain services.

- The team that makes the app can control this service
- They can put presentation logic in there that they want to change without re-publishing
- If they are releasing both iOS and Android versions, some of the logic can go in the BFF _(see: [Single Responsibility Principle][srp])_

For web teams, it might be simpler just to think of this as "your application". Especially if you're building a standard web app - its going to orchestrate and aggregate access to various back end services to assemble view models, and could also provide endpoints for AJAX scripts or an SPA.

## How

### What should go in a BFF?

Presentation logic, orchestration, and aggregation are usually the stock and trade of the BFF. Generally, if you're setting up an endpoint that other squads might need, consider getting it in to an [API instead][apis]


### Deloyment & Separation

In the [TELUS Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit) you'll find we have both the React Isomorphic (client & server-side) UI, as well as an Express.js BFF in the same repository. Both are set up as separate [Docker](../delivery/docker.md) containers. Locally you can run them separately with `npm`, or together with `docker-compose`. These containers are both built and deployed in parallel to a shared host on our [Continuous Integration](../process/continuous-integration.md)/[Delivery](../process/continuous-delivery.md) build pipeline on [OpenShift](../delivery/openshift.md). By being coupled in the same release, you are able to keep the domain models in sync between the BFF & UI containers, and version them together.
 
### When should a BFF be shared amongst teams or squads?

The main point of the BFF is to unblock teams - instead of requesting that a services team creates a "hybrid" service that orchestrates or aggregates, the team can do this themselves.  When the BFF becomes shared, release independence is harmed, as you need to check with the other squad before you can ship. In general, to avoid this **you wouldn't want to share a BFF between squads.** consider [building an API instead][apis]

## References

- [BFF @ SoundCloud][soundcloud]: 
- [ThoughtWorks Tech Radar][tw-tech-radar]
- [Pattern: Backends For Frontends By Sam Newman][sam-newman]


[soundcloud]: https://www.thoughtworks.com/insights/blog/bff-soundcloud "BFF @ SoundCloud"
[tw-tech-radar]: https://www.thoughtworks.com/radar/techniques/bff-backend-for-frontends "ThoughtWorks Tech Radar"
[sam-newman]: http://samnewman.io/patterns/architectural/bff/ "Pattern: Backends For Frontends"
[apis]: (../../api/README.md) "API Platform"
[srp]: https://en.wikipedia.org/wiki/Single_responsibility_principle "Single Responsibility Principle"