---
title: array
description: javascript, datastructure, fundamentals
---

### Properties

```javascript
Array.prototype.length      //> Boolean
```

### Detecting

```javascript
Array.isArray(arr)
```

### Creating

```javascript
// array literals
const arr1 = []
const arr2 = [1,2,3]          // batch construct
const arr3 = [...arr2, 4, 5]  // spread operator

// array constructors
const arr = new Array()
const arr = new Array('one', 'two')
const arr = new Array(10)

// array conversions
// must be array-like or iterable, ie. String, Map, Set, HTMLNodeList, etc.
Array.from()
Array.of()
```

### Reading

```javascript
Array[index]
```

### Adding/Appending

```javascript
Array.prototype.push()
Array.prototype.unshift()

// Appending to an array
arr.push(value)
Array[Array.length] = value
```

### Deleting

```javascript
Array.prototype.pop()
Array.prototype.shift()
Array.prototype.splice()

// delete keyword

// emptying an array
let arr = []
let arr.length = 0
arr.splice(0)               // remove from index 0 to end of array
```

### Modifying/Updating

```javascript
// split(), join()
// Pruning - Array.length = value
// Changing - Array[index] = value
// Combining = [arr1, arr2]
// Combining - concat()
// Replacing - splice()
// Filling - fill()
// Flattening - flat()
```

### Searching

```javascript
includes()                  //> Boolean
find(), findIndex()         //> String
indexOf(), lastIndexOf()    //> Number
some(), every()             //> Boolean
```

### Sorting

```javascript
Array.prototype.sort()
Array.prototype.reverse()

// Sorting an array of numbers
arr.sort()                  // [1,2,3,4,5]
arr.sort().reverse()        // [5,4,3,2,1]

// Sorting with comparison functions
arr.sort((a, b) => a - b)   // [1,2,3,4,5]
arr.sort((a, b) => b - a)   // [5,4,3,2,1]
```

### Copying/Cloning

```javascript
// only useful for primitive values

const arr2 = [...arr1]      // shallow copy
```

### Converting

```javascript
toString()
toLocaleString()
```
<br />

## Reference

[Array - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<br />
