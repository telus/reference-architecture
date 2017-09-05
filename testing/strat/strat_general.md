## Testing in an RA world

Have you asked the question: 
`What does RA mean to me as a tester/developer?`

Or: 
- What needs to be tested?
- Who needs to test {insert type of test}?
- Why do I need to test {insert type of test}?
- When do I need to test/write the test {insert type of test}?

If you have, then here's the place to find your answers!

Let's break it down in details as follows

---

### Functional tests
These are tests that directly validates the functionality of your software / application, here we are speaking purely from an __automation__ perspective.


| What | Why | Who | When (to write) | When (to run) |
| ---- | --- | --- | --------------- | ------------- |
| Unit tests |[Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/unit.md#why)| Developers | Ideally, before you write the actual code, as we want to follow the [TDD](https://en.wikipedia.org/wiki/Test-driven_development) practice| before each code commit |
| Contract tests | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/consumer_driven_contracts.md#illustrating-the-problem) | Developers | During feature/story development | As part of the delivery pipeline |
| E2E (functional) | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/e2e.md#why) | Testers | Ideally, if [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) done right: after the UAT is defined in story. (Realistically: after application is built) | A lightweight E2E smoke test suite should be run as part of the delivery pipeline, a more robust regression suite should be run on a daily basis (assuming [CI](https://github.com/telusdigital/reference-architecture/blob/master/process/continuous-integration.md)) |
| E2E (UI) | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/visual-regression.md#why) | Testers | Currently, only need to define the delta as part of starter-kit, after story complete  | As part of the delivery pipeline |

---

### Non functional tests
These are tests that does not directly validate the functionality of your application. However, you should invest in these tests, __because__ users’ affection and trust of a software or system is swayed and affected by thesenon-functional qualities such as performance, security, accessibility, etc.

| What | Why | Who | Standards set by | When (to run) |
| ---- | --- | --- | ---------------- | ------------- |
| SEO | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/seo.md#why) | Developers | SEO team, chair: Maria Toribio | As part of the delivery pipeline |
| Security | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/security.md#why) | Developers | Security team, chair: Jayson Henkel | As part of the delivery pipeline |
| Performance | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/performance.md#why) | Developers | Tech leads | Pre-release |
| Load / Stress | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/load.md#why) | Developers | Tech leads | As part of the delivery pipeline |
| Accessibility | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/accessibility.md#why) | Testers | Accessiblity team, chair: Oskar Westin | As part of the delivery pipeline |
| Analytics | [Why](https://github.com/telusdigital/reference-architecture/blob/master/testing/analytics.md#why) | Testers | Analytics team, chair: Ajay Ajaal | As part of the delivery pipeline |