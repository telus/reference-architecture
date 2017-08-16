# Page Speed Insights

## Why

Not only is page performance important for SEO, but it is even more important for UX, conversion optimization and general customer satisfaction. 
As we build new projects on the reference architecture, it is important that we always consider how search engines see and rank our applications. 

## What

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) is a tool developed by Google that measures the performance of a page for mobile and desktop devices. It is probably the most referenced tool in the community, as it provides detailed and useful optimization tips. 

PageSpeed Insights checks to see if a page has applied common performance best practices and provides a score, which ranges from 0 to 100 points. Many of the rules used by PageSpeed Insights came out of recommendations of blog posts and articles published by developers in the web community. Other rules were added by developers at Google based on research and internal use by Google applications.

PageSpeed Insights measures how the page can improve its performance on:

- *time to above-the-fold load*: Elapsed time from the moment a user requests a new page and to the moment the above-the-fold content is rendered by the browser.
- *time to full page load*: Elapsed time from the moment a user requests a new page to the moment the page is fully rendered by the browser.

**Note:** PageSpeed Insights checks to see if a page has applied common performance best practices but does not account for all the factors that can affect a page's speed - e.g. type of the device used to access the page, network speed, and cache reuse of shared resources. As a result, while the score is correlated with the speed of a page, it is not completely representative of the real world user experience.

## How

Use the [PageSpeed Insights UI](https://developers.google.com/speed/pagespeed/insights/) or configure and run tests automatically in your pipeline (see [here](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/load-test) for more details).

Try to set and target a threshold that is as close to 100 as possible. In many cases, you may not be able to compromise the layout or functionality of the application to get the score higher, but make sure you at least think about it.
Also, as you will be working on developing new features and monitoring the scores of your application URLs in time, you will be able to notice the impact -- feel free to discuss with your Product Owner and other stakeholders about the impact that certain integrations/features has on the scores.

## Who

All Telus Digital developers, of course! 

## References

- [PageSpeed Insights UI](https://developers.google.com/speed/pagespeed/insights/)
- [Starter Kit - Automated load & performance tests](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/load-test)

