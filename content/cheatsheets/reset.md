---
title: reset
description: css, reset
---

### Box model

```css
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/*
  Notes:
  - Use rems for margins
  - Avoid using margin-top
*/
```

### Native font stack

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Helvetica Neue", Arial, sans-serif;

/*
  Notes:
  - add font-family to body
  - use `inherit` instead of font-* properties when possible
*/
```

[Using UI System Fonts in Web Design](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/)

<br />

### Scalable font sizes

```css
html {
  font-size: 16px;
}

/*
  Notes:
  - set all other font sizes in rems
*/
```

<br />

### Default responsive images

```css
img {
  max-width: 100%;
  height: auto;
}
```

<br />

## Reference

[Bootstrap Reboot](https://getbootstrap.com/docs/4.0/content/reboot/)<br />
