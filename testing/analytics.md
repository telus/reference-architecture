# Analytics testing

## Why

Our Analytics scripting requires that we add a `dataLayer` object, with a specific structure, format and values. We should also test that our structure, format and values are correct.

## What

Use [AJV](http://epoberezkin.github.io/ajv/) schema validator to validate the `dataLayer` object in the [end to end](e2e.md) tests.

## How

In our isomorphic starter kit, we have analytics schemas for:
- events
- users
- pages
- errors
- etc.

We also have a `dataLayer` assertion that will test these schemas against your pages in the end to end test. If the structure or content of your objects is incorrect, the test will fail, and the delivery pipeline will be halted.

## Who

@delivery @qa

## References

- [AJV](http://epoberezkin.github.io/ajv/)