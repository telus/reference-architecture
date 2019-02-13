# CSS

## Why

We need a method of managing CSS complexity at scale, as many developers contribute and share styling across many applications. Styles must not overlap or conflict inadvertently, which causes non-deterministic behaviour and defects. It must be easy for developers to do the right thing, even if they are not experts at CSS.

## What

In a [component architecture](./react.md), co-locating styles with components is an appropriate strategy to deal with this complexity.

### Avoid

An often-used methodology is an agreed-upon naming convention for CSS classes, such as [BEM (Block-Element-Modifier)](http://getbem.com/). While conventions are useful, everyone must **always** remember to follow the BEM rules. This results in a manual process that is prone to mistakes.

### Use

The preferred approach is to use automated build-time style scoping in combination with co-location of styles and components. With minimal tooling, styles are scoped automatically as part of the application's build process. This allows the developer to use the class names that make the most sense for each component (or to stop manually writing class names altogether), without worrying about style conflicts or inadvertent class name overriding.

## How

We currently use [styled-components](https://www.styled-components.com/) as our css technology to handle automated build-time style scoping. This allows us to write [styles in JavaScript](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) (CSS-in-JS) rather than using a pre-processor such as Sass or plain CSS. Doing so solves the co-location problem by attaching styles directly to components.

We also have some best practices to follow when styling applications:

- Must use [style objects](https://www.styled-components.com/docs/advanced#style-objects) with the `styled` syntax when creating styled-components
- Should try to reuse existing components (such as TDS components) before creating new styled-components
- Recommend that functionality such as layouts and animations be created and shared via components
- Must [sanitize](https://www.styled-components.com/docs/advanced#security) user input if it is to be used as styles

## References

- [Mozilla Developer Network: CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [caniuse.com (Browser compatibility tables)](http://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [React: CSS in JS by Christopher "vjeux" Chedeau](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)
- [Announcing native support for the css prop in styled-components](https://medium.com/styled-components/announcing-native-support-for-the-css-prop-in-styled-components-245ca5252feb)
