# API Performance Standards

## Why

As we are striving to build better and richer experiences for our customers and enable them to do more independently, we end up with apps that are much more richer functionality-wise, and hence more device & network demanding. To enable our users to take advantage of the features we build for them, fully engage with our applications and help us achieve our business objectives by converting, we then need to ensure that the experiences we build are reliable and highly performant.

**Optimizing application performance**<sup>1</sup> is critical to driving traffic, generating leads, improving conversion rates, and increasing revenue.

## What

How does a performant application look like<sup>2</sup>? Using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/):
- Overall Performance Score > 70
- First Meaningful Paint < 3 seconds
- Time to Interactive (TTI) < 5 seconds
- Time to First Byte (TTFB) < 600 milliseconds<sup>3</sup>

In order to achieve the metrics mentioned above, we need to ensure that our web applications are built on top of **high performing APIs**. Slow server response times are often the cause for long page loads.

The majority of our applications call **a minimum of 2 APIs** for the initial page load<sup>4</sup>.

![TTFB](ttfb_api_performance.jpg "Logo Title Text 1")

Considering the time also required by our own application logic, routing, database queries, etc., in order to remain under 600 ms for TTFB, **our APIs should have an <u>average total response time of under 200ms</u> for a <u>throughput of up to 2500 rpm</u><sup>5</sup> (requests per minute)**.

## How

Ensuring that the **performance standards are being met is the responsibility of the API owners**, and should happen prior to delivering the API as a final product to the consumers.

**Consumers of APIs are responsible for running load tests prior to integrating** with the respective APIs. If the load tests have unsatisfying results, it is the responsibility of the consumers to push back and discuss the results, solutions, and timeline impacts with the API owners. Any updates to the API (e.g. new versions released) have to be communicated to the consumers, and load tests have to be run to ensure that the performance standards for both the new and old versions of the API are being met.

**Our performance standards apply to all environments**. Deviations from the expected response times in non-production environments should only be accepted it on a case-by-case basis and only if valid justification is provided.

<br />

---

1. For more on the importance of performance and its impact on our business, check out the [2018 Performance Playbook](https://docs.google.com/presentation/d/1dWiRTzLcAdMEyKUXvj2MlvT_8lZnLkQNmPOl-Ux2Xn4/edit#slide=id.g3d730d9bd0_12_132).
2. For more information about our current web standards and the rationale behind them, check out the [2018 Performance Playbook](https://docs.google.com/presentation/d/1dWiRTzLcAdMEyKUXvj2MlvT_8lZnLkQNmPOl-Ux2Xn4/edit#slide=id.g3d730d9bd0_12_132).
3. Based on Lighthouse [TTFB recommendations](https://developers.google.com/web/tools/lighthouse/audits/ttfb).
4. For experiences that rely on a greater number of APIs, consider deferring calls, prefetching or using a caching layer.
5. Based on [max throughput registered](https://rpm.newrelic.com/accounts/648105/applications/28787546/optimize/scalability_analysis#tab-metric=response_time) for Customer API, our [most requested API](https://datastudio.google.com/reporting/1Z5rJGInewNcO9WwgSkCbJY0Ts2Rmj2Wc/page/agRT).
