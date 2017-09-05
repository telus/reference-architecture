## TELUS Digital testing strategy : Tech

#### Abstract goals: 
1. Automation automation automation
2. Define and establish proper functional testing scope and invest in low level testing (Unit -> Integration -> E2E)
3. Expand mobile test coverage
4. Define and establish proper non functional testing (Security, Performance, A11y, Load/Stress)
5. Utilize tools and services via best practices to ensure high efficiency and ROI

#### Why?
1. __Automation__ : because automation is more efficient, extensive, and cost effective than manual testing
* __Invest in low level testing__: because having [proper testing scope](https://martinfowler.com/bliki/TestPyramid.html) means we save time and $$
* __Increase mobile testing/automation__: because our user data shows [high traffic](https://telus.domo.com/page/1401343950/kpis/details/1984288719) in mobile usage (> 60% filtering out Samsung default home page), yet we have no automation on Mobile at all
* __Invest in non functional testing__: Because users’ affection and trust of a software or system is swayed and affected by non-functional qualities, such as performance, security, accessibility, etc.
* Because we are paying $$$, and we are not getting bang for the buck

#### Breakdowns (Tests by type)
| Description | Owner | Target | Current | Path |
| -- | -- | -- | -- | -- | 
| Unit test | Devs | 100% Unit testing coverage | For RA apps, starter-kit enforces, Sonarqube monitoring. For non RA apps, There's barely any | <br>[RA: testing/Unit testing](https://github.com/telusdigital/reference-architecture/blob/master/testing/unit.md)</br> <br>non-RA: move to RA</br>|
| Integration / Contract test | Devs | 2-sided contract testing, see [RA: testing/consumer_driven_contracts](https://github.com/telusdigital/reference-architecture/blob/master/testing/consumer_driven_contracts.md) | Few teams have some integration/contract (e.g: Mobility/Home API squads) in place; My Acc relies on E2E and some manual (SOAPUI), especially the classic apps. In most cases, it's a reactive system, i.e: BT breaks -> our app breaks -> TDIM, and BT breaks a lot (see Mobility API squad) | 1: Through API platform 2: Defining the integration end points and start writing tests against them!|
| E2E test(functional) | Testers | 1: Comprehensive but not [excessive](https://jenkins-uet.telus.digital) E2E testing coverage; 2: Move to Nightwatch and sunset Ruby stack; 3: Use best practices (e.g: page objects) | Some teams still don't have automated E2E; Tons of tests living in a massive jenkins "pipeline" + still on Ruby stack| 1: Nightwatch/JS training + onboarding <br>2: [RA: testing/e2e](https://github.com/telusdigital/reference-architecture/blob/master/testing/e2e.md) </br>|
| E2E test(UI validation) | Testers | Utilize automation in E2E UI testing (because Selenium/whatever framework only handles functional E2E testing) | Only TW squads (Business) + TDS doing some SS baseline comparison | Utilize [RA: Visual Regression Testing](https://github.com/telusdigital/reference-architecture/blob/master/testing/visual-regression.md)|
|SEO | Devs | Auto validate SEO criterias with guideline set by the SEO team and enforced by Starter kit|Mostly manual validation by Dev/QA sparsely|[Starter-kit: SEO](https://github.com/telusdigital/reference-architecture/blob/master/testing/seo.md)|
| Security test | Devs | Security team to define | RA: Currently we have dependency/npm scanning through the pipeline, but security testing is more than that <br> Non RA: no security testing, security team sometimes audits apps </br> | Leverage security guild to start with? |
| Performance test | Devs/Testers | ??? | Mostly missing, some teams have New Relic monitoring but it's sparse manual validation | Reporting: use New Relic?, [Starter-kit: Performance](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/performance-test)|
| Load / Stress | Devs | See [RA: testing/load](https://github.com/telusdigital/reference-architecture/blob/master/testing/load.md)  | A few squads started using Gatling (eg: Scorpion) | Artillery - [Starter-kit: Load-test](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/load-test) |
| Accessibility | Testers | Accessibility team to define | RA: Manual <br> Non RA: Some embedded tools in automation for Ruby stack, although the results are not validated </br> | [Starter-kit: Accessibility](https://github.com/telusdigital/reference-architecture/blob/master/testing/accessibility.md)|
| Analytics| Testers | Analytics team to define | none | [RA - testing/Analytics](https://github.com/telusdigital/reference-architecture/blob/master/testing/analytics.md) |
| Usability | Designers | Design excellence to define | There's some usability testing session and readouts | ? |

#### Breakdowns (Others)
| Description | Target | Current | Path |
| -- | -- | -- | -- |
| Mobile testing | Automated and part of the delivery pipeline. All E2E tests can execute cross platform | Little to none automation (see platform coverage), manual testing on emulators and some real device testing | [DeviceFarm](./devicefarm) enabling real device mobile testing, cloud services as scaling strategy |
| Saucelabs | Follow [SauceLabs](./saucelabs) best practices, e.g: <br>1 - Scheduling efficiency (so we get the bang for the buck)</br> <br>2 - Sauce integration (Sauce connect) with CI/Jenkins to allow easy navigation</br> <br>3: Don't put API key on github?</br> | UET Jenkins - a giant and messy Jenkins instance that hosts hundreds of jobs (jobs don't follow best practices) | Document the best practices (in [SauceLabs](./saucelabs) and communicate with teams |
| CI/Jenkins | Follow the shippy way of using Jenkins/CI |Current: [massive](jenkins-uet.telus.digital) Jenkins instance with hundreds of job, scheduling is messy (linked with Saucelabs), some jobs with no owners, don't have SLA or escalation if jobs fail and not fixed within reasonable time, no one outside QA cares|1: For RA apps, encourage teams manage their own Jenkins instance/pipeline 2: For prime/old stack, keep the lights on for E2E tests and define sunset timeline for each squad (e.g: My Acc states 1 year)|
| BDD | ? | We have Cucumber layer on top of test scripts for Ruby stack, which some squads have adapted fully, by switching to Nightwatch, we need to decide whether to enforce this layer or let teams decide | Make team decision|