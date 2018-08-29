# CSS

## Why

We need a way of managing CSS complexity at scale, with many developers contributing and sharing styling across many applications. Styles must not overlap or conflict inadvertently, which causes non-deterministic behaviour and defects. It must be easy to do the right thing, even for developers who are not experts at CSS.

## What

In a [component architecture](./react.md), co-locating styles with components is an appropriate strategy to deal with this complexity.

### Avoid

An often-used methodology is an agreed-upon naming convention for CSS classes, such as [BEM (Block-Element-Modifier)](http://getbem.com/). While conventions are good, everyone must **always** remember to follow the BEM rules, making it more of a manual process that is prone to mistakes.

### Use

Instead, the preferred approach is to use automated build-time style scoping in combination with co-location of styles and components. With minimal tooling, styles are scoped automatically as part of your application's build process. This allows the developer to use whatever class names make the most sense for each component (or to stop hand writing class names altogether), without worry of style conflicts or inadvertent class name overriding.

## How

While we do not currenly have a standardized technology to handle automated build-time style scoping, there are a few in use today, including [styled-components](https://www.styled-components.com/) and [CSS Modules](https://github.com/css-modules/css-modules). We hope to soon align on a recommended technology.

We also have some best practices to follow when styling applications:

- Always try to reuse existing styles and components (such as TDS components) before creating new styles
- Seek to write [styles in JavaScript](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) (CSS-in-JS) rather than using a pre-processor such as Sass or plain CSS
- Follow the "styled component" pattern by attaching styles directly to components.
- Attempt to push logic out of CSS into JavaScript (such as animations, pseudo-states such as :hover/:focus, media queries) so that it is easier to reason about, test, and maintain
- Share functionality via components instead of CSS classes (even layout or animations can be created as components)

## References

- [Mozilla Developer Network: CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [caniuse.com (Browser compatibility tables)](http://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [React: CSS in JS by Christopher "vjeux" Chedeau](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)
