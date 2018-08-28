# New Relic

## Why

We need to know the status of our applications. Are they running? Are they running WELL? Is the site performant? Are we seeing lots of errors?

When shit hits the fan, how do we know? How do we escalate to someone who can fix it?

## What

We use New Relic as a monitoring suite, to test the health of our applications, how quickly they are responding, etc. It also has scripts that run through our sites/services to continuously ensure that they work end to end.

## How

Our [Starter Kits](starter-kits.md) ship with New Relic monitoring enabled by default. An agent runs on our Node.js applications, which sends data to their API about the performance and health of our applications.

We can also write synthetic scripts that continuously probe our applications, to automate repeatable functional testing, end to end.

At a bare minimum, we require APM for all applications. For user interfaces, we also require Browser monitoring.

### APM

The New Relic APM agent runs within our Node.js Docker containers, and monitors the request/responses. It graphs the response time, and you can break it down based on the URL path, and even see which specific functions are taking the longest to execute.

### Browser

While APM monitors up until the point that the response is served to the client, the browser monitoring installs additional tooling in the client-side HTML, which also gives us metrics about how long it takes the page to render, performance of AJAX requests, etc.

### Synthetics

Synthetics are not a replacement for functional End to End testing as part of our delivery pipelines. However, they suppliment it by giving us continuous feedback, even after an application has launched. At bare minimum it can be set up to ping your site, but you can expand that with scripted browsers, or API tests.

### Infrastructure

**Not in use currently (but planned)** `:(`

While APM monitors our application containers, the New Relic infrastructure monitoring would run on all of our Kubernetes/OpenShift "minion" servers, and give us a full inventory of the health of our cluster nodes.

## Who

@delivery

## References

-   [APM Docs](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm)
-   [Browser Docs](https://docs.newrelic.com/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)
-   [Synthetics Docs](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics)
-   [Infrastructure Docs](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure)
