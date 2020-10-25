---
title: vuex
---

### Installation

```bash
# Vue 2
yarn add vuex

# Vue 3
yarn add @vuex/next --save
```

### Setup

```bash
# Vue 2
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

# Vue 3
import { createApp } from 'vue'
import { createStore } from 'vuex'

const app = createApp({})
const store = createStore({})

app.use(store)
```

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

<span class="scrolltop">[Go to top](#top)</span>

## Reference

[https://vuex.vuejs.org](https://vuex.vuejs.org)
