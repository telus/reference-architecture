# Performance Overview 

## Why

Online users have a myriad of options available to complete their desired goals, quickly. User expectations are further heightened by best-in-class experiences throughout the digital landscape. 

While there a host of characteristics that impact user experience, crafting digital experiences that are performant (fast) is critical to driving traffic, generating leads, improving conversion rates, increasing revenue, and ultimately increasing user satisfaction.

## What

To support teams in achieving performance excellence throughout telus.com, we principally rely on a custom implementation of [Google’s Lighthouse](https://developers.google.com/web/tools/lighthouse/) for automated performance testing. 

Lighthouse is a framework for testing web pages against a host of performance best practices. When run, it provides detailed scoring across several KPIs along with actionable insights into what were doing well and areas for improvement.

At present, we largely monitor three Lighthouse performance metrics and associated targets:

- Overall Performance Score >= 70
- First Meaningful Paint < 3 seconds
- Time to Interactive < 5 seconds

## How

Lighthouse can be run as a Chrome browser extension, in the Chrome Dev Tools Audit panel, and as a CLI tool.

For consistent results, and to enable audits for other Digital Basics (e.g. Content, SEO, Accessibility, …), we employ a custom Lighthouse implementation (TELUS-Lighthouse) which is integrated in the Isomorphic Starter Kit and other Digital Platform applications. 

TELUS-Lighthouse is configured to run in our build pipeline and, optionally, with Git hooks (e.g. pre-push). Thresholds can be enabled and modified, if desired by teams, to ensure underperforming web pages fail the build, or in the case of git hooks, prevent merging into master altogether.

TELUS-Lighthouse is also run against all customer-facing URLs each day; the results of which are surfaced in our internal analytics dashboards.

For additional performance reporting, we also encourage the use of [New Relic](https://newrelic.com/products/application-monitoring).

## References

### Performance Testing / Monitoring

- [[Lighthouse v2](https://developers.google.com/web/tools/lighthouse/): all things Google Lighthouse]
- [[Chome Dev Tools Performance Analysis](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/): in-depth instructions on using Chrome’s Performance tooling]
- [[Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/): online web page testing resource]


### Performance Definitions, Strategy and Tactics

- [[Google Performance Tactics](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint) - a comprehensive list of performance considerations and tactics]
- [[Think with Google](https://www.thinkwithgoogle.com/)]


### Performance People

While performance expertise abounds, the following individuals are credible and very knowledgeable resources.

- [Paul Irish](https://twitter.com/paul_irish)
- [Addy Osmani Irish](https://twitter.com/addyosmani)
- [Ilya Grigorik](https://twitter.com/igrigorik)
