---
title: vue
description: javascript, framework
---

### Emit an event with payload value

```js[child]
// set event listener with value argument
<button @click="increase(1)">

// pass value as parameter to emit function
methods: {
  increase (num) {
    this.$emit('increase-counter', num)
  }
}
```

```js[parent]
// listen for event with payload passed as $event
<ChildComponent @increase-counter="increaseCounter($event)" />

// pass payload as parameter to function
methods: {
  increaseCounter(value) {
    this.counter += value
  }
}
```

### Set focus on an input

```js
// Add a ref to the input element
<input ref="searchbar">

// Set focus when component is mounted
mounted() {
  this.$refs.searchbar.focus()
}
```

### Prop Validations

```js
props: {
  // basic type check, null and undefined pass
  propA: Array|Boolean|Date|Function|Object|Number|String|Symbol,

  // multiple value types
  propB: [Number, String],

  // required values
  propC: {
    type: String,
    required: true
  },

  // default values
  propD: {
    type: Number,
    default: 100
  },

  // object/array defaults must return factory function
  propE: {
    type: Object,
    default: function() {}
  },

  // custom validator function
  propF: {
    validator: function (value) {
      // run your custom validation here
    }
  }
}
```

https://v3.vuejs.org/guide/component-props.html#prop-validation

<br />

### Non-prop attributes

- attributes not found in props or emits
- accessed via $attrs property

```html
<!-- Non-prop attrs 'fall through' to root node -->
<date-picker data-status="activated"></date-picker>

<!-- Rendered date-picker component -->
<div class="date-picker" data-status="activated">
  <input type="datetime" />
</div>
```
https://v3.vuejs.org/guide/component-attrs.html

<br />

### Binding all props

```js
// component now has access to 'first' and 'last' props
<user-data v-bind="person"></user-data>

data () {
  return {
    person: { first: 'Scott', last: 'Voyles' }
  }
}
```

<br />

## Reference

[Vue2](https://vuejs.org)<br />
[Vue3](https://v3.vuejs.org)<br />
