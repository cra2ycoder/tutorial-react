# Ref

- used to store the element
- provide support to access that in different places in the class

## when to use?

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

## Creating Refs

- type 1

```jsx
this.elementRef = React.createRef()
```

- type 2

```jsx
import React, { createRef } from 'react'
this.elementRef = createRef()
```

## Accessing Ref

- `current` property name is used to get the element from the `ref`

```jsx
const element = this.elementRef.current
```

## Callback Ref

- callback ref doesnt require `createRef` function
- its like manual declaration

- declaring

```jsx
this.element = null

// this function will automatically gets triggered
// when the ref attribute added to the element
// and that returns the current element
this.elementRef = el => {
  this.element = el
}
```

- usage

```jsx
// note, here we dont require any `current` property by default
this.element

// while doing any manipulation with this.element
// make sure to check the element existence
// because initially it will be empty
if (this.element) {
  const value = this.element.value
}
```
