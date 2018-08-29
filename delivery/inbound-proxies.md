  # Inbound Proxies

## Why

We need to expose our applications on www.telus.com!

## What

We have a proprietary nginx-based inbound proxy, which routes ALL requests to TELUS digital assets.

## How

We present www.telus.com and a few subdomains used to route to application environments:

- [www.wcstage.telus.com](https://www.wcstage.telus.com)
- [www.wctest.telus.com](https://www.wctest.telus.com)
- [wcdevelopment.telus.com](https://wcdevelopment.telus.com)
- [wcpreview.telus.com](https://wcpreview.telus.com)

### Develop, test, staging

To have traffic from `http://www.wctest.telus.com/en/bc/foo/bar` proxied to your application, you need to:

1. Fork [inbound.telus-gateway-staging-config](https://github.com/telusdigital/inbound.telus-gateway-staging-config)
2. Create nginx rule(s) that matches the traffic you're wanting to serve, and proxies them to where your application is hosted
3. Create tests confirming that traffic is matched and proxies correctly [example](https://github.com/telusdigital/inbound.telus-gateway-staging-config#writing-tests)
4. Run the tests locally ([README](https://github.com/telusdigital/inbound.telus-gateway-staging-config/blob/master/README.md#set-up-everything-and-run-the-tests))
5. Commit your changes to a branch that contains the Jira Issue Stub, ie BMK-560
6. Submit a [pull request](https://github.com/telusdigital/inbound.telus-gateway-staging-config). If your request needs merging at a specific time, please note that in your pull request.
7. Your pull request will notify the delivery team in #g-delivery. If you didn't write any tests, your pull request won't get merged.
8. Once the pull request is merged, the changes will be deployed automatically.

### Production

To have traffic from `http://www.telus.com/en/bc/foo/bar` proxied to your application, you need to:

1. Fork [inbound.telus-gateway-production-config](https://github.com/telusdigital/inbound.telus-gateway-production-config)
2. Create nginx rule(s) that matches the traffic you're wanting to serve, and proxies them to where your application is hosted
3. Create tests confirming that traffic is matched and proxies correctly [example](https://github.com/telusdigital/inbound.telus-gateway-production-config#writing-tests)
4. Run the tests locally ([README](https://github.com/telusdigital/inbound.telus-gateway-production-config/blob/master/README.md#set-up-everything-and-run-the-tests))
5. Commit your changes to a branch that contains the Jira Issue Stub, ie BMK-560
6. Submit a [pull request](https://github.com/telusdigital/inbound.telus-gateway-production-config). If your request needs merging at a specific time, please note that in your pull request.
7. Your pull request will notify the delivery team in #g-delivery. If you didn't write any tests, your pull request won't get merged.
8. Once the pull request is merged, the changes will be deployed automatically.

## Who

@delivery

## References

- [Preproduction](https://github.com/telusdigital/inbound.telus-gateway-staging-config)
- [Production](https://github.com/telusdigital/inbound.telus-gateway-production-config)
