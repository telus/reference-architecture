<img src="https://i.imgur.com/hpDNFJy.png" width=320 height=240>

## Testing (in an RA world)

Have you asked the following questions: 

- __What__ needs to be tested?
- __Who__ needs to test {insert type of test}?
- __Why__ do I need to test {insert type of test}?
- __When__ do I need to test/write the test {insert type of test}?

If you have, then here's the place to find your answers!

---

### Automated functional tests
These are tests that directly validates the functionality of your software / application.


| What | Why | Who | When (to write) | When (to run) |
| ---- | --- | --- | --------------- | ------------- |
| [Unit tests](functional/unit.md) |[Why](functional/unit.md#why)| Developers | Ideally, before you write the actual code, as we want to follow the [TDD](https://en.wikipedia.org/wiki/Test-driven_development) practice| As part of the delivery pipeline, through [Jest](https://facebook.github.io/jest/). Ref: [starter-kit: docker#unit test](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/6226eeb9998247eed430ddf686028a992f115dfc/DOCKER.md#unit-testing) |
| [Contract tests](functional/consumer_driven_contracts.md) | [Why](functional/consumer_driven_contracts.md#illustrating-the-problem) | Developers | During feature/story development | As part of the delivery pipeline |
| [E2E (functional)](functional/e2e.md) | [Why](functional/e2e.md#why) | Testers | Ideally, if [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) done right: after the UAT is defined in story. (Realistically: after application is built) | A lightweight E2E smoke test suite should be run as part of the delivery pipeline, a more robust regression suite should be run on a daily basis (assuming [CI](../process/continuous-integration.md)) |
| [E2E (UI)](functional/visual-regression.md) | [Why](functional/visual-regression.md#why) | Testers | Currently, only need to define the delta as part of starter-kit, after story complete  | As part of the delivery pipeline, through [starter-kit: visual regression](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/6226eeb9998247eed430ddf686028a992f115dfc/e2e/test/assertions/compareScreenshot.js) |

---

### Automated non-functional tests
These are tests that does not directly validate the functionality of your application. 

However, you should invest in these tests, __because__ users’ affection and trust of a software or system is swayed and affected by these non-functional qualities. (Just imagine if Google takes 10 seconds to load your search results, or your Gmail password gets hacked every so often, would you trust their service still?)

| What | Why | Who | Standards | When (to run) |
| ---- | --- | --- | ---------------- | ------------- |
| [SEO](nonfunctional/seo.md) | [Why](nonfunctional/seo.md#why) | Developers | [SEO standards](standards/seo.md) | As part of the delivery pipeline, through [starter-kit: SEO assertion](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/e2e/nightwatch.conf.js#L15) |
| [Security](nonfunctional/security.md) | [Why](nonfunctional/security.md#why) | Developers | [Security standards](standards/security.md) | As part of the delivery pipeline through [nsp](https://www.npmjs.com/package/nsp) |
| [Performance](nonfunctional/performance.md) | [Why](nonfunctional/performance.md#why) | Developers | [Performance standards](standards/performance.md) | As part of the delivery pipeline, through through [starter-kit: performance-test](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/performance-test) |
| [Load / Stress](nonfunctional/load.md) | [Why](nonfunctional/load.md#why) | Developers | [Load standards](standards/load.md) | As part of the delivery pipeline, through [starter-kit: load-test](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/load-test) |
| [Accessibility](nonfunctional/accessibility.md) | [Why](nonfunctional/accessibility.md#why) | Testers | [Accessibility standards](standards/accessibility.md) | As part of the delivery pipeline, through [starter-kit: e2e-accessibility](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/e2e/nightwatch.conf.js#L14)  |
| [Analytics](nonfunctional/analytics.md) | [Why](nonfunctional/analytics.md#why) | Testers | [Analytics standards](standards/analytics.md) | As part of the delivery pipeline, through [starter-kit: e2e-analytics](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/e2e/test/assertions/dataLayer.js)  |

---
### Non automated tests

| What | Why | Who | When (to run) | Notes |
| ---- | --- | --- | ------------- | ----- | 
| Exploratory testing | TODO | Testers | When the feature is being built and ready for desk check | We did a [Exploratory testing lunch and learn session](https://docs.google.com/a/telus.com/presentation/d/1_i45rCsNOMyJSyHr-niBbPZgyauYYbXBW5WXr9TUTYw/edit?usp=drive_web) in 05/2017|

---

---

### Practices, standards and culture
- [Strat: Tech details](strat/strat_tech_detail.md)
- [Strat: Practice and culture](strat/strat_practice_culture.md)
- [Browser support standards](standards/browser.md)
- [OS support standards](standards/os.md)
- [Mobile device data](standards/mobiledevice.md)
- [Screensize data](standads/screensize.md)
- [Defect streamlining via JIRA](standards/defect.md)

---

### Tools and platforms
- [Devicefarm](tools_platforms/devicefarm.md) and its [FAQ](tools_platforms/devicefarmfaq.md)
- [Saucelabs](tools_platforms/saucelabs.md)