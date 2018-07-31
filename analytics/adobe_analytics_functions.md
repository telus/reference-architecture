# Adobe Analytics Functions

## Why
Existing analytics tagging depends on an out-of-box Adobe functionality to detect when dataLayer object changes.
This detection is a black-box and does not meet our requirements as users can trigger many changes quickly. 
To avoid delaying when we set datalayer, we are exposing few methods to call to trigger hits directly.

## What
This section will be updated as extend more functionalities.

Currently, these are available for pages using DTM (page source will contain adobedtm)
Ensure dataLayer for products are loaded as expected and only call the functions on click. 

- Add to Cart
```javascript
var s = _satellite.getToolsByType('sc')[0].getS();
s.events="scAdd"
s.track('add_to_cart');
```

- Remove from Cart
```javascript
var s = _satellite.getToolsByType('sc')[0].getS();
s.events="scRemove"
s.track('remove_from_cart');```