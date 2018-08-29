# Accessibility Guide

Dev accessibility at a glance:
- Automated testing
- Keyboard accessibility
- Focus management
- Label UI elements
- Best practices: semantic markup, enhance with ARIA

## Automated testing with aXe
aXe is an accessibility testing engine. In its simplest form it can be used straight into your browser (as Chrome & Firefox plugins) and integrates with the native dev tools.
- [Chrome link](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
- [Firefox link](https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/)

## Keyboard accessibility
- `Keyboard focus`: ensure you can TAB through all interactive elements (links, buttons, form fields, navigation menus, dropdowns, pop-ups etc.); watch out for elements that you can’t TAB to and keyboard traps.
- `Keyboard focus outline`: ensure you can see where you are at all times when you TAB through interactive elements; watch out for elements that don’t have focus outline and hidden elements.
<br>`Note`: some browsers have their own focus outline (e.g. Chrome’s blue border) - that’s not sufficient. We need to roll our own focus outlines.
- `Keyboard functionality`: ensure you can interact with all focusable elements by keyboard (not just mouse / hover).

## Focus management

- Interactive elements (menus, expanding sections, etc.) need to have a keyboard model as well, not just a mouse / hover model. 

- Keyboard focus should never reset to the top of the page or “get lost” on the page during interactions. 

- `General rule`: when triggering an action (expanding sections, opening modal menus, etc.) the focus moves from the triggering element to the action; and reversely when the action is completed (collapsing UI, closing a dialog, etc.) the focus moves to the triggering element

## Label UI elements
Links & buttons have text (`<a></a>` = no bueno), form fields have labels `<label for="field_id">` or a title attribute (if `<label>` doesn't make sense in your UI), images have alt text, etc.

## Use semantic mark-up
No `<div>` soup for us please. Use HTML elements for their semantic meaning - headings, lists, paragraphs, etc.

## Enhance with ARIA
Use ARIA landmarks to complement the main HTML sections: [see image](https://c1.staticflickr.com/9/8096/8467120722_3e70a8c513_b.jpg).
