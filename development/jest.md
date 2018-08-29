# Jest

## Why

As part of our move to [continuous integration](../process/continuous-integration.md), we need a unit testing framework, in order to support our emerging Test-Driven-Development practice. By writing unit tests, we increase the confidence in our code and our build pipeline, and limit the number of issues when we make a code change.

## What

[Jest](https://facebook.github.io/jest/) is Facebook's JavaScript unit testing framework. It is easy to use, with a "zero configuration" experience. It uses parallelization to increase the speed of your tests, and sandboxes them to minimize side-effects. It also contains common features that we like to see out of our unit testing frameworks: coverage reporting, mocks, etc. Finally, it integrates deeply with our [React.js](react.md) UI code.

## How

Jest is used in all of our [starter kits](starter-kits.md) and reference architecture applications. We have very little configuration in the `package.json`, and only use it to enable the coverage report and to blacklist the `node_modules` folder, to increase test speed.

## Who

Developers, developers, developers, developers.

## References

- [Jest](https://facebook.github.io/jest/)
