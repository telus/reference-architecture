# Load testing

## Why

We want our websites to handle large volumes of customer traffic.

## What

We need to send simulated traffic to our application, as a step during the continuous delivery pipeline, to confirm that the application is performant.

Our starter kits, by default, are expected to serve 50 RPS ("requests per second"), with max 50ms latency and 100ms response for 95% of traffic. These variables should be tunable, based on load expectations for your application.

## How

Use [Artillery](https://artillery.io/) to load test after the application is deployed to staging.

The [starter kits](../development/starter-kits.md) include a load testing phase in their continuous delivery pipelines. By default this is just a simple test against the staging hello-world route. You can enhance this for your projects by customizing a YAML file with the load testing flow (see [docs](https://artillery.io/docs/getting-started/))

**Do not load test openshiftapps.com or telus.com routes**; instead, test the _internal_ OpenShift service route, so that we test our application and its downstream dependencies only

Load testing downstream services may require a fixed testing window, otherwise these tests need to be kept small.

## Who

@delivery @qa

## References

- [Artillery docs](https://artillery.io/docs/gettingstarted.html)
