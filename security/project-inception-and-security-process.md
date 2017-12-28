# Project Inception and Security Process

## Why

Project stakeholders are unaware of the security process that a project is required to undergo to be able to launch. This results in negative outcomes suchs as confusion, unexpected costs, failure to meet TELUS security standards and/or delays to launch.

## What

A high-level overview of TELUS security process that a project team is required to undergo from inception to launch.

## How

### Security Assessment Process:

The standard engagement of the TELUS security and privacy teams for a digital initiative is done through internal processes that must be coordinated by a TELUS prime. TELUS prime is typically a PO or tech lead who must also be a TELUS employee (not vendor), as he/she would require access to corporate network to access, submit and make changes to required online forms.

- Privacy Impact Assessment (PIA): Complete the form found at go/PIA. 
  - Allow 2 weeks to have a PIA prime assigned to work with you.
  - PIA prime will review your submission and will advise if any revisions or further review is required.
  - Be aware that depending on your project, requested changes may require additional time/effort to complete, so plan accordingly.
  - Once privacy requirements have been satisfied, you will receive a PIA approval.
  - PIA must be approved prior to launch.
 
- Security Architecture  Engagement Request (SAER): Complete form found at go/SAER
  - Allow 2 weeks to have SAER prime assigned to work with you.
  - SAER prime will review your submission and will advise if any revisions or further review is required.
  - Be aware that depending on your project, requested changes may require additional time/effort to complete, so plan accordingly.
  - Once SAER requirements have been satisfied, you will receive a SAER approval.
  - SAER must be approved prior to launch.

- Application requires undergo [Application Security Assessment](app-sec-testing.md):
  - For TELUS digital initiatives - contact security consultant assigned for your outcome team to conduct security assessment.
    - TELUS digital security prime will work with you to conduct appropriate security test.
    - Any Critical/High severity findings must be remediated prior to launch and Med/Low severity findings must be prioritized for remediation post launch.
  - For initiatives outside of TELUS Digital, complete Security Analysis Engagement (SAE) form found at GO/SAE, and select “Security Analysis Engagement” link.
    - Allow 2 weeks to have SAE prime assigned to work with you.
    - SAE prime will review your submission and will conduct appropriate security test. Depending on nature of your project this maybe a vulnerability scan or a full penetration test.
    - Any Critical/High severity findings must be remediated prior to launch and Med/Low severity findings must be prioritized for remediation post launch.

### Requesting Digital Certificates:
To request SSL certificate, the TELUS prime should email dldigitalsecurity@telus.com who will create CSR request on behalf of the application owner. The cost of a new cert is $150 USD. If the upper level domain does not exist in Symantec then there is a one time $250 USD charge to get it created (additional $150 charge per server where cert is installed).
Please include the following in your email to dldigitalsecurity@telus.com:
  - domain
  - manager name
  - cost center

### DNS requests:

To request a new TELUS subdomain (or modify an existing one), a TELUS prime should follow the following internal process:
- Step 1
Email CIDC.change@telus.com with the request, it can simply state the following:
“We would like to add/remove DNS record for xyz.telus.com”
- Step 2
You will receive a response from CIDC.change@telus.com which will include the incident number (IN#).
- Step 3
Visit GO/SensitiveDNSchange and complete the form found within the site. Add the IN# received from the CIDC team in the appropriate field.

## Who

@everyone
