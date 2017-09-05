# Saucelabs

## Why
- Ensure good test coverage with multiple browser/platform combinations
- Using a cloud service instead of in house dev to be more cost effective from a maintainence and scalability point of view  


## What
Saucelabs is a cloud based PaaS vendor that provides us testing environments 

## How
We have a contract of 10 parallel vms to run our automated E2E tests, as well as performing manual test sessions if needed. 

For manual sessions, put down your information on [this doc](https://docs.google.com/spreadsheets/d/1h-DtiKSI29giQ-78AgDcGMRKxhjfvVV6rQ8aDHcoTSg) and request an account via #g-testing on slack.

For automation purposes, either use your personal API key after requesting an account via the manual section above. Or ask in #g-automation as to how to get started (we have a corporate API key to use, note: this is not the most appropriate way to do things though, and secrets are shared on git repo so it will eventually change)

## Who

@qa

## References

* [Saucelabs](https://saucelabs.com)