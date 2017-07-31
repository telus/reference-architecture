# Search Engine Optimization (SEO) Testing

## Why

We want our applications to get a good page ranking, when queried by search engine providers.
SEO considerations also include concerns such as performance, render speed, bundle size, etc ...

This document will only cover testing practices focused on HTML & the DOM.

## What

TELUS maintains an "SEO Checklist" for best practices and requirements, the following is a subset that covers @developer & @qa concerns **that can be automated**:


- [ ] Is the `<h1/>` tag unique and found only once on the website?
- [ ] Does the `<title>` include the target phrase, in addition to company domain name using a dash ( `-` ) to separate them?
- [ ] Is the `<title>` meta tag unique and 65 characters or less?
- [ ] Is you `<meta name="description">` unique and not an exact copy of a paragraph on the first page?
- [ ] Is the `<meta description>` tag 155 characters or less?
- [ ] Do you have appropriate and relevant `<meta name="keywords">`?
- [ ] Does the URL include the exact target phrase with dashes (`-`) between each word of the target phrase?
- [ ] Are there excessive parameters, session IDs, navigation tags, etc. that can be trimmed off?
- [ ] Is there only one version of a URL to access the page?
- [ ] Have you specified an appropriate canonical URL?
- [ ] Does it exclude provincial parameters, tracking codes and other extra parameters?
- [ ] Is not broken and do not fall in an infinite loop (i.e. canonicals pointing to each other)?
- [ ] Are the images `alt` attribute short and descriptive?
- [ ] Is the image filename appropriately named and separated by underscores?
- [ ] Is the page indexable through `robots.txt`?
- [ ] check your site-speed on Webpagetest and/or YellowLab Tools
- [ ] Are there broken links on the page?
- [ ] Are development and staging environments blocked from Googlebots via robots.txt?
- [ ] Have we set language location for the pages ie hreflang attribute?
- [ ] If applicable, is schema.org markup implemented on the page?

## How

In our [isomorphic starter kit][starter-kit], we validate the rules above in the [e2e](e2e.md) testing phase using [`nightwatch`][nightwatch] custom assertion library.

These are automated [gating](../delivery/continuous-delivery.md#automated-gating) tests. If the tests fail the delivery pipeline will be halted.

## TODO

- [ ] separate the logic from the starter kit into a standalone `nightwatch-seo` library

## Who

- @seo: SEO Checklist
- @delivery, @developers, @qa: tooling & implementation
