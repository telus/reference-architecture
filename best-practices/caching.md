# Caching

## Why

Originating from VOC, there was an issue regarding users’ my-account data still being visible from their browser’s cache even after the user has logged out and clicked back. 

## What

The bottom-line is that the user should not see their private information after logging out should they click on the “Back” button of their browser. A solution is currently live (see details below).

## How

In RA, team Nutella has implemented the solution:
```js
// set headers to prevent browser caching  
res.set('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
```

## References

- [Architecture Forum Issue #67] (https://github.com/telusdigital/architecture-forum/issues/67)
- [Implementation Example in RA] (https://github.com/telusdigital/my-account-favourite-numbers/blob/master/ui/src/server.js#L180)
