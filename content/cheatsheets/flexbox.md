---
title: flexbox
description: css, layout, box model
---

### Prevent image from shrinking

```css
img {
  width: 100%;
  flex-shrink: 0;
}
```

[Prevent image from shrinking with Flexbox](https://befused.com/css/flexbox-prevent-image-shrinking)

<br />

### Using `text-overflow` on flexbox children

```html
<div class="container">
  <span class="child"></span>
</div>
```

```css
.container {
  display: flex;
  overflow: hidden;
}

.child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

[CSS Flexbox, Overflow, Text-Overflow Ellipses, and a Separation of Concerns](https://www.bennadel.com/blog/3881-css-flexbox-overflow-text-overflow-ellipses-and-a-separation-of-concerns.htm)

<br />

### Giving wrapped flexbox items vertical spacing

```css
.flexContainer { margin-top: -1rem; }
.flexContainer > * { margin-top: 1rem; }
```

[Stack Overflow](https://stackoverflow.com/questions/35578404/giving-wrapped-flexbox-items-vertical-spacing)

<br />

## Reference

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
