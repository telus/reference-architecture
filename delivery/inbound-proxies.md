# Inbound Proxies

## Why

We need to expose our applications on www.telus.com!

## What

We have a proprietary nginx-based inbound proxy, which routes ALL requests to TELUS digital assets.

## How

We present www.telus.com and a few subdomains used to route to application environments:

- wcdevelopment.telus.com
- www.wctest.telus.com
- www.wcstage.telus.com
- www.wcpreview.telus.com

### Develop, test, staging

To have traffic from http://www.wctest.telus.com/en/bc/foo/bar proxied to your application, you need to:

1. fork https://github.com/telusdigital/inbound.telus-gateway-staging-config
1. create nginx rule(s) that matches the traffic you're wanting to serve, and proxies them to where your application is hosted
1. create tests confirming that traffic is matched and proxies correctly [example](https://github.com/telusdigital/inbound.telus-gateway-staging-config/blob/master/tests/spec/b4yb_spec.rb#L3-L6)
1. Run the tests locally ([README](https://github.com/telusdigital/inbound.telus-gateway-staging-config/blob/master/README.md#testing))
1. Commit your changes to a branch that contains the Jira Issue Stub, ie BMK-560
1. Submit a [pull request](https://github.com/telusdigital/inbound.telus-gateway-staging-config). If your request needs merging at a specific time, please note that in your pull request.
1. Request for this change to be merged in #g-delivery. If you've added a route, but have no tests, it won't be merged.

### Production

To have traffic from http://www.telus.com/en/bc/foo/bar proxied to your application, you need to:

1. fork https://github.com/telusdigital/inbound.telus-gateway-production-config
1. create nginx rule(s) that matches the traffic you're wanting to serve, and proxies them to where your application is hosted
1. create tests confirming that traffic is matched and proxies correctly [example](https://github.com/telusdigital/inbound.telus-gateway-production-config/blob/master/tests/spec/b4yb_spec.rb#L36-L39)
1. Run the tests locally ([README](https://github.com/telusdigital/inbound.telus-gateway-production-config/blob/master/README.md#testing))
1. Commit your changes to a branch that contains the Jira Issue Stub, ie BMK-560
1. Submit a [pull request](https://github.com/telusdigital/inbound.telus-gateway-production-config). If your request needs merging at a specific time, please note that in your pull request.
1. Request for this change to be merged in #g-delivery.

## Who

@delivery

## References

- [Preproduction](https://github.com/telusdigital/inbound.telus-gateway-staging-config)
- [Production](https://github.com/telusdigital/inbound.telus-gateway-production-config)
