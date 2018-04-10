# Search Engine Optimization (SEO) Testing


## Why

We want our web pages (and native apps) to rank well when queried in search engines.
SEO considerations include properly tagged, optimized content and page speed.

This document will only cover testing practices focused on the User Interface; specifically, the Document Object Model (DOM).

## What

TELUS maintains an "SEO Checklist" for best practices and requirements. The following is a subset that covers @developer & @qa concerns **that can be automated**.

## SEO Checklist
- [Document Title](#document-title)
- [Meta Keywords](#meta-keywords)
- [Meta Description](#meta-description)
- [URL Structure](#url-structure)
- [Canonical URL](#canonical-url)
- [Page Headings](#page-headings)
- [Internal Links](#internal-links)
- [Images](#images)
- [hreflang](#hreflang)
- [Facebook Open Graph Markup](#facebook-open-graph-markup)
- [Status Codes](#status-codes)
- [Mobile friendly](#mobile-friendly)
- [Page Speed](#page-speed)
- [Indexability](#indexability-checks)
- [Structured Data](#structured-data)
- [Pagination](#pagination)


### Document Title

- `<title>`
  - [ ] element exists and is unique
  - [ ] element is between 40 and 65 characters including spaces
  - [ ] each word in the title should be unique
      - a title tag of "Events - About TELUS - About TELUS" is not valid
  - [ ] element should conform to pattern: [Keywords] - [Brand] - TELUS.com
      - the Business bundle page's title tag would be "Business Phone and Internet - Business - TELUS.com"  
      - the About Events page's title tag would be "Events - About - TELUS.com"  
  - [ ] Consumer pages (i.e. Mobility and Home Solutions) do not need a "Brand" indicator 
    - e.g. "Apple iPhone X on Canada's fastest phone network - TELUS.com"

### Meta Keywords

While meta keywords are ignored by Google (and other search engines), we require them to validate our content strategy.

- `<meta name="keywords">`
  - [ ] element exists
  - [ ] element content is between 10 and 150 including spaces and commas
    - `<meta name="keywords" content="smartphone, Apple iPhone X, wireless charging">`

### Meta Description

- `<meta name="description">`
  - [ ] element exists
  - [ ] element content is between 150 and 320 characters including spaces
  - [ ] element must include one or more of the comma-separated values found in the meta keywords element. For example:
    - `<meta name="keywords" content="smartphone, Apple iPhone X, wireless charging">`
    - `<meta name="description" content="The future of the smartphone. The Apple iPhone X offers an edge to edge display, Face ID sensors and wireless charging in an all-glass design. Now at TELUS!">`

More info from [Google Support](https://support.google.com/webmasters/answer/35624)


### URL structure

URLs should be consistent, human-readable, and include targeted keywords. URLs are very important Search Relevance signal.


- [ ] each word in the URL phrase should be separated by a dash (`-`). 
- [ ] URL phrase must include one or more of the comma-separated values found in the meta keywords element.

For example, for the following `<meta name="keywords" content="smartphone, Apple iPhone X, wireless charging">`
  - URL: `https://www.telus.com/en/mobility/phones/apple-iphone-x/`
  
When constructing URLs, consider how a user would search on Google - "appleiphonex" or "apple iphone x"? Presumably the latter. Effectively, the dash represents a space in a user search.

### Canonical URL

- `<link rel="canonical">`
  - [ ] element should exist
  - [ ] element href attribute should not be empty
  - [ ] element href attribute should exclude provincial parameters, tracking codes and any other extra parameters & query strings
  - [ ] element `href` attribute is not broken and/or do not fall in an infinite loop (i.e. canonicals pointing to each other)

For example, for the following URL `https://www.telus.com/en/ab/mobility/phones/iphone-x`
  - Canonical: `<link rel="canonical" href="https://www.telus.com/en/mobility/phones/iphone-x/">`

More info at [Google Support](https://support.google.com/webmasters/answer/139066)

### Page headings

Page headings should properly reflect the title of the page.

- [ ] `<h1 />` element should be unique and found only once per page

### Internal Links

Internal linking plays a critical role in Googlebot's ability to find our site's pages and ensures that our visitors can navigate and enjoy your site.

- [ ] Use descriptive anchor text. Do not use "click here", learn more", or similar phrases as anchor text - these phrases provide no context to search crawlers or screeen readers.

- [ ] Page does not contain any broken links (returning `404 Not Found` or `410 Gone`)
- [ ] Page does not contain any links that result in redirect loops

Sub-optimal
```<a href="https://www.telus.com/en/mobility/phones/iphone-x/">click here</a>```

Desired
```<a href="https://www.telus.com/en/mobility/phones/iphone-x/">Apple iPhone X on Canada's fastest network</a>```

More info at [Google Support](https://support.google.com/webmasters/answer/139066)

### Images

Images that cannot be seen by crawlers should have short and descriptive alternate text, and be named descriptively. Cf. [Google Content Guidelines](https://support.google.com/webmasters/answer/76329?hl=en#):

- `<img>`
  - [ ] element alt attribute exists and is short and descriptive
  - [ ] element src attribute should be separated by hyphens ("-")
  - [ ] image file descriptively named and separated by hyphens ("-")
  
 
### hreflang

Allow crawlers to discover alternate translations of the page content.

- `<link rel="alternate">`
  - [ ] element should exist
  - [ ] element `hreflang` attribute should exist 
  - [ ] element `hreflang` should reference all language variations of the page
      - if the current canonical URL is `https://www.telus.com/en/about/` the `hreflang` attributes would be:
          - `<link rel="alternate" href="https://www.telus.com/fr/about/" hreflang="fr-ca" />`
          - `<link rel="alternate" href="https://www.telus.com/en/about/" hreflang="en-ca" />`
  
For more information see [this documentation](https://support.google.com/webmasters/answer/189077?hl=en)

### Facebook Open Graph Markup

- `<meta property="og:title">`
  - Should be identical to the page [Document Title] (https://github.com/telusdigital/reference-architecture/blob/master/testing/nonfunctional/seo.md#document-title)

- `<meta property="og:description">`
  - Should be identical to the page [Meta Description] (https://github.com/telusdigital/reference-architecture/blob/master/testing/nonfunctional/seo.md#meta-description)
  
- `<meta property="og:url">`
  - Should be identical to the page [ref=canonical] (https://github.com/telusdigital/reference-architecture/blob/master/testing/nonfunctional/seo.md#canonical-url)
 
- `<meta property="og:image">`
  - [ ] element should exist and be unique
  - [ ] element should contain an image URL that best represents the page


### Status codes

The HTTP status code tells crawlers whether a URL leads to a valid page or not. Pages with unsuccessful status codes may not be indexed properly.

  - [ ] Page's status codes is not in the range of [400, 600]
  - [ ] Development and staging environments should be blocked from Googlebots via `robots.txt`, `<meta name="robots">` tag and/or return a `401 Unauthorized` HTTP response


### Mobile friendly

Use leading compatibility checking tools to evaluate mobile friendliness

- [ ] Check if your site is mobile-friendly through Google's [Mobile Friendly](https://search.google.com/test/mobile-friendly) test

### Page Speed

All Telus web apps should have [Telus Lighthouse](https://github.com/telusdigital/telus-lighthouse) running in the build pipeline for continuous performance monitoring. We also run Telus Lighthouse against production URLs, and surface the results in DOMO.

If using the Chrome browser, you can run Lighthouse at any time - and against any environment - by browsing to a page, opening the DevTools, and selecting the Audit tab.

Additionally, there are several online performance testing tools:

- [ ] Mobile and Desktop speed tests on [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [ ] Mobile Page Speed test on [Think With Google](https://testmysite.thinkwithgoogle.com/)


### Indexability checks

Ensure page is not being blocked from crawler discovery and indexing.

- [ ] The `robots.txt` file does not prevent the page from being indexed
- [ ] element <meta name="robots" content="noindex"> does not exist 
- [ ] HTTPS response does not return an "X-Robots-Tag: noindex" 

### Structured Data

Structured data is a standardized format for providing information about a page and classifying the page content; for example, for product pages: what are the price, stock availability, review ratings, and so on.

Cf. [Introduction to Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)

#### Product & Service Detail pages: e.g., phones and accessories.

- `"@type": "Product"`
  - [ ] element should exist

- `"name"`
  - [ ] element should exist

- `"description"`
  - [ ] element should exist

- `"image"`
  - [ ] element should exist

- `"brand"` 
  - [ ] element should exist

- `"@type": "Offer"`
  - [ ] element should exist

- `"price"` 
  - [ ] element should exist

- `"priceCurrency"`
  - [ ] element should exist

- `"availability"`
  - [ ] element should exist

- `"url"`
  - [ ] element should exist

#### Product Catalogue pages (*that do not link directly to products)

Use the product schema as noted above, but EXCLUDE the URL property.

#### For video content types

- `"@type": "VideoObject"`
  - [ ] element should exist

- `"name"`
  - [ ] element should exist

- `"description"`
  - [ ] element should exist

- `"thumbnailUrl"`
  - [ ] element should exist

- `"uploadDate"`
  - [ ] element should exist and in ISO 8601 format


### Pagination

Ensure your paginated content ie "load more" is not hidden from bots. Cf. [Google Content Guidelines](https://support.google.com/webmasters/answer/1663744?hl=en).

- [ ] Ensure a "View All" page exists or use `rel="next"` and `rel="prev"` links to indicate the relationship between component URLs


## How

Incorporate [Telus Lighthouse](https://github.com/telusdigital/telus-lighthouse) in your application. Telus Lighthouse will validate your pages and ensure compliance with the SEO standards above. Easy :)

## Who

- @seo: SEO Checklist
- @delivery, @developers, @qa: tooling & implementation
