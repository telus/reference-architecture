# Webpack

## Why

There are many packaging tools available for JavaScript, such as Grunt, Gulp, Browserify, etc. They are used for compiling your JavaScript code, to enhance it for production. These tools can download dependencies, minify JavaScript, handle CSS compilation. But these tools must all be run manually, and are not good at performing tasks on the fly.

## What

Webpack builds an entire dependency graph for all of your file types, and lets you specify how to handle them. This can also be done on the fly! It can load, minify and [transpile](transpiling.md) [React component](react.md) JavaScript files at the same time. It can convert SCSS to CSS on the fly. It can resize your images on the fly. You control how the assets are processed, through simple configuration files and plugin libraries. It supports hot-reloading of updated files, while still offering the ability to precompile your entire site for production.

## How

We use Webpack 2.0 for any rich user interfaces, which need a lot of compilation, transpiling, etc. It is not commonly used for APIs. It is used in our [TELUS Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit/) to compile the React.js code into a rich [isomorphic](isomorphic.md) web application, that can be run in Node.js and in the browser, alike.

Webpack supports two modes of transpilation, based on the `NODE_ENV` environment variable.

### NODE_ENV=development

To start in development mode, run `yarn run dev`. This yarn script will set NODE_ENV=development and use Webpack's development configuration. This transpiles your content on the fly, in memory. The application will be slower, but can support features such as hot reloading, etc.

### NODE_ENV=production

To start in production mode, there are two steps: `yarn run build` and `yarn start`, both of which use NODE_ENV=production. Your site will be compiled into static assets, under the `/dist` folder. The application will run much faster, and cannot be modified during runtime.

The build command should be run in your [Dockerfile](../delivery/docker.md), so that the static assets are compiled into your production Docker image. This compilation takes a lot of CPU, memory and time, so it is important not to do this compilation on startup.

## Who

Front-end developers

## References

- [Webpack docs](https://webpack.js.org/)