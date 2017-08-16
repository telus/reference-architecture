# API Optimization

## Why

A lot of the time, our applications will need to make API calls when we need data that is sourced by other systems within TELUS.  Every call has a page performance cost, yet we may want to incur the extra time to provide a richer experience to our customers.  We need to always have that in consideration when dealing with API calls.

## What

We now have Load Testing and Performance testing as part of our API Pipelines. This should be relied upon to deliver expected SLAs to consumers. As a consumer, we recommend you log your API response times and build in an automatic warning log that occurs when an API calls exceeds expected SLA.

The following code can be modified to implemented to measure the response time of an outgoing request:
```js
const sla = 0.05
let t = (new Date()).getTime()
return someRequestPromise.then((response)=>{
  t = (new Date()).getTime() - t;
  if(t > sla){
    console.log(`${t}ms - ${apiEndpoint}`)
  }
  return response
})
```

## How

Some recommendations:  

- Try not to make calls that will block Server Side Render
- Maintain clear visibility on the number of calls that are made by the server and how long they take.
- If your API call is slow, escalate to your friendly API team! (APIs should not be slow)
- Cache reasonably static data on server with safe expiry! (ie. 5 minutes)
- Use internal network routing on the server side.
