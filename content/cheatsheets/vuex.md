---
title: vuex
description: vue, state management, library, javascript
---

### Basic Store

```js
// Vue 2
const store = new Vuex.store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// Vue 3
const store = createStore({
  state () {
    return (
      count: 0
    )
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

<br />

## Reference

[https://vuex.vuejs.org](https://vuex.vuejs.org)
