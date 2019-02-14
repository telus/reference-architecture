# Secrets

## Why

Our applications require secrets, e.g. login/database credentials, license keys, certificates, etc. Currently, all users in our GitHub organization get read access to ALL repositories. Formerly, our secrets were simply committed to Git. As more users join our GitHub organization, including external vendors, our exposure to malware and phishing grows, and so does the risk of exposing these secrets. With access to this information, a hacker could impersonate our production applications and gain access to users personal information. This would be **BAD NEWS**.

## What

We need to maintain confidentiality and at-rest encryption of our secrets, lest we get owned. Ideally, we can also audit who/what uses these secrets, and how, as well as rotate the keys should they become compromised.

## How

> Use secrets as a coherent and consistent secret management strategy.

**Store** all the secrets Keys/Values encrypted and **in a secured platform**. Current solution at TELUS Digital is Hashicorp Vault.

**Define roles and accesses** (read/write) level for each key, team, project.

Set a solution to retrieve secrets locally and on the project delivery platform.

**Rotate the key values** on a regular basis, depending on its importance and exposure.

**Monitor** and validate roles and accesses on a regular basis.

### Where to store

In Vault by using [Shippy](https://github.com/telus/shippy-cli).

Specific [documentation for TELUS Digital](https://github.com/telus/my-telus-e2e/blob/master/SECRETS.md).

### What is a "Secret"

TLS private keys, tokens, passwords, certificates, API keys, data stores, testing data…

### "MUST" and "MUST NOT"

**MUST** apply this strategy to all object defined as a secret.

**MUST NOT** publish or share non-encrypted secret values within a third party tool (GitHub, Slack, Google Application) or Email.

## Who

Everyone!

## References

- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [OpenShift Secrets](https://docs.openshift.com/container-platform/3.4/dev_guide/secrets.html)
- [Ansible Vault](http://docs.ansible.com/ansible/playbooks_vault.html)
- [HashiCorp Vault](https://www.vaultproject.io/)
- [Turtles all the way down](https://www.youtube.com/watch?v=OUSvv2maMYI)
