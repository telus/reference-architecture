# Performance Baseline (for Isomorphic Single Page Apps)

## Why

Performance is critical to the success of modern web applications, and has been shown to impact many metrics such as:

- User Experience
- User Engagement
- Conversion Rate

As our applications become more complex, it can be difficult for teams to know when and how they need to be responsible for performance.

To support teams in their success we have established a baseline for Reference Architecture applications to measure themselves against, during development and as part of production readiness.

## What

To diagnose Performance in the Reference Architecture we look in 3 separate places in order to evaluate key problem areas:

- Server.js response time (in ms)
- Chrome Developer tools:
    - Dom Content Loaded
    - Loaded
    - Finished
- Google Page Speed Insights

Each of the above tools provides a key insight into identifying how to improve your applications performance. Long-term performance is measured using New Relic.

## How

### Baselines

- Server Side Rendering: < 100ms
- DOM Content Loaded < 1s
- Loaded < 2s
- Finished < 2s
- Page Speed Insights: 80+

### Server Side Rendering
To assist in understanding and triaging SSR, the following guides are here to help.
- [API Optimization](./api-optimization.md)
- [Server Side Rendering](./server-side-rendering.md)

### Browser Performance Metrics
To assist in understanding and triaging DOM Content Loaded, Loaded and Finished, the following guides are here to help.
- [Resource Hinting](./resource-hinting.md)

### Page Speed Metrics
To assist in understanding and triaging Page Speed Insights, the following guides are here to help.
- [Page Speed Insights](./page-speed-insights.md)
- [CSS Optimization](./css-optimization.md)
- [Image Optimization](./image-optimization.md)

## References
- [[Page Speed Rules](https://developers.google.com/speed/docs/insights/rules)]
- [[Chome Dev Tools Performanc Analysis](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)]
- [[Web Performance Tooling](https://www.youtube.com/watch?v=iMqi55rcR00&feature=youtu.be)]
- [[Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)]
- [[Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)]
