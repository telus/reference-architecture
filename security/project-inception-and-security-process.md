# Project Inception and Security Process

## Why

Project stakeholders are unaware of the security process that a project is required to undergo to be able to launch. This results in negative outcomes suchs as confusion, unexpected costs, failure to meet TELUS security standards and/or delays to launch.

## What

A high-level overview of TELUS security process that a project team is required to undergo from inception to launch.

## How

### Security Assessment Process

The standard engagement of the TELUS security and privacy teams for a digital initiative is done through internal processes that must be coordinated by a TELUS prime. TELUS prime is typically a PO or tech lead who must also be a TELUS employee (not vendor), as he/she would require access to corporate network to access, submit and make changes to required online forms.

- Environment security configuration:
  - TELUS digital initiatives - staging and production environments must be configured to route through staging and production inbound proxy respectively as per [instructions](https://github.com/telusdigital/reference-architecture/blob/master/delivery/inbound-proxies.md).
  - Vendor hosted/whitelabel TELUS solutions - Ensure that your development, staging or demo environments are not accessible over the internet. Staging environments must be ip-whitelisted to only a limited number of IP addresses that require access or secured with a server-level basic authentication. Production environment must follow [domain management](https://github.com/telusdigital/reference-architecture/blob/master/security/domain-management.md) process.

- Privacy Impact Assessment (PIA): Complete the form found at go/PIA. 
  - Allow 2 weeks to have a PIA prime assigned to work with you.
  - PIA prime will review your submission and will advise if any revisions or further review is required.
  - Be aware that depending on your project, requested changes may require additional time/effort to complete, so plan accordingly.
  - Once privacy requirements have been satisfied, you will receive a PIA approval.
  - PIA must be approved prior to launch.

- Secure By Design Review (SBDR): Complete form found at go/SBDR
  - Allow 2 weeks to have SBDR prime assigned to work with you.
  - SBDR prime will review your submission and will advise if any revisions or further review is required.
  - Be aware that depending on your project, requested changes may require additional time/effort to complete, so plan accordingly.
  - Once SBDR requirements have been satisfied, you will receive a SBDR approval.
  - SBDR must be approved prior to launch.

- Application requires undergo [Application Security Assessment](app-sec-testing.md):
  - For TELUS digital initiatives - contact security consultant assigned for your outcome team to conduct security assessment.
    - TELUS digital security prime will work with you to conduct appropriate security test.
  - For Vendor solutions leveraging RA - contact your DRB team to have security prime assigned to work with you to conduct appropriate security test.
  - For Vendor hosted/whitelabel TELUS solutions, complete Security Analysis Engagement (SAE) form found at GO/SAE, and select “Security Analysis Engagement” link.
    - Allow 2 weeks to have SAE prime assigned to work with you.
    - SAE prime will review your submission and will conduct appropriate security test. Depending on nature of your project this maybe a vulnerability scan or a full penetration test.
    
Any Critical/High severity findings must be remediated prior to launch and Med/Low severity findings may be prioritized for remediation post launch.

## Who

@everyone
