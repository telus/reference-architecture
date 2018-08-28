# Automated Performance Testing (Front-End)

## Why

Automated Front-End Performance Testing based on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) has been added into the pipeline, so that application contributors/owners can keep an eye on how the application performs and block deployments that drop scores under their thresholds.

## What

Configure and run tests automatically in your pipeline

## How

Automated Performance Testing is implemented in the isomorphic [starter kit](../development/starter-kits.md), using the [psi](https://www.npmjs.com/package/psi) library. For more details on setup, see [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

## When

Writing performance tests: Up on story completion

Running performance tests: As part of the delivery pipeline

## Standards

## Who
@delivery @dev
