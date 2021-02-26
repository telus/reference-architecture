# Domain Management

## Why

In order to maintain customer trust and ensure a consistent experience when visiting TELUS digital properties it is important that the domains we use represent our brand in a positive way. We must also ensure that our domains have centralized security and operational controls, are highly rated by search engines, easy for customers to communicate to others, and easy to remember themselves.

## What

### Digital Platform Applications

TELUS digital properties that are on Digital Platform (RA) are to be routed through [inbound proxy](https://github.com/telus/reference-architecture/blob/master/delivery/inbound-proxies.md) in order to be hosted as a context path under www.telus.com domain - example: www.telus.com/app

### Whitelabel/Vendor hosted TELUS solutions

Whitelabel/Vendor hosted TELUS solutions (not on RA/Digital Platform) must follow our standard subdomain substructure. We do not support the use of unique domains (e.g. `telusrocks.com`) and no domains should ever be registered by third party and digital partner groups.

## How

Digital Platform Applications must be configured to be routed through the [inbound proxy](https://github.com/telus/reference-architecture/blob/master/delivery/inbound-proxies.md)<br>

All other applications, including Whitelabel/Vendor hosted TELUS solutions:

### 1) Follow standard subdomain substructure

When requesting a TELUS subdomain, keep in mind the following:

- Subdomains must have the following format: `x.telus.com`, e.g. `community.telus.com`
- The subdomain should represent the product or campaign name as clearly as possible
- The product/campaign name as part of the subdomain should be no more than **12** characters long
- Abbreviations and hyphens SHOULD be avoided
- The use of the brand name in the first part of the subdomain is not permitted (e.g. `teluscampaign.telus.com`)
- All product names must be approved through proper Brand/Marketing channels before a subdomain is set up
- The same structure requirements apply for other TELUS-owned brands (e.g. `koodo.com`, `publicmobile.ca`, `telushealth.com`, `telusinternational.com`, etc.)
- Some exceptional cases:
  - `Telus.net` - should be capitalized and limited to existing services already using it such as e-mail, TV and HSIA 
  - `Telusmobility.com` - should be capitalized and limited to existing services already using it. Storefronts have already migrated over to `telus.com`     	
  - `Mobility.ca` - domain to be used when brand agnostic domain is needed, such as on MMS client that can be installed on TELUS or Koodo devices.

### 2) Requesting Digital Certificates


To request a TLS certificate, the TELUS prime should refer to go/clm Certificate Lifecycle Management.

Exceptions: if the application is behind WAF, IBP or is a (dot)digital app please email <mailto:dldigitalsecurity@telus.com> who will help you through the process.
The cost of a new cert is $150 USD. If the upper level domain does not exist in DigiCert then there is a one time $250 USD charge to get it created.

Please include the following in your email:
- domain name
- manager name
- cost center
- team distribution list

### 3) DNS requests

To request a new TELUS subdomain (or modify an existing one), a TELUS prime should follow the following internal process:
1. Email <mailto:CIDC.change@telus.com> with the request, it can simply state the following: `We would like to add/remove DNS record for xyz.telus.com`
2. You will receive a response from <mailto:CIDC.change@telus.com> which will include the incident number (IN#).
3. Visit [go/SensitiveDNSchange](https://go.telus.com/SensitiveDNSchange) and complete the form found within the site. Add the IN# received from the CIDC team in the appropriate field.

## Who

- `@delivery`
- `@security`
- `@seo`
