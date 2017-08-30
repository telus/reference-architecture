# Archiving Projects

## Why

As Products & Projects get deprecated and [EOLed][eol], the code-base used to build them should be safely archived for both compliance and future reference.

## What

Our code is hosted on Github, and includes scope beyond the code it-self, an archiving solution should enable a full backup and restore functionality.

This includes:

- Git Data (Commit History, Branches, Tags, etc...)
- Github Wikis
- Github Issues
- Github Releases
- Github Projects
- Github Pull Requests
- Commit Metrics

## How

We created a separate Github organization: [`telusdigital-archive`][archive] that will host all archived repositories, leveraging the ["transfer ownership"][transfer-docs] feature in Github.

Once repo is transferd, the following actions need to be taken:

- remove all collaborators and teams
- remove all webhooks 
- remove all integrations and services
- remove all deploy keys
- ensure repo is made private
- disable GitHub Pages _(if enabled)_

[eol]: https://en.wikipedia.org/wiki/End-of-life_(product)
[archive]: https://github.com/telusdigital-archive
[transfer-docs]: https://help.github.com/articles/transferring-a-repository-owned-by-your-organization/
