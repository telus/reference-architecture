# Resource Hinting

## Why

We want TELUS websites to load as fast as possible while not being wasteful of end users' time and hardware capabilities. Users who have either powerful or weak hardware will both benefit from resource hints as they provide a means to fetch assets asynchronously and cache them quickly, and will facilitate development teams who are strongly encouraged to meet our [performance baseline](./performance-baseline.md).

## What

Resource hint example:

```html
<head>
  <!-- Preload resource hint and store in cache -->
  <link rel="preload" as="script" href="https://cdn.telus.digital/ui/consumer-header-footer/header/global-header.min.js">
</head>

```
The starter kit has some default resource hints for expected content such as bundled JS and vendor files, the global header, and some anticipated CDN assets. There is slightly different usage depending on the site context. Static sites should have resource hints on every page, whereas single-page applications only need them in one location: the rendered `<head>`.

Once set up, resource hints will download assets or perform server handshakes depending on the `rel` attribute, which dictates the hint's behaviour.

## How

When you use the isomorphic starter kit for single-page React applications, you can pass an array of resource hints (see server.js example). **Order matters**, it is recommended to organise your hints in this order, based on their `rel` attribute and intention:

1. `dns-prefetch` - if you fully expect certain external items to download near the middle or end of `<body>` such as analytics, Google fonts, or CDN assets, you can use this to perform the DNS lookup ahead of time. It is cheap, and encouraged.
2. `preconnect` - similar to dns-prefetch, but also performs the TCP handshake. It is not widely adopted by browsers, so dns-prefetch is preferred for now.
3. `prefetch` - asynchronously load assets before the document reaches them near the middle or end of `<body>` such as scripts, images, fonts, or analytics. It has wide browser adoption and is encouraged, though should only be used for assets the page will need soon or shortly after rendering. Try not to overuse, and avoid prefetching assets the user's browser won't likely need.
4. `preload` - similar to prefetch, but gives resources high download priority. **Be sure to provide an `as` attribute** otherwise you may unintentionally direct the browser to download items twice. For JS assets, use `as="script"`.
5. `prerender` - download and prerender a page, having it ready to view instantly. **This is a heavy hint**, and should be used carefully.

## References

- [Resource Hints](https://medium.com/@luisvieira_gmr/html5-prefetch-1e54f6dda15d)
- [Preload, Prefetch, and Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Preload webpack plugin](https://github.com/googlechrome/preload-webpack-plugin)
- [Resource Hints (caniuse)](http://caniuse.com/#search=resource%20hints)
