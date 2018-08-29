# Transpiling

## Why

Transpiling converts newer JavaScript formats (denoted by the ECMAScript standard) into older versions of JavaScript (commonly known as the "ES5" standard), to improve support for older web browsers. Typically this requires an additional build step, though can be done on-the-fly at the expense of memory/CPU during runtime.

## What

At a bare minimum, we use ES6/ES2015 standards across all of our applications. Whether we need transpiling or not depends on the environment we are building for.

## How

### Node server-side applications

It is preferred that we DON'T use transpiling for server-side applications (API's, etc). It adds build time, consumes memory, and makes it harder to debug applications. Instead, use the latest version of "ECMAScript" JavaScript standards supported by our current [Node.js version](node.md#how). We currently support ES2015 on Node 6.

### User interface web applications

For user interfaces that are presented to the web browser, we use [webpack](https://webpack.github.io/docs/) and [babel](https://babeljs.io/) to transpile our application into browser-friendly ES5. Generally we want to keep the version of ECMAScript in sync with our Node.js version, so we currently support ES2015.

## References

- [Babel.js](https://babeljs.io/)
- [Webpack](https://webpack.github.io/docs/)
