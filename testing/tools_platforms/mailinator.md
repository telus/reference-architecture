# Mailinator

## Why

- In some customer experiences, My TELUS is sending some emails to the customers for some interaction, e.g. 2-factor authentication in the registration process or email address validation.
- In order to complete a full E2E automation test, we need a solution to let our script getting access easily to the inbox, grab the content of the email’s body, fetch it to retrieve the dynamic value (it could be a passcode or a URL) and then complete the flow as a customer would do. 
- Using a cloud service instead of in-house dev to be more cost-effective from a maintainence and scalability point of view

## What

Mailinator is a disposable email service that lets you use any email address you can think up under the domain @mailinator.com, and then pick up the mail at the Mailinator site.

## How

We have a month to month contract that offers access to a secured (by token) access to their API.
Hostname used by the old Ruby stack is `@binkmail.com`.

## Who

@amel @qa
Slack: #g-automation

## References

- [Mailinator](https://www.mailinator.com)
