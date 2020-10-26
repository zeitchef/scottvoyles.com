---
title: input-search
tags:
  - css
  - reset
---

### Remove default styles

```css
input[type=search] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
```

### Remove X from searchbar

```css
/* clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

/* clears the 'X' from Chrome */
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration { display: none; }
```
[Remove the X from IE and Chrome input type search](https://blog.maximerouiller.com/post/remove-the-x-from-internet-explorer-and-chrome-input-type-search/)

<br />

## Reference

[appearance - CSS Tricks](https://css-tricks.com/almanac/properties/a/appearance/)
