# Contrast

## Why

Our build pipelines use [npm audit](https://docs.npmjs.com/getting-started/running-a-security-audit) to test for CVEs (common vulnerabilities and exposures). Therefore we are not be able to deploy new builds with known bugs. However, CVEs can occur to existing, deployed production applications as well. We need a dashboard to visualize all of the CVEs in our running applications, so that they can be mitigated as soon as possible.

The web is a dangerous place... Our site faces attacks constantly. We must monitor attacks across hundreds of applications, wholistically.

## What

Contrast "Assess" runs build-time dynamic analysis alongside your test suite to check for possible software [vulnerabilities](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_2017_Project) in your application and its dependencies, while in development and QA environments. This is known as "IAST", AKA Interactive Application Security Testing.

Contrast "Protect" can intercept attacks before they hit production. This is known as "RASP", AKA Runtime Application Self Protection.

## How

We host a [private npm package](https://www.npmjs.com/package/@telusdigital/node-contrast) that includes the Node.js agent for easy installation. Our [Starter Kits](starter-kits.md) ship with Contrast Assess enabled by default. An agent runs on our Node.js applications, which instruments our code with Contrast defenses, and communicates with the Contrast APIs.

Setup documentation can be found [here](https://github.com/telus/security/blob/master/tools/contrast.md).

When your application is running locally, in pre-production or production, you can see your host live in the Contrast Dashboard. Issues can be converted into JIRA tickets, and notifications of attacks or vulnerabilities can be sent to slack.

## Who

@delivery
@security

## References

- [Contrast docs](https://docs.contrastsecurity.com/)
- [Contrast IAST video](https://www.youtube.com/watch?v=z0DBdAW6IKw)
- [Contrast RASP video](https://www.youtube.com/watch?v=5_9mEK_4nPg)
