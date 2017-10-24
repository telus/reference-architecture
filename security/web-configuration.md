# Web Configuration

- Website must implement strict CORS policy. If content is intended to be shared by other websites, then those websites must be explicitly defined and access allowed only to the those websites. Do not allow arbitrary origins access as it invalidates the same origin security policy.
https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

- HSTS (HTTP Strict Transport Security) header to ensure browser doesn’t downgrade to HTTP protocol in subsequent requests to defend against Man in the Middle attacks.
https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security

- Implement “secure” tag for cookies containing sensitive information
https://en.wikipedia.org/wiki/Secure_cookies

- Implement “httpOnly” tag for cookies that containing sensitive information to restrict access from scripts as defense against XSS
https://www.owasp.org/index.php/HttpOnly

- Restrict cookie scope (domain and path tags)  for cookies containing sensitive information

- Ensure that sensitive content is not cached by the browser (or proxies) by utilizing the appropriate caching directives. To ensure that content is not cached use the following:
  - Cache-Control: no-store, no-cache
  - Pragma: no-cache

- Sensitive data must not be transmitted via URL parameters.

- X-Frame-Options header to restrict use of content in an iframe of another site to defend against Clickjacking
https://en.wikipedia.org/wiki/Clickjacking

- Content Security Policy (CSP) is recommended for all TELUS websites. A Content Security Policy is a candidate W3C standard used to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context. While this standard is still in W3C candidate status, support from modern browsers is present, and needs to be leveraged, whether natively, or in framework security modules. https://en.wikipedia.org/wiki/Content_Security_Policy

- X-XSS-Protection Header - to enable XSS scripting filter in browser::
https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp 

- X-Content-Type-Options Header - to prevent browser from MIME-sniffing:
https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto 
