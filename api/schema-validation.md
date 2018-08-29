# Schema validation

## Why

When an API calls another service as a dependency, both the client and API are expected to adhere to a contract. This implies certain characteristics of the values of the request and response fields:
- Fields are required or optional
- Fields are a certain type/format
- Fields are a certain value
- Fields are grouped as part of collections
- Fields are nested in hierarchical arrangements

If the request or response do not match the contract it can lead to broken behavior in the API or in the client. We would like errors to be thrown as early as possible in the request/response exchange. When deviations from the contract are identified early we can:
- More easily identify the source of the issue
- Avoid executing API logic with bad data
- Avoid executing client logic with bad data
- Encapsulate validation of the request and response

## What

As an API implementor, use [OpenAPI](https://www.openapis.org/) (née [Swagger](https://swagger.io/)) to define API interfaces. This enables access to a rich ecosystem of tools around the OpenAPI standard, e.g. [swagger-tools](https://github.com/apigee-127/swagger-tools/), [swagger-node](https://github.com/swagger-api/swagger-node). These tools provides support for:
- validating incoming requests
- providing defaults for missing parameters
- reducing boilerplate code for request and response processing
- sending responses
- serving a swagger UI for manual exploration of the API

APIs should rely on OpenAPI tooling for the capabilities they provide, as well as ensuring that API responses are validated against their OpenAPI definition before being placed on the wire. This helps to ensure that the interface definition is current with respect to the API implementation. Any discrepancy should result in an error being thrown.

As an API consumer, use the JSON-schema validation tool [ajv](http://epoberezkin.github.io/ajv/) to validate service responses. Ajv is recommended because it is:
- [Fast](https://github.com/ebdrup/json-schema-benchmark#performance)
- [Compliant](https://github.com/epoberezkin/test-validators#results-summary) with the JSON-schema standard
- [Customizable](https://github.com/epoberezkin/ajv/blob/master/CUSTOM.md), enabling developers to create their own validation keywords

## How

As an API implementor, use tools like [swagger-node](https://github.com/swagger-api/swagger-node) or [swagger-tools](https://github.com/apigee-127/swagger-tools/) to:
- ensure that incoming requests have the expected shape
- validate responses before sending them to the client

When consuming an API, response data should be validated whether or not validation is performed within the API to guard against missing or incorrect validation upstream. Client-side validation is implemented by creating a schema that describes every response field that is actually used. Fields that are not used by the API should be ignored so that errors are only thrown for values that affect the client's functionality. JSON-schema [keywords](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md) should be used for for fine-grained validations of individual fields. The validation should be run right after receiving an HTTP response from a dependency, before any business logic is executed using the response. If the validation fails, immediately throw an error.

When handling a schema validation error, if the API is unable to finish processing the client's request, then the API should respond with the HTTP status code `503 Service Unavailable` to indicate that a downstream dependency failed.

Example:
- [Ajv validation logic](https://github.com/telusdigital/api-platform-utils/blob/master/src/validate-body/index.js)
in `api-platform-utils`
- [Schema](https://github.com/telusdigital/api-platform-order/blob/master/src/domain/order-automation/quote/quoteResponseSchema.js) for BTO Order Management Service GET quote response in api-platform-order

## References

- [Ajv](http://epoberezkin.github.io/ajv/)
- [OpenAPI](https://www.openapis.org/)
- [swagger-tools](https://github.com/apigee-127/swagger-tools)
- [swagger-node](https://github.com/swagger-api/swagger-node)
