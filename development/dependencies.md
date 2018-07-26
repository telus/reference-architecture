# Dependency Management

## Why

- Outdated libraries expose security risks, performance impacts, and business loss due to low adoption.
- Continusouly checking multiple dependencies for updates can be a large mental burden for developers.
- Developers want to easily pick upgrades one at a time without breaking their applications.

## What

Renovate Bot, a service that automatically notifies projects of updates to their dependencies with Pull Requests.

## How

The only setup necessary to get started with Renovate is to create a config file called `renovate.json` with the following content:

    {
        "extends": [
            "@telusdigital"
        ]
    }

This config refers to a centralized TELUS Digital [configuration](https://github.com/telus/renovate-config/blob/master/package.json) for Renovate Bot. See the `package.json` file in that repository. Following the [Renovate Config Docs](https://renovatebot.com/docs/configuration-options/), we have configured it to:

- not pin specific Docker image digests in Dockerfiles,
- run weekly every Sunday night,
- rebase stale PRs,
- not recreate an updated `yarn.lock` file every week separate from dependency updates,
- preserve semantic version ranges,
- make separate PRs for patch releases,
- and use semantic commit messages.

### What You CAn Expect

Pull Requests will be made to your project with changes to `package.json`, and `yarn.lock`. The PR body will describe the proposed version number, have a link to the module's webpage, and changelogs/release notes corresponding to the updates between the current version and proposed version.


### Managing Updates

Renovate Bot, by default, will look for updates for all dependencies in your `package.json` file. After a PR has been made for a particular dependency, you can tell Renovate that you don't want any more updates for that package by closing the PR. *Renovate Bot uses the names of open and closed PRs to remember your update preferences.* If you leave the PR open and unmerged, the bot will also leave the dependency alone and not give you new updates. If you change your mind about a package, simply rename the closed PR and Renovate will reopen a new one in its next update cycle.

## Who

Developers.

## References

- [Renovate Config](https://github.com/telus/renovate-config)
- [Renovate Bot](https://renovatebot.com/)
