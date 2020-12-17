---
title: dom
description: javascript, dom, html, web
---

## Custom events with IE 11 fallback

```js
// Create a render event
var event;
if (trueTypeOf(window.CustomEvent) === 'function') {
	event = new CustomEvent('render', {
		bubbles: true
	});
} else {
	event = document.createEvent('CustomEvent');
	event.initCustomEvent('render', true, false, null);
}

// Dispatch the render event
window.dispatchEvent(event);
```

[Custom events in Internet Explorer with vanilla JS](https://gomakethings.com/custom-events-in-internet-explorer-with-vanilla-js/)
[CustomEvent - mdn](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

<br />
