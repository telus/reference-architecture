# Gitignore

## Why

We don't want to commit some things

## What

Generally speaking, we don't want to commit any IDE metadata or operating system artifacts. Also we need to ignore installed 3rd party dependencies, and any generated data (e.g. unit test reports, code coverage, etc).

Most importantly, we don't want to commit any secrets!

## How

IDE metadata:
```
.idea   // intellij
*.iml   // intellij
.vscode // visual studio
```

OS artifacts:
```
*.swp     // vim
.DS_Store // mac os x
```

3rd party dependencies:
```
node_modules // nodejs
vendor       // php/ruby
.gradle      // java
```

Generated data:
```
dist          // compiled application
coverage      // code coverage report
npm-debug.log // npm error output
```

Secrets
```
.npmrc  // node read token
certs   // certificates
secrets // general secrets
```

## Who

Everyone!
