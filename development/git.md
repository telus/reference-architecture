# Git & GitHub

## Why

The vast majority of TELUS digital projects use Git as their version control system and GitHub for repository hosting. Git provides teams the convenience of easy release management and the flexibility to consolidate code in any fashion they like. GitHub's remote repository hosting enables code collaboration for any number of participants worldwide, asynchronously, and across all time zones. 

## What

Here are some considerations when utilising Git with Github at TELUS:

- **Security**: securing your GitHub credentials and identifying yourself as a TELUS employee, contractor, or vendor. This ensures all commits, tags, and messages are produced by genuine people authorised 
- **Consistency**: writing commit messages in a manner that is standard across all TELUS repositories. This brings several advantages:
  - more concise commit subjects
  - parseable commit subjects for generating documentation or changelogs
  - fuller details available in line-by-line annotations
  - breaking changes and ticket references are also documented within code annotations

## How

### Security

In the [TELUS digital GitHub organisation][org], it is required that all members **enable 2-factor authentication**. The preferred method of communicating with remote repositories is [SSH][github-ssh]; users must protect their private keys by storing them locally and never sharing them or storing them using any online method, especially email, Slack, or within code. Lastly, users may optionally sign commits and tags using [GPG][github-gpg]; it is an involved process, but proves with a high degree of certainty that every commit and release tag you produce is genuinely by you.

### Consistency

Team members utilising Git and contributing to project repositories can follow [this guide on our contributing model][contribution]. It includes details on writing commit messages, git workflows, and suggests tools that facilitate writing commit messages.

## References

- [Git][git]
- [GitHub][github]

[org]: https://github.com/orgs/telusdigital/people
[contribution]: ../process/contribution-model.md
[github-ssh]: https://help.github.com/articles/connecting-to-github-with-ssh/
[github-gpg]: https://help.github.com/articles/signing-commits-using-gpg/
[git]: https://git-scm.com/
[github]: https://github.com/