# Web Application Firewall (WAF) Standard

## Why

To deliver on TELUS’ commitment to provide secure, reliable products and services, TELUS Security requires all TELUS internet-facing web applications and portals to use a Web Application Firewall (WAF) to help manage risks and improve security and resiliency.

## What

A WAF is used to protect applications from the common application attacks. 

## How

All TELUS internet-facing applications must have a WAF implemented unless the application meets one of the following requirements:
- Approval from Digital Review Board (DRB) that a WAF is not required
- A Threat Risk Assessment is completed

### Scope:
- All TELUS internet-facing websites and portals

### Out-of-Scope:
- Internally facing applications (i.e. hosted on the TEN)
- Anything hosted on a context path under www.telus.com/[example]

### Requirements:
A web application should have a WAF if it meets any one of the following requirements:
- Contains a vulnerability that cannot be remediated within the CSO vulnerability remediation timeline - refer to Vulerability Scanning and Patching Standards or consult your assigned Security Reviewer
- Is a high priority application - see below for what constitutes high priority

### High Priority Applications:
An application constitutes high priority if it meets one of the following criteria:
- Processes, transmits or stores sensitive information such as [personal information](https://github.com/telus/reference-architecture/blob/master/security/pi.md), health data, credit card data etc.
- Users perform sensitive tasks such as uploading health information, dealing with customer information 
- Has a login portal and handles user credentials
- Requires 100% uptime, i.e. a Denial of Service would be a huge impact
- A form page without bot-protection and/or rate-limiting controls such as CAPTCHA

## Who

@everyone
