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
- [Unit tests][Unit tests]
- [Contract tests][Contract tests]
- [E2E (functional)][E2E functional]
- [E2E (visual validation)][E2E ui]

---

#### *Automated non-functional tests*
These are tests that does not directly validate the functionality of your application. 

However, you should invest in these tests, __because__ users’ affection and trust of a software or system is swayed and affected by these non-functional qualities. (Just imagine if Google takes 10 seconds to load your search results, or your Gmail password gets hacked every so often, would you trust their service still?)

- [SEO][SEO]
- [Security][Security]
- [Performance][Performance]
- [Load / Stress][Load]
- [Accessibility][Accessibility] 
- [Analytics][Analytics]

---
#### *Non automated tests*

- Exploratory testing (WIP)
- Usability testing (WIP)

---

### Standards, processes and culture

- [Defect standards][Defect standards]
- Browser support standards (WIP)
- OS support standards (WIP)


---

### Tools and platforms
- [Devicefarm][Devicefarm] 
  - [Using the devicefarm][Devicefarming]
  - [Security measures][Devicefarm_security]
  - [FAQs][Devicefarm_FAQ]
- [Saucelabs][Saucelabs]


[Unit tests]: functional/unit.md
[Contract tests]: functional/consumer_driven_contracts.md
[E2E functional]: functional/e2e.md
[E2E ui]:functional/visual-regression.md
[SEO]: nonfunctional/seo.md
[Security]: nonfunctional/security.md#
[Performance]: nonfunctional/performance.md
[Load]: nonfunctional/load.md
[Accessibility]: nonfunctional/accessibility.md
[Analytics]: nonfunctional/analytics.md

[Explore it deck]:https://docs.google.com/a/telus.com/presentation/d/1_i45rCsNOMyJSyHr-niBbPZgyauYYbXBW5WXr9TUTYw/edit?usp=drive_web
[Jest]: https://facebook.github.io/jest/
[Functional testing]: https://en.wikipedia.org/wiki/Functional_testing
[Non-functional testing]: https://en.wikipedia.org/wiki/Non-functional_testing

[Devicefarm]: tools_platforms/devicefarm.md
[Devicefarming]: tools_platforms/devicefarming.md
[Devicefarm_FAQ]: tools_platforms/devicefarmfaq.md
[Devicefarm_security]: tools_platforms/devicefarm_security.md

[Saucelabs]: tools_platforms/saucelabs.md

[Defect standards]: standards/defect.md