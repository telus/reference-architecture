# Supported Browsers

## Why

Developers and QA need to know which browsers they should be optimizing their applications for.  It is not realistic to think that all of TELUS Digital's applications will work on older browsers. For example, is it safe for developers to use flexbox without a polyfill?

## What

There is currently no standard on what browsers TELUS Digital applications should be optimized for.  A browser standard should be based on user statistics, as new browser versions get released very often. 

## How

We have the following statistics of the browser usage on telus.com:

- [Top 25 Desktop browsers](https://telus.domo.com/kpis/details/1688963890)
- [Top 25 Mobile browsers](https://telus.domo.com/kpis/details/1326234590)
- [Breakdown by Application](https://insights.newrelic.com/accounts/648105/dashboards/146843)

### Browsers used by TELUS Agents on T.com

_Home Solutions Agents_

- KANA Agents use Google Chrome, version 54.0.2840.59m but only access the Web Tracker
- Door to Door sales agents access T.com from an iPad Air 2 with Mobile Safari 10

### Browser Standard

Going forward, applications must fully support browsers with a usage >= 0.05% and browsers used by TELUS Agents.
