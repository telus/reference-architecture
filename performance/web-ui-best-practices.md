# Web UI Performance Best Practices

## Why

See [Performance Overview](performance-overview.md)

## How

The performance best practices below should be considered and applied to every web interface we develop.

For detailed insights into the importance of these practices, it is essential to understand the [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/); the practices and tactics below are designed to optimize the critical rendering path.

### Reduce Payloads

#### Tactic

**Reduce payloads** by loading only what is needed to render the given route with [Code splitting](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/) Javascript and CSS at the route level.

Code splitting is only required when your JS and CSS files exceed (or are expected to exceed) ~250kb compressed. For a better understanding of when to code split, view Lighthouse’s JavaScript Bootup Time is Too High audit.

Code splitting files smaller than this can have negative performance impacts; the benefits of small file downloads are offset by the cost of network round trip times

### Lazy Loading

#### Tactic

[Lazy Loading images and videos](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/).

#### Implementation

If hosting images with Contentful, use the [ResponsiveImage Component](https://github.com/telus/redux-contentful#responsiveimage-).

Alternatively, use the [react-lazy-load middleware](https://www.npmjs.com/package/react-lazy-load) which is a wrapper in the ResponsiveImage component.

### Compression of JS and CSS

#### Tactic

Minify [CSS](https://github.com/NMFR/optimize-css-assets-webpack-plugin) and [Javascript](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) in your Webpack build.

Set Content-Encoding entity header to gzip compression.

#### Implementation

[Compression Middleware](https://www.npmjs.com/package/compression).

### Compression of Images

#### Tactic

Compress, properly size, and serve in an optimal image format. See [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization). 

#### Implementation

If hosting images with Contentful, use the [ResponsiveImage Component](https://github.com/telus/redux-contentful#responsiveimage-).

### HTTP Caching

#### Tactic

Never download the same resource twice.<br><br>Cache versioned assets with a 365 day cache duration (`Cache-Control: { max-age: 31536000 }`).<br><br>[Learn more about HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching).

#### Implementation
Use [Express.static middleware](https://expressjs.com/en/starter/static-files.html).

### Avoid Render Blocking Requests

#### Tactic

Javascript files (and CSS and fonts) are render blocking by default. This means, until these files have been downloaded and parsed, no other processing can occur. See [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)

Use [async or defer script attributes](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/#use_async_or_defer) to prevent render blocking

OR

load prior to the closing body tag if load order is critical

#### Implementation

Use the [HTML component in Isomorphic Core library](https://github.com/telus/isomorphic-core/blob/master/src/components/Html.jsx)

### Resource Hints

#### Tactic

Preload assets that are essential to the rendering of a given route: e.g., [fonts](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#customize_the_text_rendering_delay), CSS, and Javascript files. See [Resource Prioritization](https://developers.google.com/web/fundamentals/performance/resource-prioritization)

#### Implementation

Use the [HTML component in Isomorphic Core library](https://github.com/telus/isomorphic-core/blob/master/src/components/Html.jsx).

The best practices above provide a solid foundation towards achieving our [overall performance goals](performance-overview.md). However, each application will have its own unique opportunities and challenges. 

As such, it is highly recommended that you read the Performance Reports produced by Lighthouse for the details on how best to address your unique performance opportunities.
