![Reference Architecture Wiki Logo](logo.png "Reference Architecture Wiki")
---
> This is a collaborative effort to document our digital standards, tooling and process, you are welcome to contribute and suggest changes, please follow the [contribution guidelines](.github/CONTRIBUTING.md)

## Why

For new and existing team members & partners, a single place where all the technical knowledge and platform specifications can be documented, tracked and debated.

## What

### Table of Content

- [Development](development/)
- [Process](process/)
- [API Platform](api/)
- [Testing](testing/)
- [Delivery](delivery/)
- [Performance](performance/)

## How

A *thin* and simple format documentation for technical resources, tools, platforms and decisions. Members can quickly and easily get context on "Why, What & How" for every part of our platform

A Github repository, with Markdown articles as content, (using the repository itself, rather than the "Github Wikis" Feature, this ensures:

- version tracking, and usage of github git gui features (blame, history, branches, diff, etc ...)
- publish into a static website using Github Pages
- leverage branch locking and other Github features only available in content repos

The format should loosely follow the following template:

```
# Subject Title

## Why

provide background information, problem description, challanges and/or goals

## What

The subject details, describe the tool / technology in detail, prefer linking to external sources if a 3rd party

## How

The **TELUS Digital context** of how we're using the described subject, provide **deep details** here, including usage manual, API documentation, operational guidelines, etc ...

## Who

`@` mention **teams** who are stakeholders or owners of described subject (see Github Members Groups)

## References

- [[link]] to internal references, and other wikis
- [[link]] to external references, documentation, product manuals and documentations
```
