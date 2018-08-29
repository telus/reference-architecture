# Isomorphic / Universal JavaScript

## Why

With traditional server-side web applications, the server responds to a request with fully rendered HTML. However, it is very difficult for these types of applications to have the same rich "mobile app-like" experience (seamless transitions, animations, etc).

In search of a more app-like experience, development has recently moved towards client-side "single-page" webapps, where an HTML+JS+CSS bundle is downloaded, and rendered on the device. The application would then make AJAX queries for its data, and the application could update the page with a seamless transition, rather than the classic browser loading animation, and a jarring redraw.

However, client-side JavaScript webapps also have numerous limitations. Performance, especially for initial page render, was very poor, as you would have to download the entire scope of your JavaScript application, and wait for it to start up, call its AJAX services, and finally render the page. Another major flaw is SEO, as the JavaScript would often not carry relevant information for web crawlers, and many of them would not execute JavaScript code at all. Also, with the single page app and its API being constructed in different languages, there was often a duplication of business logic, etc.

## What

Isomorphic design tries to tackle the problems of server-side or client-side only solutions, by giving you the best of both worlds. You get the initial pre-rendered page that is good for performance and SEO, while retaining the smooth app-like rich experience of the client-side app.

Rather than sending a blank page with a JavaScript application, an isomorphic app would pre-render the page, and the client-side JavaScript would take over once it is rendered. With the advent of Node.js, it also became possible to have "Universal" code (same exact code used on both the client and the server side). [React.js](react.md), a framework built by Facebook, is a popular tool for building universal, isomorphic web applications.

## How

The [TELUS Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit) is a boilerplate application, which is a [template](starter-kits.md) for building an Isomorphic/Universal React.js UI. It has a `client.js` and a `server.js`, which contain the relevant Isomorphic bootstrapping code. The rest of the code (the React components, the Redux state, etc.) is Universal and shared between server and client side.

## Who

Developers, developers, developers, developers.

## References

- [AirBnB Isomorphism](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc)
- [Isomorphism vs Universal](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb)
- [Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit)
