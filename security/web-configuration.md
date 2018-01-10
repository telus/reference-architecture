# Web Configuration

## Why

Proper web security configuration helps secure websites by mitigating risks such as personal information exposure, session hijacking, man in the middle etc.

## What

HTTP header and cookie security configuration information.

## How

### Cross-origin resource sharing

Website must implement a strict [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) policy. If content is intended to be shared by other websites then those websites must be explicitly defined and access allowed only to those websites. Do not allow arbitrary origins access as it invalidates the same-origin security policy.

### HTTP Strict Transport Security

Use the [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) header to ensure browser doesn't downgrade to HTTP protocol in subsequent requests. This helps to defend against Man-in-the-middle attacks.

### Cookies

Ensure that cookies containing sensitive information are properly secured:
- add the [Secure](https://en.wikipedia.org/wiki/Secure_cookies) tag on cookies that may only be transmitted via HTTPS
- add the [HttpOnly](https://www.owasp.org/index.php/HttpOnly) tag on cookies to prevent script access as a defense against [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
- restrict cookie scope (domain and path tags) for cookies containing sensitive information

### Caching

- Ensure that sensitive content is not cached by the browser (or proxies) by utilizing the appropriate caching directives. To ensure that content is not cached use the following:
  - `Cache-Control: no-store, no-cache`
  - `Pragma: no-cache`

### Clickjacking

A [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) (CSP) is recommended for all TELUS websites. A Content Security Policy is a candidate W3C standard used to prevent [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) (XSS), [clickjacking](https://en.wikipedia.org/wiki/Clickjacking) and other code injection attacks resulting from execution of malicious content in the trusted web page context. While [this standard](https://www.w3.org/TR/CSP3/) is still in W3C candidate status, support from modern browsers is present and needs to be leveraged, whether natively or in framework security modules.

The OWASP project also defines a collection of additional [Secure Headers](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project): 

- use the [X-Frame-Options](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo) header to restrict use of content in an iframe of another site
- use the [X-XSS-Protection](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp) header to enable XSS scripting filter in browser
- use the [X-Content-Type-Options](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto) header to prevent browser from MIME-sniffing
