# Personal Information (PI) Security

## Why

It's important to TELUS that a TELUS customer's Personal Identifiers are protected from TELUS users and 3rd party platform providers, so that we can further build on our brand's trust and reliability. We are committed to respecting our [customers' privacy](https://www.telus.com/en/bc/support/privacy-policy) and safeguarding their information. In a time where the threat to our industry continues to increase in various forms of fraudulent behaviour and cybercrime, the emphasis on a customer's privacy and security also increases.

For more clarity, for any development work that TELUS customers' Personal Identifiers are accessed, developers need to block these personal info via snippets in TELUS pages.

## What

Personal Information is any and all information about an identifiable individual. Personal information includes publicly available information, which can be found in a number of ways such as through social media sites and telephone directories.

Sensitive personal information requires a higher degree of responsible care and safeguarding. In Canada, any personal information can be considered sensitive based on the context. In today's technology driven world, the information that can be classified as personal information is growing and evolving at a rapid pace.

The goal is to mitigate business risks and provide customer solutions that take every opportunity to protect:

- Customer information that is entrusted to us
- The TELUS brand and customer trust

## How

To protect customer privacy the TELUS Privacy team requires all these Personal Identifiers entered by TELUS customers to be blocked to TELUS employees and vendors, in all TELUS GitHub repositories at all times. Personal Identifiers, as entered by TELUS customers, should only be visible to TELUS customer, and no one else.

To mask PI information use a masking snippet, either provided by 3rd-party provider, or create a masking class internally at Telus.

### TELUS PI-blocking Requirements

- Customer First Name
- Customer Last Name
- Email Address
- Gender (title Mr., Ms, etc)
- Home Phone number
- Mobile Phone Number
- Payment Card # (Credit Card, Debit Card)
- Driver's License
- BAN
- Delinquency status
- Balance Amount
- Transaction History
- Mailing address
- Billing Address
- Password
- PIN
- Chat session/transcript
- Usage details (numbers called/texted, how much usage)
- Preauth banking
- Security Question in Account profile section
- Security Answer in Account profile section
- Number of users in the Account

### Safeguarding PI Data

Special care needs to be given to handling of PI data.

- Collect PI data only on "as needed" basis.
- Ensure appropriate access controls are in place for PI data.
- PI data must be handled with extra precaution when sent to client:
  - masking of credit card numbers
  - must instruct browser to not cache
  - must not be passed as part of URL
  - must not be passed in a cookie
  - must not be stored in client-side database, config or log file.
- PI data must be encrypted if stored.
- PI data must be encrypted in transit.
- PI data must not be logged.
- Discard PI data when no longer required or at expiry.

## Who

@everyone
