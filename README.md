# ![Reference Architecture](assets/logo.svg "Reference Architecture")

## Why

> _Why does this exist?_

This wiki is the source of truth for all **technical knowledge**, **software specifications**, **standards** and **architecture evolution** for TELUS.

The goal of the document is to **track** and **discuss** software standards, tooling and practices within TELUS. You are welcome to contribute and suggest changes. Please follow the [contribution guidelines](.github/CONTRIBUTING.md) and keep in mind that this repository is [**open source**](#open-source).

## Who

> _Who is this for?_

- **Existing Team Members** reference and contribute to this document.
- **Perspective Team Members** learn about TELUS software development standards and practices.
- **TELUS partners** familiarize with TELUS software standards and practices prior to project delivery commitments.

## What

> _What is the structure?_

This is a **public** and [**open source**](#open-source) repository. Articles are written in Markdown on topics in the following categories:

- [Development](development/README.md)
- [Process](process/README.md)
- [API Platform](api/README.md)
- [Testing](testing/README.md)
- [Delivery](delivery/README.md)
- [Security](security/README.md)
- [Performance](performance/README.md)
- [Analytics](analytics/README.md)
- [Hardware & Tooling](equipment/README.md)

Documentation is meant to be _thin_ and _simple_. Members should be able to quickly and easily understand the whys, whats and hows of any part of our software standards.
## How

> _How to take part?_

### Embody our [Principles][digital-principles]

- Focus on Customer First
- Value data over opinions
- Deliver outcomes over outputs
- Take risks and be lean
- Build for quality and reuse
- Be an owner
- Attract and develop leaders
- Embrace inclusivity
- Strengthen communities

### Open Source

Because we love our customers and we love our technology, we are evolving it, in full transparency!

<!--lint disable no-emphasis-as-heading-->
**We do all of this in public to truly embrace our _customer first_ principles**

In order to achieve this, we ensure no sensitive content is included, such as:

- security & privacy policy violating content
- content considered competitive intelligence
- keys, tokens or credentials

### Process & Contribution

To ensure open collaboration and support for wiki contributions, a few avenues are made available:

- [**Technology Forum**][technology-forum]  
  The Technology Forum is the official discussion board for conversations around
  technology solutions, ideas, issue escalations, questions, knowledge sharing,
  and Reference Architecture evolution.

  > Since Reference Architecture is open source, we separated Technology Forum into
  > its own private repository for deep technical discussions and confidential information.

- **Open Contribution**  
  Use GitHub to create pull-requests, start discussions, and contribute to active issues.
  Your contributions should also be addressed in _The Technology Forum_ in order to be considered for adoption.

#### Local development setup

If you want to make sure your changes will pass our CircleCI steps, you might want to run things locally:

```bash
npm run lint
```

In order to setup everything needed to run all of the checks locally, please run the script below. This will install locally all of the dependencies needed and mirror the CI setup:

```bash
npm run setup-local
```

### Format

All topics MUST adhere to the format outlined in [this template](.template.md)

### GitHub

Using the GitHub repository itself, rather than the "GitHub Wikis" feature, or other "Wiki" software ensures:

- version tracking, and usage of GitHub GUI features _(blame, history, branches, diff, etc ...)_
- ability to publish into a static website using GitHub Pages
- leverage branch locking, testing automation and other GitHub features only available in repos

### Conformance

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14][bcp14] [[RFC2119][rfc2119]] [[RFC8174][rfc8174]] when, and only when, they appear in all capitals, as shown here.

[digital-principles]: https://www.telus.com/en/digital/about-us/our-principles
[technology-forum]: https://github.com/telus/technology-forum
[bcp14]: https://tools.ietf.org/html/bcp14
[rfc2119]: https://tools.ietf.org/html/rfc2119
[rfc8174]: https://tools.ietf.org/html/rfc8174
