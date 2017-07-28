# Analytics Testing

## Why

Our [Analytics](../analytics/) practice relies on a `dataLayer` object that is injected onto the DOM at build time, this object must follow a specific structure and format, values will vary based on application and route of the website. We should test for that structure, format and values as part of our automated testing.

## What

Validate the object in the [e2e](e2e.md) testing phase using [JSON Schema][json-schema]

1. validate structure & format _(consistent across **all** implementations)_
2. validate values across pages per project _(custom schemas needed in each project)_

## How

In our [isomorphic starter kit][starter-kit], we have a standard schemas that defines the `dataLayer` global object rules, using [`nightwatch`][nightwatch] custom assertion, the schema validation will run against your pages.

Additionally, if a custom schema is provided for the project level, it will validate values as well. 

These are automated [gating](../delivery/continuous-delivery.md#automated-gating) tests. If the structure or content of your objects is incorrect, the test will fail, and the delivery pipeline will be halted.

## TODO

- [ ] create a standalone `nightwatch-json-schema` OSS package that implements the logic above
- [ ] if the `dataLayer` schema can be shared publicly, we should separate that into it's own package  

## Who

- @analytics: `dataLayer` definition and schema ownership
- @delivery, @developers, @qa: tooling & implementation

## References

- [JSON Schema][json-schema]
  > Spec documentation

- [AJV][ajv]
  > node based JSON Schema Validator, proven to be the fastest at the time of writing.

[ajv]: https://github.com/epoberezkin/ajv
[json-schema]: http://json-schema.org/
[starter-kit]: https://github.com/telusdigital/telus-isomorphic-starter-kit
[nightwatch]: https://github.com/nightwatchjs/nightwatch