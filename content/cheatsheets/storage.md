---
title: storage
description: api, browser, localestorage, indexeddb, cookie, url, cache
---

# WIP: Storage

### local|sessionStorage

```js
// sessionStorage only persists for the duration of the session

setItem(key, value)
getItem(key)
removeItem(key)
```

### IndexedDB

```js
// can store files and blobs
// requires more code than localStorage
// localForage uses IndexedDB with localStorage-like API
```

### Cookies

```js
// only storage solution that is also shared with server
// sent in every request

// set cookie
document.cookie = 'key1=value1;key2=value2'
```

### URL query strings

```js
// only strings
// max length is limited

// access query search
window.location.search
```

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)<br />

<br />

### Cache API


```js
// network level
// cache network requests
// used originally with service workers

caches
```

[Caching Files with Service Worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)

<br />

## Reference

[A Primer on the Different Types of Browser Storage](https://css-tricks.com/a-primer-on-the-different-types-of-browser-storage/)<br />
