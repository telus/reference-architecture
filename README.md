<h1>Reference Architecture Wiki <img align="right" height="50" src="logo.png"/></h1>

> **Note**: This is a work in progress, you are welcome to contribute and suggest changes, please follow the [contribution guidelines](.github/CONTRIBUTING.md)

## Why

For new and existing team members, a single place where all the technical knowledge and platform specifications can be documented, tracked and debated.

## What

The following sections and placeholder articles are the suggested starting point, more to be added, and updated throughout the drafting period.

### Design 

_TBD_

### Development

#### Concepts & Architecture

- [Versioning](development/versioning.md)
  - [Changelog](development/github-releases.md)
  - [Releases](development/github-releases.md)
- [Isomorphic Design](development/isomorphic.md)
- [BFF](development/bff.md) _(Backend-for-frontend)_
- [URI Templates & Structure](development/uri-structure.md)

#### Languages & Frameworks

- [SCSS](development/css.md)
  - [SCSS](development/scss.md)

- [JavaScript](development/javascript.md)
  - [Transpiling](development/transpiling.md)
    - [ES6 / ES2015](development/transpiling/es2015.md)
    - [ES2016](development/transpiling/es2016.md)
    - [ES2017](development/transpiling/es2016.md)
  - [React](development/react.md)
  - [Node.js](development/node.md)

##### Tooling & Libraries

- [NPM](development/npm.md)
- [Yarn](development/yarn.md)
- [Webpack](development/webpack.md)
- [Enzyme](development/enzyme.md)
- [Jest](development/jest.md)

#### Syntax & Style

- [ESLint](development/eslint.md)
- [stylelint](development/stylelint.md)

### API Platform

- [Overview](api/README.md)
- [RESTful Design](api/restful.md)
- [Authentication Proxy](api/proxy.md)
- [Documentation Format](api/documentation.md)

### Testing Practice

_TBD_

### Delivery

_TBD_

### Analytics

_TBD_

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
