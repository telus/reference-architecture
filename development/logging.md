# Logging

## Why

Logging is incredibly useful for determining the health of your application, monitoring data, finding the source of errors, etc.

## What

For reference-architecture apps, we use [Winston](https://github.com/winstonjs/winston) and [Express-Winston](https://github.com/bithavoc/express-winston) libraries to standardize our output of logging for diagnostics and auditing purposes.

## How

### Log levels

- **Error**: This should be used for all page-breaking errors. If an unrecoverable response-breaking exception is thrown, odds are you should log an error message as well.
- **Warn**: This is used for logging when an error has occurred, from which we can recover gracefully. Usually you would do this for a small piece of information, which the page can be displayed without, but should be working regardless.
- **Info**: This code is for logging any relevant information for production. This would be things like the duration of a REST call, if the cache hits or misses, or flow changes (e.g. redirecting to another non-error page).
- **Debug**: This is a non-error code for development and debugging only, and will normally be hidden on production (although it can be enabled temporarily in order to track down a difficult issue). At debug level, log things like REST/curl responses (being sure to avoid logging Personal Information), database calls & responses, cache responses and other useful information, from which the page is derived.

#### Exception Handling
- Exceptions may be thrown throughout applications, especially when calling REST services or using libraries.
- How to handle an exception depends on your use case:
  - If the exception is trivial/expected, log at debug or info level and move on
  - If we can still display the requested page, despite an exception, log a warn and move on
  - If the exception is non-trivial and breaks the page, log an error

### Personal Information

We cannot log personal information. Any BANs, first/last names, or other personal information should not be logged. If it is necessary, e.g. to support a fraud investigation, you would have to make a privacy assessment with the "Data and Trust" office to change the logging approach.

### Outputting logs

Unlike traditional apps that log to a file on disk somewhere, with Docker and Kubernetes this is no longer necessary. Simply log to stdout, and _magic_ (AKA Elasticsearch, Fluentd, Kibana -- EFK) will take care of the rest.

### Log formatting

For our deployed apps, logs must be in JSON format. This allows Kibana to parse all of the fields into discrete objects that can be queried.

For local development, it is reasonable to use a more human-readable single-line string output.

Our starter kits have the default log formatting standards built in from the get-go, using [Winston](https://github.com/winstonjs/winston)

### Kibana

- [Sandbox Kibana](https://logs.telusdigitalsandbox.openshift.com)
- [Main Kibana](https://logs.telusdigital.openshift.com)

To find your application logs, do the following:

- Visit the console ([Sandbox](http://console.telusdigital.openshift.com), [Main](http://console.telusdigital.openshift.com)) and login
- Click on your project
- On the left hand side, click Applications then Pods
- Click one of your running pods
- Click the logs button
- On the right click the View archive button
- You will be redirected to Kibana
- To select the time range for the logs, click the date picker button on the top right of the page. Logs will be stored for a maximum of 14 days.
- This will show logs for only your pod by default. Remove the `kubernetes.pod_name` selector and change it to `kubernetes.labels.deploymentconfig:"deploymentname"` to see logs for all pods in your deployment.

## Who

@delivery

## References

- [Sandbox Kibana](https://logs.telusdigitalsandbox.openshift.com)
- [Main Kibana](https://logs.telusdigital.openshift.com)
- [Winston](https://github.com/winstonjs/winston)
- [OpenShift logging docs](https://docs.openshift.com/container-platform/3.4/install_config/aggregate_logging.html)
- [12factor logging standard](https://12factor.net/logs)
