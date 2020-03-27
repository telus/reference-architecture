# Jira + Github Integration

## What

Ever wonder how nice would it be if Jira already knew about this PR you're creating?

Well, we're in luck because Jira has already been supporting GitHub integration. As of 2020, this is the official Jira app available for free on GitHub marketplace:
https://marketplace.atlassian.com/apps/1219592/github-for-jira?hosting=cloud&tab=installation

This app helps teams to automatically connect a PR in their repo to the appropriate Jira story. And below is a few tips on how to make the best use out of it.

## How

### Tagging a Jira Issue with Git or GitHub

To tag a Jira story, you may add the Jira story number to one or more of the following in Git/GitHub:

* branch name
* pull request title
* pull request descriptions
* pull request comments

The format varies depending on which method you choose to tag the story, as from the matrix below:

| Format  | Branch Name | Git Commits | PR Title  | PR Comments  | Notes |
|---|---|---|---|---|---|
| `STORY-123`  | ✔ | ❌ | ❌ | ❌  | No need to put `[]` around  |
| `STORY-123-hotfix`  | ✔  | ❌ |❌ | ❌  | Can append other strings  |
| `feat/STORY-123-new-button` | ✔ | ❌ | ❌ | ❌  | Also allows prefixes |
| `[STORY-123]`  | ❌ | ✔ | ✔ |✔ | `[]` should be used everywhere except in branch name  |

Notes
* Regardless of where you are inserting the story number, it **MUST BE ALL CAPS**.

* Jira also syncs any future update of the tagged commits and PRs to its Jira story, so you will only ever need to tag the PR using one of the methods above. For instance, you may choose to create your branches by following the format `STORY-123` and don't have to worry about having to repeat it many times through your commits or PR.

### Viewing related GitHub updates on a Jira Story


Example as shown per Jira documentation:

![Jira Development Panel][panel]

[panel]: https://confluence.atlassian.com/jirasoftwarecloud/files/777002795/947850193/1/1522126382029/Issue+with+dev+panel.png


## Who

Developers.

## References

Check the "How it works" section on this guide to learn more about Jira + Github:
https://confluence.atlassian.com/adminjiracloud/integrating-with-development-tools-776636216.html