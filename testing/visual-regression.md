# Visual regression testing

## Why

We want to ensure that there are no unexpected look and feel changes, when we deliver new versions of our application.

## What

Use [node-resemble-js](https://www.npmjs.com/package/node-resemble-js) to perform a visual diff of our pages, during our [end to end](e2e.md) tests.

## How

When you run the end to end test for the first time, you can store new baseline screenshots for your pages (they will be created automatically, and should be committed to git). On subsequent executions, new screenshots will be made and compared with the baseline. If there is a difference greater than 5% (to accommodate for slight differences in fonts, etc), the tests will fail and abort the delivery pipeline. If the change is desireable, you simply need to update the baseline screenshots with new versions.

The visual diff will mark the problem areas with a purple overlay:

![Visual regression example](visual-regression.png)

## Who

@delivery @qa

## References

- [node-resemble-js](https://www.npmjs.com/package/node-resemble-js)