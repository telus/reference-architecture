## Testing 

As we move to the world of reference architecture, many questions arise in the realm of testing:

- What is testing in an RA world?
- How does that reflect my squad?

or more specifically:

- **What** needs to be tested?
- **Why** do I need to test {insert type of test}?
- **Who** needs to test {insert type of test}?
- **When** do I need to write/run {insert type of test}?

If you have, then here's the place to find your answers!

---

### Our philosophy on testing

- We care about the quality of our products, hence we care about testing
- Testing is a shared responsibility, not just the testers' or the developers'
- Testing is not just running the happy path, it's both **checking** the product's functionality, and **exploring** the product's potential vulnerabilities

---
### Testing practices

Here we lay out all the testing practices teams should be following in the RA world, whether they are automated, manually performed, [functional][functional-testing] or [non-functional][non-functional-testing]

#### Automated functional tests

These are tests that directly validates the functionality of your software / application.

- [Unit tests][unit-tests]
- [Contract tests][contract-tests]
- [E2E (functional)][e2e-functional]
- [E2E (visual validation)][e2e-ui]

---

#### Automated non-functional tests

These are tests that does not directly validate the functionality of your application. 

However, you should invest in these tests, **because** users’ affection and trust of a software or system is swayed and affected by these non-functional qualities. (Just imagine if Google takes 10 seconds to load your search results, or your Gmail password gets hacked every so often, would you trust their service still?)

- [SEO][seo]
- [Security][security]
- [Performance][performance]
- [Load / Stress][load]
- [Accessibility][accessibility] 
- [Analytics][analytics]

---
#### Non automated tests

- Exploratory testing (WIP)
- Usability testing (WIP)

---

### Standards, processes and culture

- [Defect standards][defect-standards]
- Browser support standards (WIP)
- OS support standards (WIP)

---

### Tools and platforms
- [Devicefarm][devicefarm] 
  - [Using the devicefarm][devicefarming]
  - [Security measures][devicefarm-security]
  - [FAQs][devicefarm-faq]
- [Saucelabs][saucelabs]

[unit-tests]: functional/unit.md
[contract-tests]: functional/consumer-driven-contracts.md
[e2e-functional]: functional/e2e.md
[e2e-ui]:functional/visual-regression.md
[seo]: nonfunctional/seo.md
[security]: nonfunctional/security.md#
[performance]: nonfunctional/performance.md
[load]: nonfunctional/load.md
[acessibility]: nonfunctional/accessibility.md
[analytics]: nonfunctional/analytics.md

[functional-testing]: https://en.wikipedia.org/wiki/Functional_testing
[non-functional-testing]: https://en.wikipedia.org/wiki/Non-functional_testing

[devicefarm]: tools_platforms/devicefarm.md
[devicefarming]: tools_platforms/devicefarming.md
[devicefarm-faq]: tools_platforms/devicefarmfaq.md
[devicefarm-security]: tools_platforms/devicefarm-security.md

[saucelabs]: tools_platforms/saucelabs.md

[defect-standards]: standards/defect.md
