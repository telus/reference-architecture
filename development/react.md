# React

## Why

We need a [JavaScript](javascript.md) library for building web applications that:
  - are [isomorphic](isomorphic.md)
  - have rich transitionless experiences that mobile apps have
  - maintains good SEO standards
  - maintains good performance standards
  - is easy to use
  - has good community support
  - has support for component architecture for setting design standards by sharing components
  - works well with [continuous integration](../process/continuous-integration.md) practices by being declarative, stateless (no database or complicated setup), and easily scalable.

## What

Facebook's open source JavaScript library, [React.js](https://facebook.github.io/react/), is made to build component-based user interfaces in a declarative manner. Instead of traditional MVC (model-view-controller) architectures, React focuses primarily on the view.

React renders JavaScript components by listening for changes in the application's data. Given a data object, React generates HTML views with embedded JavaScript variables. To redraw the web page, simply change data in the state. React will declaratively redraw the page. In JQuery, control flow (instructions on how the HTML DOM will be updated), is required to be defined whereas React does not require these definitions.

More information on how React works can be found in [this guide](https://reactjs.org/docs/hello-world.html).

React code is used on the server and client, and can be used for mobile apps. (See [React Native](https://facebook.github.io/react-native/))

## How

The [TELUS Design System](http://tds.telus.com/) hosts and standardizes a library of React components. Where possible, the components in this library should be used rather than building new components. This ensures a consistent design language across all of our pages.

The [TELUS Isomorphic Starter Kit](https://github.com/telus/telus-isomorphic-starter-kit) is the standard starting point for building isomorphic Node.js and React applications. It contains boilerplate code developers can use with minimal change. The starter kit uses [webpack](webpack.md) and [babel](babel.md) to transpile React JSX and ES2015 code into browser-native ES5 code. Isomorphism is used to pre-render React components on a server before sending them to the browser. This reduces the amount of work on the browser by completing it on the server side. After the browser receives the rendered application, the browser is able to render more React components using AJAX requests to gather data.

Generally speaking, business logic should not be in the React view layer. Business logic should be placed in the backend alongside all handling of downstream data sources. The backend should also expose data that matches the React component state.

## Who

Everyone!

## References

- [React.js](https://facebook.github.io/react/)
- [React tutorials](https://egghead.io/technologies/react)
- [TELUS Isomorphic Starter Kit](https://github.com/telus/telus-isomorphic-starter-kit)
- [React Developer Tools](https://github.com/facebook/react-devtools)
- [React Native](https://facebook.github.io/react-native/)
- [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/languages-and-frameworks/react-js)
