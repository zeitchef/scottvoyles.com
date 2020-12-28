---
title: object
description: javascript, datastructure, fundamentals
---

### Validate

```js
let obj = {}

// typeof, instanceof
typeof obj              //> 'object'
obj instanceof Object   //> true
```

<br />

### Create

```js
// literals
const objLiteral = {}

// new keyword
let obj2 = new Object() // instaniate object from prototype constructor
let obj3 = new Object({})
let obj4 = new Object({ notEmpty: true }) // instaniate object with own properties
let obj5 = Object()

// Object.create(), Object.assign()
let obj6 = Object.create(createLiteral) // create object, setting prototype
let obj7 = Object.assign(obj3, obj4) // create object with own properties from target to source

// Creating objects of different types (not useful)
let createString = new Object('hello')
let createArray = new Object([1, 2, 3])
let createBoolean = new Object(true)
let createUndefined = new Object(undefined)
let createNull = new Object(null)
```

<br />

### Limiting

```js
// Object.freeze()
// Object.seal()
// Object.isFrozen()
// Object.isSealed()
```
