# Continuous Delivery (and Deployment)

## Why

Our [continuous integration](continuous-integration.md) build pipeline asserts that our application artifact is built and tested correctly. Given the confidence that our pipeline instills in our code, when we have proper testing practices, we should also be able to automate the deployment of any version of our application all the way to production.

Benefits: 

- Quicker defect fixes
- Accelerated time to market
- Test new ideas against consumers
- Quickly pivot on designs based on immediate feedback (build the right product)

## What

Continuous delivery is a natural superset of continuous integration. It strives to automate the delivery of customer value, all the way to production, as often as possible. Every single git commit is built, tested and deployed through successive environments, all the way to production (and beyond). Any business processes that need to occur to deliver a feature should be handled by the delivery pipeline.

Definitions of Continuous Delivery vs Continuous Deployment are still up for debate. Some believe Continuous Deployment is only achieved if the push to production is completely automated, with no manual steps. Others believe that manual gating is fine, as long as the deployment is automated.

## How

Our delivery pipeline standards currently automate the deployment all the way to production:

- Build the artifact
- Unit test
- Optional: mock integration test
- Security scan
- Deploy to staging environment
- Integration/E2E test against staging environment
- Deploy to production
- Integration/E2E test against production environment

You should also feel secure knowing that our platform also allows for immediate rollbacks of any prior deployed version. In OpenShift/Kubernetes, you would simply select the previous deployment of your application (or any one before it), and click the "Roll-back" link.

### Manual gating

After the staging integration test has passed, and before the production release goes through, BY DEFAULT we have a manual gated production deployment. You will be notified on slack when the production release is ready to launch. Following the link onto the Jenkins instance, you can click the "proceed" button to trigger the automated deployment to production to continue. The idea is that a product owner or QA can manually test the feature before shipping it to customers.

If you feel secure and confident in your build pipeline, the manual gate can also be removed. This is highly recommended for teams that are absolutely dedicated to keeping their code well tested, and their builds green.

If you find yourself not clicking the button to deploy to production, ask yourself "Why?". Perhaps you are lacking a certain degree of testing, and should focus on improving this. In general, hoarding changes in the staging environment is not ideal, as you will be deploying many more changes to production all at once, which increases the risk, as context around the older, undeployed user stories will be slowly forgotten. There are also valid reasons for not deploying to production immediately, for example, government regulations, or domain/business restrictions.

## Who

@delivery

## References

- [Continuous Delivery (Jez Humble)](https://continuousdelivery.com/)
- [Stackoverflow](https://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment)
- [Wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery)