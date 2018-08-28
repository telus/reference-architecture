# React

## Why

We need a [JavaScript](javascript.md) library for building [isomorphic](isomorphic.md) web applications, which have the rich "app-like" transitionless experience of a mobile native app, while maintaining good SEO and performance. This library needs to be easy to use, and have a good community of support behind it. It must support "component architecture", so that we can set design standards, and share components between applications for a similar look and feel. Finally, we want something that works well with our [Continuous Integration](../process/continuous-integration.md) practices, by being declarative, stateless (no database or complicated setup), and easily scaled.

## What

[React.js](https://facebook.github.io/react/) is Facebook's JavaScript library for building declarative, component-based user interfaces. Instead of traditional MVC (model-view-controller) architectures, React focuses primarily on the "view" portion.

Given a data object (called "state"), it deterministically renders your HTML component template, with nested JavaScript code in it (in a format known as "JSX"). This means that to make updates to the website, you simply need to change data in the state, and React will "declaratively" handle the redrawing of the page for you. There is no need for you to define the control flow, i.e. "how the HTML DOM is updated", like one would previously have to do, with JQuery etc.

Not only can React code be used on the server and client side, there's also [React Native](https://facebook.github.io/react-native/) for building native components for mobile apps, on iOS and Android.

## How

[TELUS Design System](http://tds.telus.com/) is our standard library of React components. Where possible, these should be used, rather than creating your own components, so that we can have a consistent design language across all of our pages.

The [TELUS Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit) is a standard boilerplate for building a Node.js isomorphic React application. It uses [webpack](webpack.md), and [babel](babel.md) to transpile the React JSX & ES2015 code into browser-native ES5. Using isomorphism, it pre-renders the React components on a page before sending the content to the browser client. After the browser receives the rendered application, it is able to render all further React components on the client side, using AJAX requests to populate it with data.

Generally speaking you do not want to put business logic in your React View. If you need business logic, you should use a [BFF](bff.md) ("Backend for Frontend") to handle all of the downstream data sources, and expose an API with data that matches the React component state. Our starter kit also ships with a BFF container by default, for this reason.

## Who

Everyone!

## References

-   [React.js](https://facebook.github.io/react/)
-   [React tutorials](https://egghead.io/technologies/react)
-   [TELUS Isomorphic Starter Kit](https://github.com/telusdigital/telus-isomorphic-starter-kit)
-   [React Developer Tools](https://github.com/facebook/react-devtools)
-   [React Native](https://facebook.github.io/react-native/)
-   [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/languages-and-frameworks/react-js)
