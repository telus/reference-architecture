# Data Security and Encryption

When collecting personal information, care must be taken to ensure data stays private.
There are different levels of controls used depending on the classification of the information, as below:
- Public - no controls are required
- Proprietary - encryption in transit, Optional Encryption at rest
- Confidential - logging, role-based access control (RBAC), encryption in transit and rest
- Restricted - multiple controls are required - our security team will need to be engaged further.

## Data In Transit

Transport Layer Security is mandatory (HTTPS) for all TELUS websites. This is not only to protect customer data, but to uphold our brand integrity.
- There is an internal process to request digital certificates for TELUS websites that will need to be coordinated by a TELUS prime. (see [Project Inception and Security Process](project-inception-and-security-process.md))
- Protocol standards: TLS 1.2+ is supported protocol (support for TLS 1.0 and 1.1 should be disabled).
- Cipher standards: AES 256/512 block cipher
- RSA digital signatures key sizes must be 2048 or larger
- Hashing standards: SHA-2 (SHA256, SHA-384, SHA-512/224, SHA-512/256) family of cryptographic hashing must be used instead of SHA-1

## Data at Rest

Ensure that sensitive data is always stored encrypted in either permanent or temporary storage. Amongst the typical storage mechanism used are databases, configuration files and caches.
- Store sensitive data only if required by business
- If sensitive data must be stored, it should be stored encrypted using cipher standard: AES 256/512 block cipher
- Password storage: store a one-way hashed and salted value of passwords
- Encryption key should be unique to the application and environment, do not use a common encryption key across multiple applications
- Store keys separately from the data they encrypt
- Ensure that appropriate access-controls are in place
- Browser caching should be disabled for dynamic and sensitive content. Prevent caching by sending anti-caching HTTP headers:
  - Cache-Control: no-cache, no-store
  - Pragma: no-cache
- Persistent cookies should not be used for cookies with sensitive information
 
OWASP reference: https://www.owasp.org/index.php/Cryptographic_Storage_Cheat_Sheet
