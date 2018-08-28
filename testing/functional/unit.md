# Unit testing

## Why

When designing or implementing a feature, we want to know that we are doing it properly. Once the feature is implemented, we want to ensure that it keeps working.

## What

As part of our [Continuous Integration](../process/continuous-integration.md) practices, we are pushing for Test Driven Development, where unit tests are written BEFORE a new feature. It falls in line with the construction proverb: "measure twice, cut once".

By writing the test first:

-   Ensures the code is loosely coupled
-   Your code evolves in small steps
-   You get automated regression testing
-   You get living documentation as to how the system works
-   etc.

## How

-   Start with your test first, to ensure that the test fails
-   Implement the feature that makes the test pass
-   Avoid [fragile tests](https://www.youtube.com/watch?v=URSWYvyc42M) and tight coupling

### Code quality metrics

We use [Sonarqube][Sonarqube] for static code analysis purposes.

For details on what value it adds to reference architecture and how to have it set up for your project, check out [Sonarqube in TELUS Digital][Sonarqube in TELUS Digital]

## When

-   Writing unit tests: ideally, before you write the actual code, as we want to follow the [TDD][TDD] practice

-   Running unit tests: before each commit, and as part of the delivery pipeline

## Standards

### Style

For testing React higher order components, it is preferred to keep the presentational component and the enhancing container in separate source files, then wrap in `index.js` to export the enhanced component. This way, testing can be done separately on the presentational component, and then the higher order component, without adding in extra named exports.

ie: Given a `Card` that gets wrapped in an HoC, the directory structure should look as follows:
```
- Card/
  - __tests__/
    - Card.spec.jsx
    - EnhancedCard.spec.jsx
  - Card.jsx
  - EnhancedCard.jsx
  - index.js
```

## Who

@delivery @dev

## References

-   [Magic tricks of unit testing](https://www.youtube.com/watch?v=URSWYvyc42M) _Ruby, but excellent concepts_

[TDD]: https://en.wikipedia.org/wiki/Test-driven_development
[Sonarqube]: https://github.com/SonarSource/sonarqube
[Sonarqube in TELUS Digital]: https://github.com/telusdigital/sonarqube
