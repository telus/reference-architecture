# Search Engine Optimization (SEO) Testing

## Why

This document outlines the SEO Requirements to be applied to every telus.com web page we publish. 

By incorporating these best practices into our web pages, we greatly improve the likelihood of ranking well in Search Engines and driving organic traffic. Additionally, some of these tests overlap other disciplines, notably accessibility and content development, the benefits of which extend beyond search results alone.

## What

The following SEO Checklist is focused on @developer, @content, and @qa concerns. Further, these best practices form an integral component of our overall Digital Standards Index and should be audited pre and post deployment.

## Have questions, suggestions or feedbacks?

We're all ears. [Please fill out this form.](https://docs.google.com/forms/d/1TaG4zduLm2A8Jsoc2S-6rsmR9j8FkKKa-YmqPW8ndOs)

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
  - [ ] Element exists and is unique
  - [ ] Element is between 30 and 60 characters including spaces
  - [ ] Each word in the title should be unique
    - a title tag of "Events - About TELUS - About TELUS" is not valid
  - [ ] Element should conform to pattern: <Keyword rich page title> | TELUS OR <Keyword rich page title> | TELUS \[Sub brand\]
    - e.g. "Apple iPhone X on Canada's fastest phone network | TELUS"
    - e.g. "Digital health solutions in Canada | TELUS Health"
  - [ ] Element must include one or more of the comma-separated values found in the meta keywords element.
  - [ ] Title should reflect the content on the page to help customers that use screen readers and other assistive technology.

### Meta Keywords

While meta keywords are ignored by Google (and other search engines), we require them to validate our SEO-Content strategy as defined by the team's keyword research activity. 

Keyword research is a core SEO activity as it aims to provide insights into the intent of the searcher and the problems they are trying to solve in their search. A successful keyword strategy ensures that we drive the most qualified traffic to a web page or digital experience. To learn more about keyword research, read our ["How to do Keyword Research" deck.](https://telusdigital.atlassian.net/wiki/download/attachments/4339317/SEO%20Guild%20-%20Keyword%20Research.pdf?version=1&modificationDate=1537279124272&cacheVersion=1&api=v2)

- `<meta name="keywords">`
  - [ ] Element exists
  - [ ] Element content is between 10 and 150 including spaces and commas
    - `<meta name="keywords" content="smartphone, Apple iPhone X, wireless charging">`

### Meta Description

- `<meta name="description">`
  - [ ] Element exists
  - [ ] Element content is between 70 and 155 characters including spaces
  - [ ] Element must include one or more meta keyword values. For example:
    - `<meta name="keywords" content="smartphone, Apple iPhone X, wireless charging">`
    - `<meta name="description" content="The future of the smartphone. The Apple iPhone X offers an edge to edge display, Face ID sensors and wireless charging in an all-glass design. Now at TELUS!">`

More info from [Google Support](https://support.google.com/webmasters/answer/35624)

### URL structure

**URLs must be selected by your SEO Prime**.

URLs are a very important Search Relevance signal. They should be consistent, human-readable, and include targeted keywords. 

Optimized Format: `https://www.telus.com/[language][province*]/[category-keyword]/[subcategory-keyword]/[primary-keyword]`

- [ ] Max 90 character length
- [ ] Each word should be separated by a dash (`-`)
- [ ] Must be served over `https`
- [ ] `https://www.telus.com` must be followed by a language path (e.g. `en`|`fr`)
- [ ] Max of 3 paths excluding language and province* (province is optional). Further, each path in the URL should resolve to a page in our content hierarchy.
- [ ] Must include at least one of the comma-separated meta keyword values
- [ ] Base url (the canonical url) should include `lowercase` characters only
- [ ] Base url (the canonical url) should NOT include variants, query strings, or fragments

For example, for the following `<meta name="keywords" content="Apple iPhone X, phones, iphone x canada">`

- Optimized URL: `https://www.telus.com/en/mobility/phones/apple-iphone-x/` 

More info at [Google Support](https://support.google.com/webmasters/answer/76329?hl=en)

### Canonical URL

The Canonical URL tells search engines which URL to include in search results. It also serves to mitigate against indexing pages with duplicate content.

- `<link rel="canonical">`
  - [ ] Element should exist
  - [ ] Element `href` attribute must include a lowercase URL that resolves with a 200 status code
  - [ ] Element `href` attribute should exclude provincial parameters and pathing, tracking codes, fragments, query strings, and any other extra parameters

For example, for the following URL `https://www.telus.com/en/ab/mobility/phones/iphone-x?tracking-code=123` 

Valid Canonical: `<link rel="canonical" href="https://www.telus.com/en/mobility/phones/iphone-x/">`

More info at [Google Support](https://support.google.com/webmasters/answer/139066)

### Page headings

Page headings help Search Engines (screen readers and other assistive technology) understand the content outline of a page. They should include relevant search keywords and be weighted accordingly: `h1` (introduces the page topic) followed by `h2` (breakdown of article sections), ...

- [ ] `<h1 />` element should be unique and found only once per page
- [ ] `<h1 />` element must include one or more of the comma-separated meta keyword values
- [ ] `<h1 />` element should reflect the content on the page and complement the `<title>`
- [ ] do not skip heading levels. For example, `<h3 />` must be preceeded by an `<h2 />`. And `<h2 />` must be preceeded by an `<h1 />`.

### Internal Links

Internal linking plays a critical role in Search Crawlers being able to discover our page content. Of course, internal links  ensure human users can easily navigate our content too.

- [ ] Use descriptive anchor text. Do not use "click here", "learn more", or similar phrases as anchor text; these phrases provide no insight into the content on the linked page. Can augment with [visually hidden](https://a11yproject.com/posts/how-to-hide-content/) text.

- [ ] Links must resolve to a page with a valid 200 status code: i.e. no links to pages with `404 Not Found`, `410 Gone`, `500 Server Error` or other errors
- [ ] Links should not result in redirect loops

Sub-optimal
`<a href="https://www.telus.com/en/mobility/phones/iphone-x/">Learn more</a>`

Desired
`<a href="https://www.telus.com/en/mobility/phones/iphone-x/">Apple iPhone X</a>`

More info at [Google Support](https://support.google.com/webmasters/answer/139066)

### Images

Images represent a significant (and growing) search traffic source, but only if they can be properly crawled and indexed.

- `<img>`
  - [ ] Element `alt` attribute exists and provides enough context that you can understand the image without viewing it
  - [ ] Element `src` attribute (i.e. the filename) should be separated by hyphens (-) and similarly describe the image

For example, an image of a woman taking a selfie with an iPhone XS might look like `<img src="https://www.telus.com/images/apple-iphone-xs-woman-selfie.jpg" alt="Woman taking a selfie with an Apple iPhone XS">`

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

  - Should be identical to the page [Document Title](https://github.com/telus/reference-architecture/blob/master/testing/nonfunctional/seo.md#document-title)

- `<meta property="og:description">`

  - Should be identical to the page [Meta Description](https://github.com/telus/reference-architecture/blob/master/testing/nonfunctional/seo.md#meta-description)

- `<meta property="og:url">`

  - Should be identical to the page [ref=canonical](https://github.com/telus/reference-architecture/blob/master/testing/nonfunctional/seo.md#canonical-url)

- `<meta property="og:image">`
  - [ ] element should exist and be unique
  - [ ] element should contain an image URL that best represents the page

### Status codes

The HTTP status code tells crawlers whether a URL leads to a valid page or not. Pages with unsuccessful status codes may not be indexed properly.

- [ ] Page's status codes is not in the range of `[400, 600]`
- [ ] Development and staging environments should be blocked from Googlebots via `robots.txt`, `<meta name="robots">` tag and/or return a `401 Unauthorized` HTTP response

### Mobile friendly

Use leading compatibility checking tools to evaluate mobile friendliness

- [ ] Check if your site is mobile-friendly through Google's [Mobile Friendly](https://search.google.com/test/mobile-friendly) test

### Page Speed

Page speed is a ranking signal on Google Search. The SEO team recommends using [Telus-Lighthouse](https://github.com/telus/reference-architecture/blob/master/performance/performance-baseline.md) in your continuous integration pipelines to monitor page speed (and all other TELUS-specific SEO best practices).

### Indexability checks

Ensure page is not being blocked from crawler discovery and indexing.

- [ ] The `robots.txt` file does not prevent the page from being indexed
- [ ] element <meta name="robots" content="noindex"> does not exist 
- [ ] HTTPS response does not return an "X-Robots-Tag: noindex" 

### Structured Data

Structured data is a standardized data format that `explicitly` tells Search Engines about the content of our pages - guesswork removed. Google Search uses structured data to more accurately return search results and to enable search result enhancements. 

Structured Data formats exist to describe pretty much anything that exists in the physical world, but we are focussed principally on a few data types; notably Breadcrumbs and Products using the `JSON-LD` format.

Cf. [Introduction to Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)

#### Breadcrumbs

In addition to serving as an excellent navigation aid for humans, Breadcrumbs (with Structured Data) are the best way to inform Search Engines about our Information Architecture; it has been designed specifically for this purpose.

[View Breadcrumb Schema API (JSON-LD)](https://schema.org/BreadcrumbList)

- `"@type": "BreadcrumbList"`
  - [ ] element should exist on every page (except the telus.com home page)
- `"itemListElement:"`
  - [ ] element should contain an ordered list of URLs and anchor text indicating each level of the content hierarchy from the home page to the current page as noted below

For example, given the following Canonical URL: `https://www.telus.com/en/mobility/phones/iphone-x`

The Breadcrumb User Interface Link List should be `Home > Mobility > Phones > iPhone X` and include the following Structured Data:

```<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "https://www.telus.com/en/mobility/",
                "name": "Mobility"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id":"https://www.telus.com/en/mobility/phones/",
                "name":"Phones"
            }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@id":"https://www.telus.com/en/mobility/phones/iphone-x",
                "name":"iPhone X"
            }
        }
    ]
}
```

#### Product & Service Detail pages

[View Product Schema API (JSON-LD)](https://schema.org/Product)

> e.g., phones and accessories.

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

[Multi-SKU Product Schema example](https://www.schemaapp.com/tips/schema-org-variable-products-productmodels-offers/)

#### Product Catalogue pages

Provided the products DO NOT link to dedicated product detail pages, use the Product Schema as noted above, but EXCLUDE the URL property.

#### For video content types

[View Video Object Schema API (JSON-LD)](https://schema.org/VideoObject)

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

Ensure paginated content is discoverbale to search crawlers (and assistive technology). 

- [ ] All pages must be accesibile with a link and a unique URL
- [ ] Each page in a pagination sequence should use `rel="next"` and / or `rel="prev"` links to indicate the relationship between the sequence of paged content.

For example, page 2 in a 10-page pagination sequence `https://www.telus.com/en/support/article-part2` should include the following:

`<link rel="prev" href="https://www.telus.com/en/support/article" />` and `<link rel="next" href="https://www.telus.com/en/support/article-part3" />`

[Google Content Guidelines](https://support.google.com/webmasters/answer/1663744?hl=en).

## How

Incorporate [Telus-Lighthouse](https://github.com/telus/telus-lighthouse) into your application and test regularly to ensure your pages comply with the SEO Standards above.

## Who

- @seo: SEO Checklist
- @delivery, @developers, @content, @qa: tooling & implementation
