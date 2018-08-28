# Project Template

## Why

-   Developers should be able to easily:
    -   Understand a project's purpose and scope
    -   Setup / Install dependancies
    -   Run unit tests
    -   Build / execute a development environment
    -   Commit / Contribute back to it
    
## What
This document defines a standard project template for Telus Digital that provides the following benefits:

-   Reduced start up time for each project
-   Clear expectations of what developers should expect from other projects
-   Examples of how to model your own project to be in alignment with best practices across Telus Digital

It covers:
-   Readme Template
-   Git Hooks
-   Commit Standards
    
## How

### GitHub Readme
Every project should have a readme that clearly expresses the following:
-   The purpose, scope and goals of the project
-   The author / current owners
-   Clear up to date instructions on:
    -   Setup and installation
    -   Running your app (if applicable)
    -   Basic usage (API, Endpoints, etc)
    -   List of bundled scripts, such as:
        -   How to run tests
        -   How to run linting
        -   etc

The following is a basic example
```markdown
# Project Title

## Why (Purpose)

> e.g. RESTful API to centralize reverse phone number lookup

## What (Technology)

### Requirements

> (node, express.js, psql, etc ...)

### Frameworks/Core 3rd Party Dependencies
> (react, redux, aws-sdk, etc)

### API Docs (if any)

> endpoints, response codes, etc ... 
> this can be broken down into a separate folder `/docs` or links to a swagger file / view

## How (Instructions)

### Installation
> setup and installation instructions

### Tests
> How do you run tests. These should pass after a developer has performed setup/installation properly

### Build/Run
> How do you build (if required) and run. Runtime flags, etc

### Scripts/Tools
> What other scripts are used for development? ie. linting, lint-fix, snyk, etc

## Who

> Outcome team name (link to Confluence Team Page)
> Project leads/maintainers (who somebody should ask if they want to get involved, are going to be making a PR, etc)
```


### Git Hooks 
 Git hooks should not exist as a replacement for good practices, education or mentorship. 
 
 These are the guidelines for git-hooks:
-   **commit-msg: standard** 
    -   standardize commit messages
-   **pre-push: standard**
    -   run linting and in-process tests before publishing to master branch
-   **all others: non-standard** 
    -   unless used to meet special project requirements (talk to your lead)
 
## References

-   [How to use Git Hooks][git-hook-guide]
-   [Contribution Model](contribution-model.md)

[git-hook-guide]: https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks "How to use Git Hooks"
