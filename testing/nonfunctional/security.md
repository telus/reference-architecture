# Security testing

## Why

When our application gets deployed through our [Continuous Delivery](../process/continuous-delivery.md) pipeline, we want to know that our code is secure, and does not have vulnerable packages installed, so that we don't get owned.

## What

Build continuous security into our delivery pipeline, so that we monitor our applications for defects and known vulnerabilities, constantly!

## How

### NPM Audit

Our [starter kits](../development/starter-kits.md) ship out of the box with security audits, done using [npm audit](https://docs.npmjs.com/cli/audit). Running `npm audit` assesses package dependencies for security vulnerabilities and allows us to find and fix known vulnerabilities in dependencies that could cause data loss, service outages, unauthorized access to sensitive information, or other issues. 

Failing the audit will cause the pipeline to fail, so you should address the issues before pushing any code. To automatically install any compatible (not semver-major) updates to vulnerable dependencies, run `npm audit fix`. For more information, please refer to the NPM documentation.

## Who

@everyone

## References

- [NPM - `npm audit` docs](https://docs.npmjs.com/cli/audit)
- [NPM - About security audits](https://docs.npmjs.com/getting-started/running-a-security-audit)
