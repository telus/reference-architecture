# Routes

## Why

An OpenShift Container Platform route exposes a service at a host name, like `www.example.com`, so that external clients can reach it by name.

Unsecured routes are the default configuration, and are therefore the simplest to set up. However, secured routes offer security for connections to remain private. 

## What

Secured routes specify the TLS termination of the route and provide a key and certificate(s). All routes exposed outside of our cluster must be on TLS.

## How

### Openshiftapps.com routes

For standard routes on `www.telus.com`, we can use our [inbound proxy](inbound-proxies.md) to link to our default `openshiftapps.com` routes. All of our communication must be over TLS, which OpenShift can easily add to our route using its own certificate:
```yaml
tls:
  termination: edge
  insecureEdgeTerminationPolicy: Redirect
```

### Custom routes

To create a secured HTTPS route outside of `www.telus.com` encrypted with a custom key and certificate (PEM-format files which you must generate and sign separately), you can use the create route command and provide certificates and a key.

```
$ oc create route edge ${ROUTE_NAME}\
    --service=${SERVICE_NAME} \
    --cert=${CERT} \
    --key=${KEY} \
    --ca-cert=${CA_CERT} \
    --hostname=${HOSTNAME}
```

Where `CERT`, `KEY`, and `CA_CERT` are [secrets](secrets.md) that come from HashiCorp Vault (NEVER commit to Git!). If you're using the [starter kit](../development/starter-kits.md), delete the default `openshiftapps.com` route YAML configuration, and put the above shell command in your `install.sh`.

## Who

@delivery

## References

- [Openshift Routes Developer Guide](https://docs.openshift.com/container-platform/3.5/dev_guide/routes.html)
- [OpenShift Routes Architecture Concepts](https://docs.openshift.com/container-platform/3.5/architecture/core_concepts/routes.html)