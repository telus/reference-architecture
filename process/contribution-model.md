# Contribution Model

## Why

As a tool, Git combined with GitHub provides countless styles of development and project management with many options for configuration such as:

- Trunk based development (w/feature flagging)
- GitFlow (branches/features)
- Pull Requests (core contributers / open source)

For more details, see the [Git and Github][git-ra] document.

## What

This document provides a standard for practices around the contribution model for Telus Digital that should:

- Reduce the time required to onboard new developers
- Reduce friction for developers contributing to other projects
- Provide clarity on expectations for leads in how to model new projects, and coach their teams in contributing
    
## How

There has been a constant swing between Trunk Based Development and Branch style development for many years. Reasonably so, both are seen to have advantages and disadvantages.

- Small branches with Pull Requests encourage a social open source model, a living form of documentation, and an easy way for external contributors to see and understand the contribution model
- Trunk Based development can assist in reducing defects and reduce day to day frictions for core team members. 

In this way teams are encouraged to adopt a hybrid approach:

- Each project should have core owners that oversee the vision of the project, and can reject/approve Pull Requests and are responsible for supporting and communicating with interested contributors.
- Should be comfortable using small branches with PRs, and should practice this as a way of creating transparency in the codebase and encouraging external contributors to participate
- Trunk based development is acceptable, but more as a philosophical approach to reducing internal day to day frictions for the core team, not as a mandate
 
### Commit Template

For standardized git commits, projects may use Commitizen with conventional-changelog adapter. This can be hooked into your commit-msg git-hook to ensure all commit messages utilize this format. Commitizen is optional; contributors may alternatively reference the [Karma Format][karma] document (summarized below) and write out their commits ordinarily.

This can be set up by running the following in a project's root:

```bash
# Install commitizen globally if you have not already
npm install commitizen -g 

# This initializes your actual project config by installing the adapter, and adding the config to your package.json
commitizen init cz-conventional-changelog --save-dev --save-exact
```

Once installed, git commits using the commitizen tool can be made with:
```bash
git cz
```

### Commit Template Reference

```plain
<type>: <subject>

<body>

<footer>
```

Optionally, the commit message header can be: `<type>(<scope>): <subject>`

`<type>` can be `feat`, `fix`, `docs`, `style`, `refactor`, `test`, or `chore`

`<scope>` can be a short identifier of the component that was changed, e.g. `init`, `runner`, `watcher`, etc.

`<body>` should use the imperative present tense and in all lowercase. E.g., `add foo to bar`, not `Added foo to bar`. Should also explain why _this_ change was made (as opposed to other changes).

`<footer>`, if any, should reference the issue(s) that this commit was in relation to, e.g.:

```plain
Closes ABC-123
(or)
Closes ABC-456, ABC-457
```

## References
- [Open Source Guides][open-source-guides]
- [Trunk Based Development - History][trunk-based-development]
- [Commitizen][commitizen]

[git-ra]: ../development/git.md
[open-source-guides]: https://opensource.guide/ "Open Source Guides"
[trunk-based-development]: https://trunkbaseddevelopment.com/game-changers/ "History of Trunk Based Development"
[commitizen]: https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly
[karma]: https://karma-runner.github.io/1.0/dev/git-commit-msg.html
