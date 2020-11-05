---
title: vuetify
description: vue, javascript, css, framework
---

### Rules

Validate postal codes

```html[template]
<v-text-field :rules="isValidPlz" validate-on-blur />
```

```js[script]
rules: [
  isValidCode: [
    (v) => (v.length === 5 && parseInt(v, 10)) || 'Not valid'
  ]
]
```

<br />

### Forms

Validate form inputs on blur

```html[template]
<v-text-field :rules="rules" validate-on-blur />
```

https://vuetifyjs.com/en/components/forms/

<br />

## Reference

https://vuetifyjs.com/
