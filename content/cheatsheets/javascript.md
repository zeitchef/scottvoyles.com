---
title: javascript
description: fundamentals, tips
---

### Conditional assignment

Avoid throwing errors with the optional chaining feature:

```js
const person = {
  name: 'Scott Voyles'
}
const favoriteColor = person.favorites?.color
//=> undefined
```

[JavaScript Variable with Question Mark - rwieruch](https://www.robinwieruch.de/javascript-variable-question-mark)

Conditional assignment with ternary operator:

```js
let hungry = true;
let eat = hungry == true ? 'yes' : 'no'
//=> 'yes'
```

<br />
