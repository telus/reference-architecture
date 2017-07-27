# Accessibility testing

## Why

AODA, or the [Accessibility for Ontarians with Disabilities Act](http://www.aoda.ca/) mandates accessibility compliance. The standard we comply to is [WCAG 2.0 AA](https://www.w3.org/WAI/WCAG20/quickref/).

When our application gets deployed through our [Continuous Delivery](../delivery/continuous-delivery.md) pipeline, we want to know that it is accessible.

## What

We use [aXe](https://www.deque.com/products/axe/) to validate our accessiblity meets WCAG 2.0 AA, while running [end to end](e2e.md) tests.

We also use the [NVDA](https://www.nvaccess.org/) screen reader to test functionality for the visually-impaired.

## How

Our [isomorphic starter kit](../development/starter-kits.md) ships out of the box with an End to End aXe testing step as part of its delivery pipeline.

NVDA (screen reader) testing can't be automated, so we need to run periodic manual tests of our applications with it.

## Who

@delivery @qa

## References

- [Nightwatch.js](http://nightwatchjs.org/)
- [Nightwatch-Accessibility](https://github.com/ahmadnassri/nightwatch-accessibility)
- [NVDA](https://www.nvaccess.org/)