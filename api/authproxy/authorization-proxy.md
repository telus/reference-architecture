# Authorization Proxy

## Why

The Authorization Proxy was created for centralizing OAuth2 login/logout and manages communication between TELUS Digital and Service Delivery Platform (SDF). Each application should not have to worry about the complex onboarding of OAuth2 and SDF.

Another problem that it solves is keeping consistent session across applications under the umbrella domain of `www.telus.com`. For example, logging out from one application should log the user out from all applications or interacting with one application should extend the session for another.

With centralized session, we can also implement authenticated components on any page. We can now implement a login/logout button on all pages or implement a usage meter on mobility makreintg pages if the customer has already logged in.

## What

The Authorization Proxy handles:

* managing of OAuth2 login & logout redirections
* exchanging of OAuth2 code for Access and Refresh token
* refreshing of Access token based on Access token TTL
* manaing client id & certificate to SDF
* creating of authenticated and unauthenticated session
* aliging session id across applications
* provinding an easy way to register and deployment of APIs

## How

The Authorization Proxy [README](https://github.com/telusdigital/authorization-proxy)
