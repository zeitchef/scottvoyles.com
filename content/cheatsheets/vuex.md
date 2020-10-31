---
title: vuex
description: vue, state management, library, javascript
---

### Installation

```bash
yarn add vuex@next --save
```

```js[main.js]
import { createApp } from 'vue'
import { createStore } from 'vuex'

const app = createApp({})
const store = createStore({})

app.use(store)
```

### State

- like `data()` on component instance
- must return an object with state

```js[store]
const store = createStore({
  state() {
    return {
      counter: 0
    }
  }
})
```

```js[component]
computed: {
  counter () {
    return this.$store.state.counter // best to use a getter
  }
}
```

### Mutations

- register on store in `mutations` object
- call a mutation using `this.$store.commit(<mutation-name>, [payload])`
- pass data using `payload`

```js[store]
mutations: {
  increment (state, payload) {
    state.counter += payload
  }
}
```

```js[component]
methods: {
  incrementCounter (value) {
    this.$store.commit('increment', value)
  }
}

// another approach: commit an object
methods: {
  incrementCounter (value) {
    this.$store.commit({
      type: 'increment',  // name of mutation
      value               // payload
    })
  }
}
```

### Getters

- reduce code duplication
- like computed properties directly in store
- access via `this.$store.getters`

```js[store]
getters: {
  counter (state, [getters]) {
    return state.counter
  }
}
```

```js[component]
computed: {
  counter () {
    return this.$store.getters.counter
  }
}
```

## Reference

https://vuex.vuejs.org/
