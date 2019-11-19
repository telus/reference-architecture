# Continuous IAST - Interactive Application Security Testing 

Continuous Interactive Application Security testing within early phases of Software Development Life Cycle.

## Why

The web is a threatful place. Websites face attacks constantly. We should be one step ahead of attackers across hundreds of applications, holistically by managing application security risks and scale addressing of potential weaknesses and vulnerabilities at the right time. Hence, proactiveness is needed to track and address potential issues before projects go live. This should be done in the early phases when coding starts without blocking developers or delaying production release as a result of not so perfect, late blackbox security scans.

Continuous IAST integration helps software projects to satisfy Following Controls being formally assessed in Security Reviews:
- **Secure Coding**
- **Security Testing**
- **VA Scanning**



In the context of Software Development Life Cycle and Application Security Risk Management, both software code and  libraries/dependencies need to be tested/reviewed continuously to detect, avoid, remediate & manage security weaknesses and vulnerabilities.

**IAST** combines following two testing methods to detect Security Issues:

- **SAST - Static Application Security Tests:** Using methods to assess the security of software by looking in to code and syntaxes line by line (whitebox review - static code).
- **DAST - Dynamic Application Security Tests:** Using methods to assess the security of software by looking in to how software behaves when used (blackbox testing - dynamic behaviours).


IAST results need to be tracked with measurable metrics. Following metrics are standard metrics to enumerate both **Security weaknesses** and **vulnerabilities**, introduced in both **Software code** and **Third Party Libraries/Dependencies**:

 - **CWEs, Common weakness enumeration:** A common language used as a measuring stick by software security tools, and as a baseline to identify weaknesses, mitigations, and prevention efforts. CWEs can be listed within 3 Perspectives of Research, Development and Architectural Concepts. Additionally there exists a TOP 25 Weakness list of Most Dangerous Software Errors ending up to Security issues._-- Published by MITRE.org_
 - **CVEs, Common vulnerabilities and exposures** A reference-method for publicly known information-security vulnerabilities and exposures. _-- Published by MITRE.org_
 - **OWASP TOP 10 Web App Security Risks:** Top 10 most critical web application security risks prioritized based on prevalence, in combination with consensus estimates of exploitability, detectability, and impact of threats and vulnerabilities. _-- Published by OWASP.org_
 
A CVE is comprised of one or multiple CWE which can be associated with one or more OWASP TOP 10 Web Risks. Vulnerability Databases are built based on both CVEs and CWE. Example of Vulnerability Database:
 - https://snyk.io/vuln?type=npm
 - https://vuldb.com/?

## When 

As early as possible in Development Life Cycle, the time when coding starts as well as QA(Quality Assurance) tests run, hence any code change/build trigger IAST along side Test Suites and provides detailed security reports to developers and project stakeholders. Also the same reports can be provided to Security Reviewers within the review process.

## Where

 - Pipelines, integrated in to builds and CI/CD (Continuous Integration/Continuous Delivery), synced with Code change and Builds within Test/Pre-Production Environments.
 - (Ad Hoc) Local dev environments, Developer can run locally.
 
## What

Integrate Continuous IAST along side your Test Suites within your Project's CICD Pipelines.
IAST should be integrated with your Test Suites to check for possible software weaknesses and vulnerabilities, while project lives in development and QA environments. This enables developers and other project stakeholders to find weaknesses and vulnerabilities early in the development phase and throughout, increasing the result accuracy and reducing the urgency to perform late time consuming dynamic security scans in the last minutes before promoting a Project to Production Environments.

Advantages of Continuous IAST with Automations in CI/CD pipelines:

 - Projects can be automatically registered and equipped with Security Testing Tools with minimal effort.
 - Self-served model of Security testing helps with identification of CWEs,CVEs & OWASP TOP 10 in early phases of coding practices. Such tests can be taken advantage of within local dev, testing and pre-production environments.
 - Security tests can run at the same time alongside with different types of QA tests. 
 - Provides visibility on Code Coverage while mapping Dynamic behaviours to associated Static Code and Libraries/Dependencies triggered with Security and QA tests.
 - Continuous generation of test reports provides in-advance visibility/stats on weaknesses/vulnerabilities, threats, risks and guidelines on remediations with project changes. Each issue can be automatically assigned and tracked with a Ticket.
 - Drastically decreases the cost to fix, improves agility and Application Security Risk Postures.


Ultimately Application will be scanned per changes, generate ticket and provide a report on detected:

  - _CWEs_ - Hidden Vulnerabilities,  introduced by security weaknesses in codes.
  - _CVEs_ - Components with Known/Published vulnerabilities, in Open-Source this is mainly out dated 3rd Party Libraries.
  - _OWASP TOP 10 Web_ - Web Threats & Risk Focus.  Both CWEs and CVEs can be mapped to and assessed within further contexts of Threat and Risk.

Which code be fixed and applied to the Code with further reports issued to verify 



## How

- IAST Tools in TELUS Digital
- QA Tests with the Ability to exercise full Code Coverage of your Projects.
- Continuous Integration & Continuous Delivery in Pipelines 

We host a private npm package that includes the Node.js agent for easy installation. Our [Starter Kits](starter-kits.md) are shipped with the IAST tool enabled by default. An agent runs on our Node.js applications, which instruments our code with IAST integrations and orchestrates the communicates with Report Dashboards.

Setup documentation can be found [here](https://github.com/telus/security).

When your application is running locally or deployed within pipelines in test and pre-production environments, you can track your host live in the IAST Dashboard. Issues can be converted into JIRA tickets, and notifications on findings can be sent to slack.

IAST Tools will identify weaknesses and vulnerabilities when E2E scripts or QA testing have commenced. 

## Who

@developer
@productowner
@delivery
@security

## References
- [OWASP TOP 10 Web App Security Risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
- [CWE MITRE-Top 25](https://cwe.mitre.org/data/definitions/1200.html)
- [CVE MITRE](https://cve.mitre.org/)
- [TELUS Digital Security - IAST Tool](https://github.com/telus/security)

