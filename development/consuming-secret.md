# Consuming secrets from the Vault with Environment Variables

## Why

Currently we have a common tool [Shippy Vault](https://github.com/telus/shippy-cli) that allows us to create and store secrets in a Vault.  We need a way to use these secrets in our applications.

## What

To maintain confidentiality of our secrets, we should not be storing sensitive information, such as tokens, in our code and constants files.  We should store them in the vault and consume them when needed in our apps.
These instructions are for those using [Shippy Vault](https://github.com/telus/shippy-cli) to store their secrets, `Isomorphic Starter Kit`, and `Openshift`.
There are two common ways to consume secrets in Openshift:
### 1. Using Environment Variables
  Gets and stores the secret in a variable that can be used anywhere in the application
  - Pros
    - Simplicity. The author of this document found it easier to use Environment Variables.
    - If you mount your secrets as files in a volume, you'll then need to either read from the filesystem to actually use a secret or write an additional shell script which reads your secrets from a file and exports them as ENV variables before the app runs.
    - If you populate your secret in ENV variables when you go into Openshift console and go to Deployments > (Choose a Deployment) > and go to the Environment tab you can change the value on the fly and quickly rollout a re-deploy of the same build w/o having to push a new pipeline build
  - Cons
    - Have to define each Environment Variable one by one, which can be annoying if you have many secrets.  Can use configMaps to alleviate this problem.
### 2. Using Volume Mounts
  Creates a file and mounts the file onto the filesystem on the Openshift server
  - Pros
    - Can manage the Volume mount using the CLI commands.
    - Data persistance across multiple containers
    - Scales well, does not need to create an environment variable per secret.
  - Cons
    - May be overkill for what you are trying to accomplish
    - Need to push a new pipeline build and deploy when a secret is changed.

## Recommended Approach

It is recommneded to use the Environment Variable approach due to simplicity.

## How

1. Update your `install.sh` script.  When creating a new pipeline, you'll need to add the secret to the install script, so that the secret is stored on Openshift.
```sh
oc create secret generic some-secret --from-literal=some-token=$(shippy get secret someToken --some-project --field=some-token) --dry-run -o yaml | oc apply -f -
```
2. If your pipeline has already been created, the `install.sh` script will not run on deploy.  So you can either run the above command directly on the Openshift server, or manually create the secret.  The author of this document added it manually.  To add it manually, go to your Openshift Project > Resources > Secrets > "Create Secret" button > Use "Generic Secret" > Populate the rest of the fields.

3. Update the openshift-template.yml in your Isomorphic Starter kit.  Find `NEW_RELIC_LICENSE_KEY`, and input your values below it. Example:
```yaml
- name: SOME_TOKEN
  valueFrom:
    secretKeyRef:
      name: some-secret
      key: some-token
```
4. The secret should be stored in the Environment Variables on your next deploy.  The author of this document used it in a constants file.  You can consume the token with the following line: 
```js
const constant = {
  token: `${process.env.SOME_TOKEN}`
}
```

5. Use the constant anywhere!

## Who

Everyone!

## References

- [Shippy Vault](https://github.com/telus/shippy-cli)
- [Consume Secrets in JSON format using Volume Mounts](https://github.com/telus/my-telus-e2e/blob/master/SECRETS.md)
- [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/#use-cases)
- Support from the #g-developers Slack Channel :)
