---
title: vue
description: javascript, framework
---

### Emit an event with payload value

```javascript[child]
// set event listener with value argument
<button @click="increase(1)">

// pass value as parameter to emit function
methods: {
  increase (num) {
    this.$emit('increase-counter', num)
  }
}
```

```javascript[parent]
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

```javascript
// Add a ref to the input element
<input ref="searchbar">

// Set focus when component is mounted
mounted() {
  this.$refs.searchbar.focus()
}
```

<br />

## Reference

[Vue2](https://vuejs.org)<br />
[Vue3](https://v3.vuejs.org)<br />
