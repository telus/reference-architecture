# Schema validation

## Why

When an API calls another service as a dependency,
the API expects the response to match a certain contract.
The expectations on the response fields include:
- Required fields
- Nested structures
- Fields are a certain type/format
- Fields are a certain value

If the response does not match this contract,
it can lead to broken behavior in the API.

We would like to throw an error as soon as we get
a response not matching the contract, in order to:
- More easily identify the source of the issue
- Avoid executing API logic with bad data
- Encapsulate validation of the response so the rest
of the API code can assume it has the right data

## What

Use the JSON-schema validation tool [ajv](http://epoberezkin.github.io/ajv/)
to validate service responses. Ajv is recommended because it is:
- [Fast](https://github.com/ebdrup/json-schema-benchmark#performance)
- [Compliant](https://github.com/epoberezkin/test-validators#results-summary)
with the JSON-schema standard
- [Customizable](https://github.com/epoberezkin/ajv/blob/master/CUSTOM.md),
enabling developers to create their own validation keywords

## How

When validating a dependency service's response,
the schema should cover every response field used in the API.
Fields that are not used by the API should be ignored, so that errors are only
thrown for fields that affect the API's functionality.
JSON-schema [keywords](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md)
should be used for for fine-grained validations of individual fields.

The validation should be run right after receiving an HTTP response
from a dependency, before any business logic is executed using the response.
If the validation fails, immediately throw an error.

When handling a schema validation error,
if the API is unable to finish processing the client's request,
then the API should respond with the HTTP status code 503 Service Unavailable
to indicate that a downstream dependency failed.

Example:
- [Ajv validation logic](https://github.com/telusdigital/api-platform-utils/blob/master/src/validate-body/index.js)
in api-platform-utils
- [Schema](https://github.com/telusdigital/api-platform-order/blob/master/src/domain/order-automation/quote/quoteResponseSchema.js)
for BTO Order Management Service GET quote response in api-platform-order

## References

- [Ajv](http://epoberezkin.github.io/ajv/)
