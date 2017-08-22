# Routes

## Why

An OpenShift Container Platform route exposes a service at a host name, like www.example.com, so that external clients can reach it by name.

Unsecured routes are the default configuration, and are therefore the simplest to set up. However, secured routes offer security for connections to remain private. 

## What

Secured routes specify the TLS termination of the route and, optionally, provide a key and certificate(s).

## How

To create a secured HTTPS route encrypted with a key and certificate (PEM-format files which you must generate and sign separately), you can use the create route command and optionally provide certificates and a key.

```
$ oc create route edge ${ROUTE_NAME}\
    --service=${SERVICE_NAME} \
    --cert=${CERTS_DIR}/ca.crt \
    --key=${CERTS_DIR}/ca.key \
    --ca-cert=${CERTS_DIR}/ca.crt \
    --hostname=${HOSTNAME}
```

## Who

@delivery

## References

- [Openshift Routes Developer Guide](https://docs.openshift.com/container-platform/3.5/dev_guide/routes.html)
- [OpenShift Routes Architecture Concepts](https://docs.openshift.com/container-platform/3.5/architecture/core_concepts/routes.html)