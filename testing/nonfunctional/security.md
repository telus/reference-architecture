# Security testing

## Why

When our application gets deployed through our [Continuous Delivery](../process/continuous-delivery.md) pipeline, we want to know that our code is secure, and does not have vulnerable packages installed, so that we don't get owned.

## What

Build continuous security into our delivery pipeline, so that we monitor our applications for defects and known vulnerabilities, constantly!

## How

## When

## Standards

Security team to instill and maintain

### Node Security Platform

Our [starter kits](../development/starter-kits.md) ship out of the box with [nsp](https://nodesecurity.io/) to scan the `package.json` for any known vulnerabilities. Our pipeline will fail if any are found.

### TwistLock

TODO

### Clair

TODO

## Who

@delivery @security

## References

- [Node security platform](https://nodesecurity.io/)
- [Twistlock](https://www.twistlock.com)
- [Clair](https://coreos.com/clair/docs/latest/)