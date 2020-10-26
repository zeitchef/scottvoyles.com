---
title: fetch
description: fetch resources asynchronously
tags:
  - javascript
  - api
---
### Syntax

```js
fetch(url, options)
  .then(response => // handle successfull response)
  .catch(error => // handle network error)
```

### Examples

#### Get JSON from a URL

```js
fetch('https://api.github.com/orgs/nodejs')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))
```

#### Adding users from an API to the DOM

```js
const url = 'https://jsonplaceholder.typicode.com/users'

async function fetchTodos() {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

function addUsersToDom(users) {
  let todosNode = document.querySelector('#todos')
  let fragment = new DocumentFragment()

  users.forEach(user => {
    const section = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    p.innerText = user.email
    h3.innerText = user.name
    section.appendChild(h3)
    section.appendChild(p)

    fragment.appendChild(section)
  })

  todosNode.appendChild(fragment)
}

fetchTodos()
  .then(users => addUsersToDom(users))
  .catch(error => error.message)
```

#### Posting and HTML form

```js
postForm('http://example.com/api/v1/users', 'form#userEdit')
  .then(data => console.log(data))

function postForm(url, formSelector) {
  const formData = new FormData(document.querySelector(formSelector))

  return fetch(url, {
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: formData  // a FormData will automatically set the 'Content-Type'
  })
  .then(response => response.json())
  .catch(error => console.error(error))
}
```

## Reference

[Fetch API - mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br />
[You may not need Axios](https://danlevy.net/you-may-not-need-axios/)<br />
[Fetch](https://github.github.io/fetch/)<br />
