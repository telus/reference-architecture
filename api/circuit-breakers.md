# Circuit breakers

## Why

Circuit Breakers proxy consumption of a downstream system. They allow our services to "fail fast" in a predictable manner when downstream systems time out or return unhealthy responses. They will help to: 

*   avoid adding more load on a struggling server
*   prevent passing on timeouts to the client, and hence provide end users a better user experience 
*   prevent cascading failures across distributed services

Circuit breakers are especially relevant for TELUS Digital APIs because many of them rely on downstream services like BTO while supporting customer-facing UIs. Currently, Appointment API is experimenting with using them. 

## What
"The basic idea behind the circuit breaker is very simple. You wrap a protected function call in a circuit breaker object, which monitors for failures. Once the failures reach a certain threshold, the circuit breaker trips, and all further calls to the circuit breaker return with an error, without the protected call being made at all."

-From [Martin Fowler on Circuit Breakers](https://www.martinfowler.com/bliki/CircuitBreaker.html)

## How
#### Implementation
You can write your own circuit breaker, or use an [existing npm library](https://www.npmjs.com/search?q=circuit%20breaker&page=1&ranking=optimal); many of them are based on Netflix's [Hystrix](https://github.com/Netflix/Hystrix) library and adapted for JavaScript. 

Each downstream call can be wrapped in a circuit breaker, with configurable options that make sense for that specific call. Example options include: 
*   the threshold at which the circuit trips, for e.g. if 50% of calls result in errors
*   how long a circuit is allowed to stay open before testing for downstream system health again, for e.g. 30 seconds

#### Custom fallback method
This is the custom method that is called when the circuit breaker has tripped, i.e. is open. You could return a useful error message here, or implement workarounds using, say, a cache. In addition, you can also do some logging or record metrics - circuit breakers are a valuable place for monitoring. 

#### Don't use Auth Proxy (or in general, API gateways) for circuit breaking
Different services may have different needs for behaviour in the case that a circuit breaker is tripped, and as such control of this logic should be left to the service. 

## References
-   [Martin Fowler on Circuit Breakers](https://www.martinfowler.com/bliki/CircuitBreaker.html)
-   [Making the Netflix API more resilient](https://medium.com/netflix-techblog/making-the-netflix-api-more-resilient-a8ec62159c2d)
