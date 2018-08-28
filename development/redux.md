# Redux

## Why

While [React.js](react.md) gives us stateful components, we need another [isomorphic](isomorphic.md) tool to manage state across our entire single-page-applications. Managing state in a declarative framework like React is critical, and easy to get wrong. How can we minimize side effects, while maximizing testability and reproducibility? How can we visualize the changes we are pushing to our state?

## What

[Redux](http://redux.js.org/) is a tiny (2kb) library used most commonly with React single-page-applications, to manage its state. It has an excellent [browser dev tool](https://github.com/gaearon/redux-devtools) that shows you the actions you make, and the state mutations that are caused by them.

Redux uses a single source of truth, called "the store", which is an immutable object tree. The only way to change the data is by emitting "actions", which describe what you want to do. These actions use "reducers" to perform the mutations to the state. All of these concepts are rooted in functional programming, and therefore highly unit testable.

## How

Our [TELUS isomorphic starter kit](https://github.com/telusdigital/telus-isomorphic-starter-kit) defines our standard UI application, with React and Redux at its heart. The [FAQ](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/ui#faq) has a lot of information about how we use Redux.

## Who

Front-end developers

## References

-   [Redux](http://redux.js.org/)
-   [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux)
-   [Redux Devtools](https://github.com/gaearon/redux-devtools)
