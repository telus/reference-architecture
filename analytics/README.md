# Analytics

## Why
To measure KPIs we leverage Adobe Analytics for web and mobile app data collection across Telus. 


## What
Adobe Analytics provides the space to store, query and visualize data.
Adobe DTM or Adobe Launch is a separate space, which specifies what and when data is sent to Adobe Analytics.
(Adobe Launch is the tag manager we are migrating towards)

## How
In addition to the Adobe tools above, every page needs a 'dataLayer' object, which represents what data is available for sending to Adobe Analytics. As a tag manager like Adobe DTM or Adobe Launch is loaded on page, code will run to check for dataLayer and send a pageview as result. Nowadays, especially with SPA behavior, dataLayer needs to be updated as user interacts with page and cause DOM pages. 

- [Process](https://telusdigital.atlassian.net/wiki/spaces/AI/pages/98467940/Analytics+Process)
- [List of Functions Exposed](adobe_analytics_functions.md)


## Reference
- [Global Tracking](https://telusdigital.atlassian.net/wiki/spaces/AI/pages/90308659/Global+Tracking#GlobalTracking-Introduction)
- [Testing if Data is Sent](https://telusdigital.atlassian.net/wiki/spaces/AI/pages/415793177/Testing+Adobe+Analytics)
- [Variable Mapping](https://telusdigital.atlassian.net/wiki/spaces/AI/pages/213320384/Solution+Design+Reference)

