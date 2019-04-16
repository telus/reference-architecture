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

Use a `.colophon.yml` file in your repository that follows the [Colophon schema](https://github.com/project-colophon/schema).

## How

A simple `.colophon.yml` (or use JSON if you prefer) looks like the following:

```yaml
version: 2.0

id: my-awesome-app

about:
  title: My Awesome App
  description: app that makes everything awesome!

contacts:
  - type: department
    name: Awesome Department
    email: awesome@telus.com

  - type: developers
    name: app development
    email: app-dev@telus.com

  - type: qa
    name: app qa
    email: app-qa@telus.com

  - type: Lead Developer
    name: Alex Smith
    email: ahmad@telus.com

  - type: Lead Designer
    name: John Smith
    email: alex@telus.com

schedule:
  launch: 2018-05-24T03:35:40.968Z
  sunset: 2020-01-31T03:35:40.968Z

environments:
  - type: production
    title: URL
    description: Web Application URL
    uri: https://www.telus.com

  - type: test
    title: URL
    description: Web Application URL
    uri: http://test.telus.com

  - type: production
    title: Database
    description: Application Database
    uri: mongodb://prod.db.telus.com:27017/acme

references:
  - title: JIRA
    description: application backlog & issues
    uri: https://telusdigital.atlassian.net/projects/APP/issues/

  - title: Wiki
    description: application technical wiki
    uri: https://github.com/telus/app/wiki
```

The `id` can be used to link this GitHub repo to the project via other mediums, such as by placing the `id` in an HTML `meta` tag, or the HTTP header response of an API.

See the [spec](https://github.com/project-colophon/schema/tree/master/schema/2.0) for other fields that may be appropriate for your project.

## Who

Everyone!

## References

- [Colophon schema](https://github.com/project-colophon/schema)
