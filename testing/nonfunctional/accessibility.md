# Accessibility testing

## Why

Accessibility is about ensuring as many customers as possible can effectively use a product or service. This manner of thinking automatically lends itself to better strategy, design and overall key message.

The [Accessibility for Ontarians with Disabilities Act](http://www.aoda.ca/) (AODA) and [Canadian Radio-Television and Telecommunications Commission](http://www.crtc.gc.ca/eng/home-accueil.htm) (CRTC) mandates accessibility compliance. TELUS is committed to meeting or exceeding the [Website Content Accessibiliity Guidelines (WCAG 2.0 AA)](https://www.w3.org/WAI/WCAG20/quickref/).

When our applications successfully pass through our [Continuous Delivery](/process/continuous-delivery.md) pipeline, we want to know that they are accessible.

## What

Automated accessibility testing is performed as part of our [Continuous Delivery](/process/continuous-delivery.md) pipeline. This is complemented with effective manual testing in order to provide reliable results. Automated testing tools will identify programmatic issues, but manual testing is needed to validate usability and content consistency.

## How

Our [isomorphic starter kit](/development/starter-kits.md) ships out of the box with an end-to-end [aXe](https://axe-core.org/) testing step as part of its delivery pipeline. We use the [aXe extension for Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) and the [Wave Toolbar](http://wave.webaim.org/extension/) to validate our accessiblity while running [end to end](e2e.md) tests.

We also use text-to-speech engines (screen readers) like [NVDA](https://www.nvaccess.org/) and [Voiceover](https://www.apple.com/ca/accessibility/iphone/vision/) to manually review functionality and usability. Manual keyboard testing and quick screen reader review are done to validate automated testing and general usability.

## When

Writing analytics tests: Upon story completion, make sure to include the assertion

Running analytics tests: As part of the delivery pipeline

## Who

@delivery
@qa

## References

- [Nightwatch.js](http://nightwatchjs.org/)
- [Nightwatch-Accessibility](https://github.com/ahmadnassri/nightwatch-accessibility)
- [NVDA](https://www.nvaccess.org/)
