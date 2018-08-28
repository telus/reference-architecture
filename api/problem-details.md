# Problem Details

## Why

It is particularly important that errors comply with relevant HTTP standards for operational and development analytics.

However, occasionally it might seem like a good idea to enhance standard HTTP error responses with additional, application-specific, information relating to the error. This should be done in a consistent, standards-compliant way across applications.

The error is specific to your application. The format by which that error is reported should not be.

## What

As an API implementor, use [RFC7807][rfc7807] to structure your decoration of the standard error response. Ideally, do this by using the same module as everyone else (TBD, however [see this example][node-error]).

## How

As an API implementor, use a module like [node-error][node-error] to decorate your (otherwise completely standard) HTTP error responses.

## References

-   [RFC7807: Problem Details for HTTP APIs][rfc7807]
-   [node-error: Ahmad's implementation of RFC7807](node-error)

[rfc7807]: https://tools.ietf.org/html/rfc7807
[node-error]: https://github.com/ahmadnassri/node-error
