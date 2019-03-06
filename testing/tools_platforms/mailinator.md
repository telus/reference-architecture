# Mailinator

## Why

- In some customer experiences, My TELUS is sending some emails to the customers for some interaction, e.g. 2-factor authentication in the registration process or email address validation.
- In order to complete a full E2E automation test, we need a solution to let our script getting access easily to the inbox, grab the content of the email’s body, fetch it to retrieve the dynamic value (it could be a passcode or a URL) and then complete the flow as a customer would do. 
- Using a cloud service instead of an in-house solution to be more cost-effective from a maintenance and scalability point of view

## What

Mailinator is a disposable email service that lets you use any email address you can think of under the domain @mailinator.com, and then pick up the mail at the Mailinator site.

## How

Mailinator is offering a clear [documentation](https://www.mailinator.com/apidocs.jsp).

Get the token from Vault with Shippy:
```bash
shippy get secret mailinator --common
```

Example of hostname that can be used: `@binkmail.com`.
Mailinator allows alternate domain and explains why in their [FAQ](https://www.mailinator.com/faq.jsp).

## Who

@amel @qa
Slack: #g-automation

## References

- [Mailinator](https://www.mailinator.com)
