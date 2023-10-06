# Helpful Info

## `app.js`

`app.js` is the entry file for your code. This file must not be renamed and must export an `App` component.

## Imports in the Browser

Browser imports require a file extension.

Bad:

```js
import { Component } from "./component";
```

Good:

```js
import { Component } from "./component.js";
```

References:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

## JSX via HTM

`html` helper is available globally. This helper enables a compiler-free JSX experience.

NOTE: htm is 98% the JSX you're probably used to writing, but it has a few syntax differences you need to be aware of. Please checkout the documentation listed below in References for complete examples.

Example (JSX):

```js
return (
  <div>
    <Component prop="truth" prop2={aVar} />
  </div>
);
```

Example (htm-equivalent):

```js
return html`<div><${Component} prop="truth" prop2=${aVar} /><//>`;
```

References:

- https://github.com/developit/htm

## React

React is available using `window.React`.

Example:

```js
const { useState } = React;
```

References:

- https://reactjs.org/

## Emotion

Emotion is available using `window.emotion`.

Example:

```js
const { css, cx } = emotion;
```

References:

- https://emotion.sh/docs/emotion
