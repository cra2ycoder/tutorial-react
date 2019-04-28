# React DOM

- this `api` used to play with `DOM`

## To Use

- with `script` tag:

```html
<script
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
  crossorigin
></script>
```

- with `ES6`

```jsx
import ReactDOM from 'react-dom'
```

- with `ES5`

```js
var ReactDOM = require('react-dom')
```

## APIs

- **render()**

  - used to render the `React DOM` elements in the actual `DOM` within the `container` specified

  ```jsx
  ReactDOM.render(elements, container, callback)
  ```

- **hydrate()**

  - same as `render()`
  - !!!unable to understand!!!

  ```jsx
  ReactDOM.hydrate(element, container[, callback])
  ```

* **unmountComponentAtNode()**

  - used to remove `mounted` components from the DOM
  - cleaning up events handlers and state

  ```jsx
  ReactDOM.unmountComponentAtNode(container)
  ```

* **findDOMNode()**

  - used to find the component node
  - better to use `ref` instead of this

  ```jsx
  ReactDOM.findDOMNode(component)
  ```

* **createPortal()**

  - used to render the DOM outside of the component

  ```jsx
  ReactDOM.createPortal(child, container)
  ```
