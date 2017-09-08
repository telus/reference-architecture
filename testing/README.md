## Testing 

As we move to the world of reference architecture, many questions arise in the realm of testing:

- What is testing in an RA world?
- How does that reflect my squad?

or more specifically:

- __What__ needs to be tested?
- __Why__ do I need to test {insert type of test}?
- __Who__ needs to test {insert type of test}?
- __When__ do I need to write/run {insert type of test}?

If you have, then here's the place to find your answers!

---

### Our philosophy on testing

- We care about the quality of our products, hence we care about testing
- Testing is a shared responsibility, not just the testers' or the developers'
- Testing is not just running the happy path, it's both __checking__ the product's functionality, and __exploring__ the product's potential vulnerabilities

---
### Testing practices

Here we lay out all the testing practices teams should be following in the RA world, whether they are automated, manually performed, [functional][Functional testing] or [non-functional][Non-functional testing]

#### *Automated functional tests*
These are tests that directly validates the functionality of your software / application.


| What | Why | Who | When |
| ---- | --- | --- | ---- |
| [Unit tests][Unit tests] |[Why][Unit tests:why]| Developers | [When][Unit tests:when] |
| [Contract tests][Contract tests] | [Why][Contract tests:why] | Developers | [When][Contract tests:when] |
| [E2E (functional)][E2E functional] | [Why][E2E functional:why] | Testers | [When][E2E functional:when]|
| [E2E (visual validation)][E2E ui]] | [Why][E2E ui:why] | Testers | [When][E2E ui:when] |

---

#### *Automated non-functional tests*
These are tests that does not directly validate the functionality of your application. 

However, you should invest in these tests, __because__ users’ affection and trust of a software or system is swayed and affected by these non-functional qualities. (Just imagine if Google takes 10 seconds to load your search results, or your Gmail password gets hacked every so often, would you trust their service still?)

| What | Why | Who | Standards | When |
| ---- | --- | --- | ---------------- | ------------- |
| [SEO][SEO] | [Why][SEO:why] | Developers | [SEO standards][SEO:standards] | [When][SEO:when] |
| [Security][Security] | [Why][Security:why] | Developers | [Security standards][Security:standards] |[When][Security:when] |
| [Performance][Performance] | [Why][Performance:why] | Developers | [Performance standards][Performance:standards] |[When][Performance:when]|
| [Load / Stress][Load] | [Why][Load:why] | Developers | [Load standards][Load:standards] | [When][Load:when] |
| [Accessibility][Accessibility] | [Why][Accessibility:why] | Testers | [Accessibility standards][Accessibility:standards] | [When][Accessibility:when] |
| [Analytics][Analytics] | [Why][Analytics:why] | Testers | [Analytics standards][Analytics:standards] | [When][Analytics:when] |

---
#### *Non automated tests*

| What | Why | Who | When |
| ---- | --- | --- | ---- |
| Exploratory testing | TODO | Testers | When the feature is being built and ready for desk check |
| Usability | TODO | Designers | ?? | .. | 

---

### Standards, processes and culture

- [Browser support standards](standards/browser.md)
- [OS support standards](standards/os.md)
- [Mobile device data](standards/mobiledevice.md)
- [Screensize data](standads/screensize.md)
- [Defect streamlining via JIRA](standards/defect.md)

---

### Tools and platforms
- [Devicefarm](tools_platforms/devicefarm.md) and its [FAQ](tools_platforms/devicefarmfaq.md)
- [Saucelabs](tools_platforms/saucelabs.md)


[Unit tests]: functional/unit.md
[Unit tests:why]: functional/unit.md#why
[Unit tests:when]: functional/unit.md#when

[Contract tests]: functional/consumer_driven_contracts.md
[Contract tests:why]: functional/consumer_driven_contracts.md#illustrating-the-problem
[Contract tests:when]: functional/consumer_driven_contracts.md#When

[E2E functional]: functional/e2e.md
[E2E functional:why]: functional/e2e.md#why
[E2E functional:when]: functional/e2e.md#when

[E2E ui]:functional/visual-regression.md
[E2E ui:why]:functional/visual-regression.md#why
[E2E ui:when]:functional/visual-regression.md#when

[SEO]: nonfunctional/seo.md
[SEO:why]: nonfunctional/seo.md#why
[SEO:standards]: nonfunctional/seo.md#standards
[SEO:when]: nonfunctional/seo.md#when

[Security]: nonfunctional/security.md#
[Security:why]: nonfunctional/security.md#why
[Security:standards]: nonfunctional/security.md#standards
[Security:when]: nonfunctional/security.md#when

[Performance]: nonfunctional/performance.md
[Performance:why]: nonfunctional/performance.md#why
[Performance:standards]: nonfunctional/performance.md#standards
[Performance:when]: nonfunctional/performance.md#when

[Load]: nonfunctional/load.md
[Load:why]: nonfunctional/load.md#why
[Load:standards]: nonfunctional/load.md#standards
[Load:when]: nonfunctional/load.md#when

[Accessibility]: nonfunctional/accessibility.md
[Accessibility:why]: nonfunctional/accessibility.md#why
[Accessibility:standards]: nonfunctional/accessibility.md#standards
[Accessibility:when]: nonfunctional/accessibility.md#when

[Analytics]: nonfunctional/analytics.md
[Analytics:why]: nonfunctional/analytics.md#why
[Analytics:standards]: nonfunctional/analytics.md#standards
[Analytics:when]: nonfunctional/analytics.md#when


[Explore it deck]:https://docs.google.com/a/telus.com/presentation/d/1_i45rCsNOMyJSyHr-niBbPZgyauYYbXBW5WXr9TUTYw/edit?usp=drive_web
[Jest]: https://facebook.github.io/jest/
[Functional testing]: https://en.wikipedia.org/wiki/Functional_testing
[Non-functional testing]: https://en.wikipedia.org/wiki/Non-functional_testing
