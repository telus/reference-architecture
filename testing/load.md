# Load testing

## Why

We want our websites to handle large volumes of customer traffic.

## What

We need to send simulated traffic to our application, as a step during the continuous delivery pipeline, to confirm that the application is performant.

## How

Use [Artillery](https://artillery.io/) to load test after the application is deployed to staging.

The [starter kits](../development/starter-kits.md) include a load testing phase in their continuous delivery pipelines. By default this is just a simple test against the staging hello-world route. You can enhance this for your projects by defining a YAML file with the load testing flow (see [docs](https://artillery.io/docs/gettingstarted.html))

Do not load test openshiftapps.com or telus.com routes; instead, test the internal OpenShift service route, so that we test our application and its downstream dependencies only

Load testing downstream services may require a fixed testing window, otherwise these tests need to be kept small.

## TODO
 
- [ ] make the load test [pipeline gating](../delivery/continuous-delivery.md#automated-gating)
- [ ] add example artillery yml

## Who

@delivery @qa

## References

- [Artillery docs](https://artillery.io/docs/gettingstarted.html)
