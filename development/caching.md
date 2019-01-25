# Caching

## Why

Occasionally we need to cache data, either for a limited amount of time, or for the duration of a user's session.
We have to be mindful of browser-level caching _(including scenarios after the user logs out)_

## What

### On The Server

Our OpenShift cluster is peered with our "Data VPC", AKA "Virtual Private Cloud". We have Terraform playbooks that manage the use of [Amazon Elasticache](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/WhatIs.html) to create performant, in-memory distributed caching environments, using the [Redis protocol](https://redis.io/commands).

### In the Browser

The browser needs to know caching rules to apply, The [`Cache-Control`][cache-control-spec] header field is used to specify directives for caching mechanisms to be applied by the browser.

## How

### Client-side

#### HTTP Request

If an incoming request contains a `Cache-Control` directive, parse and process accordingly.

#### HTTP Response

Ensure appropriate `Cache-Control` directives are set on outgoing responses that represent the data & user state.

> ###### Example
>
> on Logout / Terminate Session
> 
> ```js
> response.set('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store')
> ```

### Server-side

If you need a new Elasticache instance, accessible to either sandbox or main clusters, submit a pull request to our Data VPC Terraform repositories, respectively:

- [Data VPC MAIN][terraform-openshift-datavpc-main]
- [Data VPC SANDBOX][terraform-openshift-datavpc-sandbox]

To gain access to Amazon IAM, you can submit a pull request to the Data VPC IAM Terraform repository:

- [Data VPC IAM][terraform-openshift-datavpc-iam]

### Best practices

- Treat this like a cache, not a database. Assume all data is ephemeral and can be wiped at any moment.
- Encrypt any sensitive data using `AES-256`
- Set an expiry time to live (`TTL`), to ensure data is purged often

## References

### Specs

- [RFC 7234: `Cache-Control`][cache-control-spec]
- [MDN Cache Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
- [Redis protocol](https://redis.io/commands)

### Articles

- [HTTP Caching (article)](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)

### Resources

- [Elasticache Docs](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/WhatIs.html)
- [Terraform Elasticache Module](https://github.com/telus/terraform-aws_elasticache_cluster)
- [Data VPC MAIN][terraform-openshift-datavpc-main]
- [Data VPC SANDBOX][terraform-openshift-datavpc-sandbox]
- [Data VPC IAM][terraform-openshift-datavpc-iam]

[cache-control-spec]: http://httpwg.org/specs/rfc7234.html#header.cache-control
[terraform-openshift-datavpc-main]: https://github.com/telus/terraform-openshift-datavpc-main
[terraform-openshift-datavpc-sandbox]: https://github.com/telus/terraform-openshift-datavpc-sandbox
[terraform-openshift-datavpc-iam]: https://github.com/telus/terraform-openshift-datavpc-iam
