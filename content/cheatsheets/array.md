---
title: array
description: javascript, datastructure, fundamentals
---

### Properties

```javascript
Array.prototype.length
```

### Detect

```javascript
Array.isArray(arr)            //> Boolean
```

### Create

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

### Read

```javascript
Array.prototype.slice()

// read value at index
Array[index]

// return shallow copy of a section of array
Array.slice(1, 4)             // return items from index 1 to 4
```

### Add/Append

```javascript
Array.prototype.push()
Array.prototype.unshift()

// Appending to an array
arr.push(value)
Array[Array.length] = value
```

### Delete

```javascript
Array.prototype.pop()
Array.prototype.shift()
Array.prototype.splice()

// delete keyword

// emptying an array
let arr = []
let arr.length = 0
arr.splice(0)                 // remove from index 0 to end of array
```

### Modify/Update

```javascript
Array.prototype.split()
Array.prototype.join()
Array.prototype.concat()
Array.prototype.splice()
Array.prototype.fill()
Array.prototype.flat()

Array.length = value          // prune an array
Array[index] = value          // changing value at index

[...arr1, ...arr2]            // combining arrays, destructuring
arr1.concat(arr2)             // combining arrays, concat

arr.splice(1, 1, 'hi')        // at index 1, for 1 element, replace with 'hi'
arr.fill(0, 2, 4)             // fill array with 0, from index 2 to 4

[1, [2, [3, 4]]].flat(2)      // flatten array 2 levels deep
```

### Iterate

```javascript
Array.prototype.forEach()
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()
```

### Search

```javascript
Array.prototype.includes()    //> Boolean
Array.prototype.find()        //> String
Array.prototype.findIndex()   //> String
Array.prototype.indexOf()     //> Number
Array.prototype.lastIndexOf() //> Number
Array.prototype.some()        //> Boolean
Array.prototype.every()       //> Boolean

// check if value exists
Array.includes(value)

// find first value that equals 10
Array.find(n => n == 10)

// find index of first element that is greater than 5
Array.findIndex(n => n > 5)

// check if any n is greater than 5
Array.some(n => n > 5) //> Boolean

// check if every n is even
Array.every(n => n % 2 == 0) //> Boolean
```

### Sort

```javascript
Array.prototype.sort()
Array.prototype.reverse()

// Sorting an array of numbers
arr.sort()                    // [1,2,3,4,5]
arr.sort().reverse()          // [5,4,3,2,1]

// Sorting with comparison functions
arr.sort((a, b) => a - b)     // [1,2,3,4,5]
arr.sort((a, b) => b - a)     // [5,4,3,2,1]
```

### Copy/Clone

```javascript
// only useful for primitive values

const arr2 = [...arr1]        // shallow copy
```

### Convert

```javascript
Array.prototype.toString()
Array.prototype.toLocaleString()

arr.toString()                // convert arr to string
String(arr)                   // convert arr to string

arr.toLocaleString()
```

## INBOX

```javascript
Array.prototype.copyWithin()

Array.prototype.keys()
Array.prototype.values()
Array.prototype.entries()

Array.prototype.flatMap()
Array.prototype.reduceRight()
```

<br />

## Reference

[Array - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<br />
