# Native Mobile Development

Tools and practices for native development.

## Why

In order to deliver the best experience and performance to our customers' chosen platform we develop native mobile applications. These practices aren't covered by our Reference Architecture properly as the platforms have specific needs
and some different tools. Those different practices and tools will surface here.

## What

### iOS

- [Xcode](https://developer.apple.com/xcode/) IDE on Mac OS X
- [Quick](https://github.com/Quick/Quick) and
  [Nimble](https://github.com/Quick/Nimble) for unit tests
- Code linting with [SwiftLint](https://github.com/realm/SwiftLint)
- [Cocoapods](https://cocoapods.org/) for package dependency management
- Builds with Travis CI using [Fastlane](https://fastlane.tools/)
- Distributing builds to QA with [Hockey](https://hockeyapp.net/)

### Android

- IDE: [Android Studio](https://developer.android.com/studio/) Windows, Linux or Mac OS X
- Build tools: [Gradle](https://gradle.org/), Android uses gradle task to compile, assemble and bundle applications
- Continuous Integration: Travis CI (being deprecated in favor of CircleCI), we also use [Fastlane](https://fastlane.tools/) to provide different pipelines and flavours.
- Continuous Delivery: We are using [HockeyApp](https://hockeyapp.net/) but it's being deprecated in favour
of using [Play Store](https://play.google.com) release tracks.
- [JUnit4](https://junit.org/junit4/) for unit tests (being deprecated in favour of JUnit5)
- [JUnit5](https://junit.org/junit5/) newest version of JUnit test framework
- [Espresso](https://developer.android.com/training/testing/espresso/) for UI testing