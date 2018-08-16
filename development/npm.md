# Publishing NPM Packages

## Why

We need to be able to share code in different applications and version the
shared code. Distributing these them as NPM packages is the approach we have
agreed on.

### Private Packages

We have some shared libraries that contain TELUS intellectual property or
aren't ready to be shared publicly.

### Shared Accounts

In order to facilitate shared access to private NPM packages that we share
internally we use shared accounts and access tokens. Developers can find the
shared `.npmrc` token in Vault or using Shippy:

    vault read secret/common/npmrc-dev
    shippy get secret npmrc-dev --common --field=npmrc

This lets us share access using a single shared secret (the token) rather than
each developer having to maintain their own NPM account and teams to manage
permissions of numerous accounts.

Please be warned that this token is shared. Many users will be authenticating
with this single token. *Do not* run the `npm logout` command, it will
deactivate the token for everyone. This can only be fixed by generating a new
token and having all users and teams update their development environments and
pipelines.

## What

A package is just a directory with one or more files in it, that also has a
file called "package.json" with some metadata about this package. A typical
application, such as a website, will depend on dozens or hundreds of packages.
These packages are often small. The general idea is that you create a small
building block which solves one problem and solves it well. This makes it
possible for you to compose larger, custom solutions out of these small, shared
building blocks.

### Accounts

We currently have three shared accounts for specific purposes:

- (telusdigital-dev)[https://www.npmjs.com/~telusdigital-dev] for maintaining
  shared, read-only developer token.
- (telusdigital-admin)[https://www.npmjs.com/~telusdigital-admin] for owning
  the organization and publishing packages.
- (telusmobility)[https://www.npmjs.com/~telusmobility] for publishing some
  mobility modules.

## How
1. Create the directory with `package.json` and run `yarn install` to install
   packages and create a `yarn.lock` file, which you should commit to Git.
2. If you are transpiling code, transpile into a `lib/` folder.
3. Add .gitignore to ignore the `lib/` folder.
4. Add empty `.npmignore` so that lib can be part of the package distribution.
5. Commit and push to GitHub.
6. Publish the package with following commands:
  - `npm version (major | minor | patch)`
  - `git push && git push --tags`
  - `npm publish`
7. If your package needs to be private and internal to TELUS Digital, reach out
   to one of the
   (Architects)[https://github.com/orgs/telus/teams/digital-architecture/members]
   for assistance in getting the package published in the `@telusdigital`
   organization and with read-only permissions assigned to the
   `telusdigital-dev` account token.

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

## Who

Architects have ownership of the credentials for publishing private modules and
managing the shared NPM account.
