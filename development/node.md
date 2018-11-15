# Node

## Why

- Developers want to be able to work on any code, from front-end to back-end, in the same language, with the same paradigms
- Developers want a performant language that is good at asynchronous coding
- Developers want a suite of available libraries, plugins and addons
- Developers want a good support community

## What

Node.js is JavaScript, which was traditionally only used in the browser, but now tailored for running on the server. It uses the Google V8 JavaScript engine, which is a single threaded, non-blocking, event-driven bus. It is extremely performant with Asynchronous tasks that are highly common in modern web applications/APIs. All I/O intensive operations in Node are performed asynchronously through callbacks. For example, it does not consume a thread to wait for an external API to respond.

Node also gives us the benefit of using the same language on the front end as well as the backend. In fact, we can even make [Isomorphic / Universal](isomorphic.md) web UI applications, that share most of the same code, regardless of if it is running in Node on the server side, or JavaScript in the browser.

The open-source community around Node also has a thriving suite of modules and libraries that can be managed through the `npm` or `yarn` package managers.

## How

Our Node.js code must conform with our [generic code formatting standards](code-formatting.md), and use [ESLint](eslint.md) for further JavaScript-specific styling. We have [starter kits](starter-kits.md) with cloneable examples of API and UI applications that have our standards baked in. We also have several private [npm libraries](npm.md).

Currently, our standard is to use Node 8, and we will always strive to use the most recent Node [LTS](https://github.com/nodejs/LTS#lts-schedule1) (aka "long term support") version. We are about to trial Node 10.

Check out the [Node compatability table](http://node.green/) to see which features are supported by the current version.

## Who

Developers, developers, developers, developers.

## References

- [Node.js LTS charts](https://github.com/nodejs/LTS#lts-schedule1)
- [Node compatability table](http://node.green/)
