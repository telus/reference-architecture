# Adobe Analytics Functions

## Why
Existing analytics tagging depends on an out-of-box Adobe functionality to detect when `dataLayer` object changes.
This detection is a black-box and does not meet our requirements as users can trigger many changes quickly. 
To avoid delaying when we set `datalayer`, we are exposing few methods to call to trigger hits directly.


## Caveat
This section will be updated as we extend more functionality.

-   Check page is loading **Adobe DTM**, and not Adobe Launch. This is verified by looking for scripts src containing `adobedtm` and not `launch`.
  We will enable the same function in Adobe Launch in near future.
-   Check `dataLayer.product` is populated as expected
-   Use try-catch just in case Adobe DTM is not loaded.
-   Ensure there is no updates to `dataLayer.event` when using any functions below.
-   Check `dataLayer` is **updated first** before calling the functions below. 

E.g.,

1.  user lands on product detail page 
2.  `dataLayer` is present with page level info
3.  a pageview hit is sent  
4.  user clicks to add product to cart
5.  `dataLayer` is updated with product info
6.  a function such as `add_to_cart` from list below is called
7.  an event hit is sent 


## Functions
-   Add to Cart
```javascript
var s = _satellite.getToolsByType('sc')[0].getS();
s.events="scAdd"
s.track('add_to_cart');
```

-   Remove from Cart
```javascript
var s = _satellite.getToolsByType('sc')[0].getS();
s.events="scRemove"
s.track('remove_from_cart');
```


## Notes
-   Naming conventions for values inside `s.events` are all out-of-box and can't be changed. 
-   Naming conventions for values in `s.track` are customized and typically start with a verb. 
