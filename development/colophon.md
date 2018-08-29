# Colophon

## Why

It's very often useful to know who the owner of a repository is and who to contact with questions. There is lots of other useful metadata about a project that someone may want to know such as:
- where documentation can be found,
- which project is serving up a URL on the TELUS website,
- which environments exist for that projects and how to access them,
- where the project management happens,
- and start and end dates (if applicable).

The `README` file is a typical place where this information can be found. This works for humans who want to read it, but there are no rules about the format of the data or what should be present. Having a standardized, machine-readable way to store this data in GitHub can help to keep information consistent across all of our projects and allow for accurate statistics to be collected.

## What

Use a `colophon.yml` file in your repository that follows the [Colophon schema](https://github.com/ahmadnassri/colophon).

## How

A simple `colophon.yml` (or use JSON if you prefer) looks like the following:

```yaml
version: 1.0.0

id: telus-widgets

about:
  title: TELUS Widgets
  description: Best widget maker in Canada!

contacts:
  humans: Widget Maker <widgets@telus.com>

environments:
  - type: production
    title: URL
    uri: "https://www.telus.com/widgets"
  - type: test
    title: URL
    uri: "https://www.wctest.telus.com/widgets"
  - type: git
    title: Source Code
    uri: https://github.com/telus/widgets

references:
  - title: Documentation
    uri: https://github.com/telus/widgets/wiki
```

The `id` can be used to link this GitHub repo to the project via other mediums, such as by placing the `id` in an HTML `meta` tag, or the HTTP header response of an API.

See the [spec](https://github.com/ahmadnassri/colophon/tree/master/spec/1.0.0) for other fields that may be appropriate for your project.

## Who

Everyone!

## References

- [Colophon schema](https://github.com/ahmadnassri/colophon)
