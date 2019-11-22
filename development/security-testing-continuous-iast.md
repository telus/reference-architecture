# Continuous IAST - Interactive Application Security Testing 

Continuous Interactive Application Security testing within early phases of Software Development Life Cycle.

## Why

The web is a threatful place and our website faces attacks constantly. As developers, we should be one step ahead of attackers and to do so, we can greatly benefit from integrated IAST tooling. These tools can provide a holistic approach to managing application security risks and addressing potential weaknesses at the right time. In doing so we can proactively combat problems, provide feedback early in development, and avoid production release delays.

Continuous IAST integration helps software projects to satisfy following controls being formally assessed in Security Reviews:
- **Secure Coding**
- **Security Testing**
- **VA Scanning**

In the context of Software Development Life Cycle and Application Security Risk Management, both software code and  libraries/dependencies need to be tested/reviewed continuously to detect, avoid, remediate & manage security weaknesses and vulnerabilities.

**IAST** combines following two testing methods to detect Security Issues:

- **Static Application Security Tests:** Using methods to assess the security of software by looking in to code and syntaxes line by line (whitebox review - static code).
- **Dynamic Application Security Tests:** Using methods to assess the security of software by looking in to how software behaves when used (blackbox testing - dynamic behaviours).

IAST results need to be tracked with measurable metrics. Security **weaknesses** and **vulnerabilities** introduced during software development, by the developer or a library, can be measured with the following metrics:

  - **CWEs, Common weakness enumeration:** A common language used as a measuring stick by software security tools, and as a baseline to identify weaknesses, mitigations, and prevention efforts. CWEs can be listed within 3 Perspectives of Research, Development and Architectural Concepts. Additionally there exists a TOP 25 Weakness list of Most Dangerous Software Errors ending up to Security issues._-- Published by MITRE.org_
  - **CVEs, Common vulnerabilities and exposures** A reference-method for publicly known information-security vulnerabilities and exposures. _-- Published by MITRE.org_
  - **OWASP TOP 10 Web App Security Risks:** Top 10 most critical web application security risks prioritized based on prevalence, in combination with consensus estimates of exploitability, detectability, and impact of threats and vulnerabilities. _-- Published by OWASP.org_

A CVE is comprised of one or more CWE which can be associated with one or more OWASP TOP 10 Web Risks. Vulnerability Databases are built based on both CVEs and CWE. Example of Vulnerability Databases:

  - <https://www.cvedetails.com/vulnerability-list/vendor_id-12113/Nodejs.html>
  - <https://snyk.io/vuln?type=npm>
  - <https://vuldb.com/>

## When 

As early as possible in Development Life Cycle. 

The time when coding starts as well as QA(Quality Assurance) tests run, hence any code change/build triggers IAST along side other Test Suites. It provides detailed security reports to developers and project stakeholders. Also the same reports can be provided to Security Reviewers within the review process.

## Where

  - CI/CD Pipelines
  - Local environment

## What

Integrate continuous IAST into your project's CI/CD pipeline.

IAST should be integrated with your Test Suites to check for possible software weaknesses and vulnerabilities, while project lives in development and QA environments. This enables developers and other project stakeholders to find weaknesses and vulnerabilities early in the development phase and throughout, increasing the result accuracy and reducing the urgency to perform late time consuming dynamic security scans in the last minutes before promoting a Project to Production Environments.

### Advantages of IAST in CI/CD pipelines
  - Projects can be automatically registered and equipped with security testing tools with minimal effort.
  - Self-serve model of security testing and automatically generated reports help with the identification and management of risks early in the development process.
  - Security tests can be run at the same time as other QA tests.
  - Provides visibility on code coverage and paths exercised in Code and Libraries covered in IAST.
  - Drastically decreases the cost to fix, improves agility and [Security/Risk postures](https://csrc.nist.gov/glossary/term/security-posture) of our end software/products echosystem.

Hence, software projects will be scanned with every code change through IAST. A report will be generated based on developed code, included libraries and percentage of exercised paths. The report will cover details on CVE,CWE & OWASP findings with detailed guidlines on how to fix and remediate. Each finding can be automatically assigned with a ticket to cover and track further interactions. 

## How

  - IAST Tools in TELUS Digital
  - QA Tests with the Ability to exercise all project paths to maximize IAST code coverage.
  - Continuous Integration & Continuous Delivery in Pipelines 

We host a private npm package that includes the Node.js agent for easy installation. Our [Starter Kits](starter-kits.md) are shipped with the IAST tool enabled by default. An agent runs on our Node.js applications, which instruments our code with IAST integrations and orchestrates the communicates with Report Dashboards.

Setup documentation can be found [on the security wiki](https://github.com/telus/security).

When your application is running locally or deployed within pipelines in test and pre-production environments, you can track your host live in the IAST Dashboard. Issues can be converted into JIRA tickets, and notifications on findings can be sent to slack.

IAST Tools will identify weaknesses and vulnerabilities when E2E scripts or QA testing have commenced. 

## Who

@developer
@productowner
@delivery
@security

## References
  - [OWASP TOP 10 Web App Security Risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
  - [CWE & OWASP TOP 10](https://cwe.mitre.org/data/definitions/1026.html)
  - [CWE MITRE-Top 25](https://cwe.mitre.org/top25/archive/2019/2019_cwe_top25.html)
  - [CVE MITRE](https://cve.mitre.org/)
  - [TELUS Digital Security - IAST Tool](https://github.com/telus/security)
