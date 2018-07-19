# Publishing NPM Packages

## Why
We need to be able to share code in different applications and version the shared code. Distributing these them as NPM packages is the approach we agreed on.

## What
A package is just a directory with one or more files in it, that also has a file called "package.json" with some metadata about this package. A typical application, such as a website, will depend on dozens or hundreds of packages. These packages are often small. The general idea is that you create a small building block which solves one problem and solves it well. This makes it possible for you to compose larger, custom solutions out of these small, shared building blocks.

## How
1. Create the directory with `package.json` and run `yarn install` to install packages and create a `yarn.lock` file, which you should commit to Git.
2. If you are transpiling code, transpile into a `lib/` folder.
3. Add .gitignore to ignore the `lib/` folder.
4. Add empty `.npmignore` so that lib can be part of the package distribution.
5. Commit and push to GitHub.
6. Publish the package with following commands:
  - `npm version (major | minor | patch)`
  - `git push && git push --tags`
  - `npm publish`
7. If you package needs to be private and internal to TELUS Digital, reach out to one of the (Architects)[https://github.com/orgs/telus/teams/digital-architecture/members] for assistance in getting the package published in the @telusdigital organization and with read-only permissions assigned to the `telusdigital-dev` account tokens.


### Recommended file structure
```bash
myPackage/
|-- src/
|-- lib/
|-- .eslintrc
|-- .gitignore
|-- .npmignore
|-- .babelrc
|-- package.json
|-- README.md
|-- yarn.lock
```
