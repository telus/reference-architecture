## Why
Node.JS is a single threaded process which makes it susceptible to various DoS type attacks where computationally intense operations or recursive attacks can cause the process to crash or to otherwise block execution of other events. Furthermore, the single process model weakens the entropy involved in Pseudo Random Number Generation (PRNG) routines. The state engine given it's using a shared thread across the responding server, can be predicted after a short number of calls to the PRNG. Regular Expression Denial of Service (ReDoS) is also a concern once again due to to the single threaded nature of the node.js process. Using regexes that create computationally large searching criteria can cause the node.js to block its event loop iteration.
## What
## How
## Who
```
