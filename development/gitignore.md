# Gitignore

## Why

We don't want to commit some things

## What

Generally speaking, we don't want to commit any IDE metadata or operating system artifacts. Also we need to ignore installed 3rd party dependencies, and any generated data (e.g. unit test reports, code coverage, etc).

Most importantly, we don't want to commit any secrets!

## How

IDE metadata:

```plain
.idea   // intellij
*.iml   // intellij
.vscode // visual studio
```

OS artifacts:

```plain
*.swp     // vim
.DS_Store // mac os x
```

3rd party dependencies:

```plain
node_modules // nodejs
vendor       // php/ruby
.gradle      // java
```

Generated data:

```plain
dist          // compiled application
coverage      // code coverage report
npm-debug.log // npm error output
```

Secrets

```plain
.npmrc  // node read token
certs   // certificates
secrets // general secrets
```

## Who

Everyone!
