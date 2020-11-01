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

- like `data()` on component instances
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
- must be synchronous

```js[store]
mutations: {
  increment (state, payloa) {
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
- getters can depend on other getters

```js[store]
getters: {
  counter (state) {
    return state.counter
  },
  doubledCounter (_, getters) { // _ is an unused, but required argument
    return getters.counter * 2
  }
}
```

```js[component]
computed: {
  counter () {
    return this.$store.getters.counter
  },
  doubled () {
    return this.$store.getters.doubledCounter
  }
}
```

### Actions

- allow asynchronous code with mutations
- actions can commit mutations, dispatch other actions and access getters
- best practice: dispatch actions rather than commit mutations

```js[store]
mutations: {
  increment (state, payload) {
    store.counter += payload
  }
},
actions: {
  increment (context, payload) {
    setTimeout(() => {
      context.commit('increment', payload)
    }, 2000)
  }
}
```

```js[component]
methods: {
  incrementCounter (value) {
    // dispatch action rather than commit mutation
    this.$store.dispatch('increment', value)
  }
}
```

## Reference

https://vuex.vuejs.org/
