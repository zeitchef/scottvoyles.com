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

Objects can be created by:

1. object literals
2. the `new` keyword
3. Object.create or Object.assign

```js
// literals
const obj = {}

// new keyword
let o2 = new Object() // instaniate object from prototype constructor
let o3 = new Object({})
let o4 = new Object({ notEmpty: true }) // instaniate object with own properties
let o5 = Object()

// Object.create(), Object.assign()
let o6 = Object.create([prototype]) // create object, setting prototype
let o7 = Object.assign(obj3, obj4) // create object with own properties from target to source

// Creating objects of different types (not useful)
let createString = new Object('hello')
let createArray = new Object([1, 2, 3])
let createBoolean = new Object(true)
let createUndefined = new Object(undefined)
let createNull = new Object(null)
```

<br />

### Limit

```js
// Object.freeze()
// Object.seal()
// Object.isFrozen()
// Object.isSealed()
```

### Serialize

Object serialization is the process of converting an object’s state to a string from which it can later be restored.

```js
let obj = { x: 1, y: { z: [false, null, ""] } }

// JSON.stringify
let s = JSON.stringify(obj)
//> '{"x":1,"y":{"z":[false,null,""]}}'

// JSON.parse
let p = JSON.parse(string)
//> { x: 1, y: { z: [false, null, ""] } }
```

<br />
