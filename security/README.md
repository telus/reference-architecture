## Why

Security is everyone's responsibility, by including security mindfulness early in the development process, security concerns are identified and remediated ideally before they are put into production. This avoids the costly (both in terms of
time and money) refactoring of a project later in the development cycle. Moreover, our customers expect the Confidentiality, Identity and Availability of our products and services to be an intrinsic value.

## What

The following concerns  are the the bare minimum your project should consider as part of it's "Secure by Design" development.

## How

First and foremost, application security is a relatively new discipline, the humility and wisdom to ask for help is a great start. There's a lot of moving parts and new threats are a given. Connecting with your outcome team's assigned @security resource can help you overcome some initial hurdles.

## Who

@everyone

## Security Concepts 

- [Confidentiality, Integrity, Availability](cia.md)
- [Least Privilege/Least Access](least-privilege.md)

### Threats

- [OWASP Top 10](owasp-top-ten.md)
- [Information Disclosure](info-disclosure.md)

## Security Concerns and Practices within Development Phases

This reference is segmented by phase, covering security concerns from  project inception, through to post production phase with a special call out recognizing the new Continuous Integration (CI) / Continuous Deployment/Delivery (CD) methodology  that's leveraged within our organization.

#### Inception Phase 

- [OWASP Application Security Verification Standard](ASVS.md)
- [Privacy Impact Assessment](pia.md)
- [Security Architecture Engagement Request](pia.md)
- [Evil User Stories](evil-user.md)
- [Threat Modeling](threat-modeling.md)

#### Code Development Phase

##### General Development Process

- [Linting](linting.md)
- [RCS Secrets](rcs-secrets.md)
- [General Best Practices](general.md)

#### Front End Development

- [React.JS](front-end/react.md)

#### Back End Development

- [Node.JS](back-end/node.js)
- [Express.JS](back-end/express.md)

#### API Development

- [API Concerns](api/api.md)

##### Web Application Security Controls

- [Browser Security Controls](browser-controls.md)
- [Server Side Controls](server-side-controls.md)

#### Testing Phase

- [Test Driven Security Testing](tdst.md)

#### Continuous Delivery/Deployment Phase

- [Jenkins](jenkins.md)

#### Post Deployment Phase

- [Vulnerabilty Management Program](vuln-management.md)
