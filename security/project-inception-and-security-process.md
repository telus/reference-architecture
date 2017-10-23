# Project Inception and Security Process

## Security Assessment Process:


The standard engagement of the TELUS security and privacy teams for a digital initiative is done through internal processes that must be coordinated by a TELUS prime. PIA and SAER must be approved for project launch:

- Privacy impact assessment (PIA): Complete the form found at go/PIA
- Security Architecture  Engagement Request (SAER): Complete form found at go/SAER
- Application requires undergo a security assessment ( refer to [Application Security Assessment](app-sec-testing.md) ):
  - For TELUS Digital initiatives - contact security consultant assigned for your outcome team to conduct security assessment.
  - For initiatives outside of TELUS Digital, complete Security Analysis Engagement (SAE) form found at GO/SAE, and select “Security Analysis Engagement” link.


## Requesting Digital Certificates:
To request SSL certificate, the TELUS prime should email dldigitalsecurity@telus.com who will create CSR request on behalf of the application owner. Please include domain, manager name and cost center in the email. The cost of a new cert is $150 USD. If the upper level domain does not exist in Symantec then there is a one time $250 USD charge to get it created.
(additional $150 charge per server where cert is installed)

## DNS requests:

To request a new TELUS subdomain (or modify an existing one), a TELUS prime should follow the following process:
- Step 1
Email CIDC.change@telus.com with the request, it can simply state the following:
“We would like to add/remove DNS record for <domain>.telus.com”
- Step 2
You will receive a response from CIDC.change@telus.com which will include the incident number (IN#).
- Step 3
Visit GO/SensitiveDNSchange and complete the form found within the site. Add the IN# received from the CIDC team in the appropriate field. Mark N/A for all other optional fields.
