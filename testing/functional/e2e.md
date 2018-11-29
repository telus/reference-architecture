# End to End testing

## Why

When our application gets deployed through our [Continuous Delivery](../../process/continuous-delivery.md) pipeline, we want to know that an application is working when it is deployed to our pre-production and production environments.

## What

Even though unit tests are passing, there may be issues with the application startup, or the deployment configuration, or in the downstream dependencies, which keeps our application from working. An End to End test is a type of test that runs an automated functional test over the entire scope of our application, which simulates how our clients will be using our application, to ensure that the features remain working, even when integrating with live downstream services and external interfaces.

## How

Our [starter kits](../../development/starter-kits.md) ship out of the box with an End to End testing step as part of their delivery pipeline.

## When

Writing E2E functional tests: Ideally, if [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) done right: after the UAT is defined in story. 

Running E2E functional tests: A lightweight E2E smoke test suite should be run as part of the delivery pipeline, a more robust regression suite should be run on a daily basis (assuming [CI](../../process/continuous-integration.md)) 

## Standards

### Code

#### Structure

- Selectors and methods gathered in page objects. A unique file for each different page in a dedicated page object folder.[1][ref1]
- Test filename is relevant.
- Test file is running a single use case.
- Profile/account information in a son file stored in Vault secrets.

#### Documentation

- How to run the tests.
- Test plan.

#### HTML and CSS

- Selectors: priority to ID and CSS with creation of data-test class attributes. Adopt XPATH only if the 2 first options are not applicable.[2][ref2]
- Lint: use the same package as for the BFF and UI to respect TELUS Digital standards and consistency in the repository.[3][ref3]
- Chose explicit wait over implicit wait, never mix together.[4][ref4]
- Code cleanup: remove everything from the starterkit that is not relevant in the project (hello-page, analytics for authenticated experience like My TELUS, ...).
- Each test case is running in a reasonable timeline (~2-3 minutes max).
- Test case is offering a good description through the pages, steps and methods naming.
- Custom commands and assertions are respecting the NightwatchJS and NodeJS style standards.
- Assertion on UI copy to be used only for rational business cases.

### API

API's shall be end-to-end tested using node-fetch, to query the API endpoints and verify that they are working. Authenticated APIs should be able to log in, in order to test secured endpoints.

### UI

UI's shall be end-to-end tested using [Nightwatch.js](http://nightwatchjs.org/). Nightwatch runs an automated Chrome web browser against our deployed user interface, and tests the application as a user would, by browsing through the pages, clicking links, and filling out forms.

#### Sauce Labs

We can also use Nightwatch to test our application on [Sauce Labs](https://saucelabs.com/) (a cross-browser testing platform), which offers us the ability to test innumerable desktop and mobile browsers in parallel. The isomorphic starter kit ships with the tooling necessary to run its tests against Saucelabs.

Currently we do not have enough threads to run this as part of our pipelines, so it is used for ad-hoc testing. You'll need to authenticate with [shippy](../../delivery/shippy.md) in order to get the credentials necessary to use the `./run-saucelabs.sh` CLI tool.

#### Device lab

TODO

## Who

@delivery @qa

## References

- [Nightwatch.js](http://nightwatchjs.org/)
- [Sauce Labs](https://saucelabs.com/)

[ref1]: http://elementalselenium.com/tips/9-use-a-base-page-object
[ref2]: http://elementalselenium.com/tips/32-xpath-vs-css
[ref3]: https://github.com/telus/reference-architecture/blob/master/development/code-formatting.md
[ref4]: http://elementalselenium.com/tips/47-waiting
