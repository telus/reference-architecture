# Secrets

## Why

Our applications require secrets, e.g. login/database credentials, license keys, certificates, etc. Currently, all users in our GitHub organization get read access to ALL repositories. Formerly, our secrets were simply committed to Git. As more users join our GitHub organization, including external vendors, our exposure to malware and phishing grows, and so does the risk of exposing these secrets. With access to this information, a hacker could impersonate our production applications and gain access to users personal information. This would be **BAD NEWS**.

## What

We need to maintain confidentiality and at-rest encryption of our secrets, lest we get owned. Ideally, we can also audit who/what uses these secrets, and how, as well as rotate the keys should they become compromised.

## How

### Kubernetes/OpenShift secrets

For our reference architecture applications, the secrets are provisioned in Kubernetes/OpenShift, by pushing them as base64 encoded strings, via YAML configuration. These secrets can be mounted into our Docker containers either as environment variables or volumes (files/folders). However, since Kubernetes is a declarative platform, we want to store these secrets somewhere, so that we can recover them if need be. Also we need access to many secrets for local development. For this, we need some sort of secure storage mechanism.

### Secret storage

We have a few techniques in play for managing the storage of our secrets, before they go into Kubernetes.

#### Good

We are phasing out the use Ansible Vault, a secret management tool built into Ansible, which simply encrypts secrets into a file with a password. These files are then committed into source control. While this satisfies encryption at rest, it is not easily auditable, and there is no access control. This means if developers leave our organization, they will still be have access to the secrets that they have previously checked out, as long as they know the password. Also, if we have some shared credentials (e.g. GitHub/NPM read tokens) that get exposed, there is no way to quickly and easily rotate the keys... it would need to be done manually for every vault/application.

#### Better

HashiCorp Vault is a much better tool than Ansible Vault. Our implementation uses HashiCorp Consul as a high-availability backing store, where we have a centralized single-source-of-truth for all of our secrets, for all of our applications. With a single source, it is easier to rotate keys across the whole organization all at once. Vault also offers an audit log that shows who/what is using the certificates, and you can stream this log into machine learning algorithms to find malicious patterns.

Secrets can be nested in a tree, and users/groups can be given access to specific branches. So only developers of a specific application have access to their specific secrets. Access can be revoked as well. Vault also offers password generators for specific services, so that it can create short-lived/ephemeral access tokens that are only used for a single request, or several minutes.

#### Best

Rather than provisioning the secrets from HashiCorp Vault into Kubernetes, and exposing them to the app, the app can instead get a Vault access token and query it directly for secrets. We have not tested this capability yet, but it's where we'd like to go `:)`.

### HowTo: create and consume secrets in json format

#### Create secret into Vault via Shippy

```bash
shippy project my-project
```
```bash
shippy create secret my-secrets
```
or if already created:
```bash
shippy edit secret my-secrets
```
With
- Key: field value (e.g. `billing`)
- Value: json content, e.g.:
```json
module.exports = {
    defaultCustomer: {
      username: 'blablabla@telusinternal.com',
      password: 'bliblibli',
      encryptedBAN: 'TchoukTchouk',
      BAN: '12345678',
      BanType: 'Mobility'
    },
    ownerBillingSummary: {
      username: 'blublublu@telusinternal.com',
      password: 'blobloblo',
      encryptedBAN: 'TchickTchick',
      BAN: '87654321',
      BanType: 'Mobility',
      accountOwner: 'BILLING SUMMARY OWNER (account owner)',
      billFormat: 'Paper bill enabled',
      billingAddressValue: '300 CONSILIUM PLACE, TORONTO ON, M1H3J3'
    }
  }
```

#### Update the Openshift installation file
Purpose is to get the secrets added to the project

```bash
mkdir fixtures \
  && shippy get secret my-secrets --my-project --field=billing > fixtures/billing.js \
  && shippy get secret my-secrets --my-project --field=login > fixtures/login.js \
  && oc create secret generic customer-secret --from-file=fixtures --dry-run -o yaml | oc apply -f -
rm -rf fixtures
```

#### Update the Openshift script file
Purpose is to get the secrets mounted in the container

```json
        "volumeMounts":[{
          "name": "customers-volume",
          "readOnly": true,
          "mountPath": "/app/fixtures/customers"
        }]
      }],
      "volumes":[{
        "name":"customers-volume",
        "secret":{
            "secretName":"customer-secret"
        }
      }]
```
or the Openshift template:
```yml
              volumeMounts:
                - name: customers-volume
                  mountPath: /app/fixtures/customers
                  readOnly: true
          volumes:
            - name: customers-volume
              secret:
                secretName: customer-secret
```

#### Update the [init.sh](init.sh) file 
Purpose is to pull the secrets and generate a json file locally

```bash
mkdir -p e2e/fixtures/customers
shippy get secret my-secrets --my-project --field=billing > e2e/fixtures/customers/billing.js
```

## Who

@delivery

## References

- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [OpenShift Secrets](https://docs.openshift.com/container-platform/3.4/dev_guide/secrets.html)
- [Ansible Vault](http://docs.ansible.com/ansible/playbooks_vault.html)
- [HashiCorp Vault](https://www.vaultproject.io/)
- [Turtles all the way down](https://www.youtube.com/watch?v=OUSvv2maMYI)
