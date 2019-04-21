# Effect Hooks

- used to do the side effects in the function components
- `Effect Hooks` is combination three react component life cycles

  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount

## Core pieces

- works as like react life cycle
- also helps to cleanup from memory leak issues

## syntax

```jsx
import React, { useState, useEffect } from 'react'

// type 1
useEffect(() => {
  // statements
}, [cleanup value])

// type 2
useEffect(() => {
  // statements

  // cleanup function
  return function cleanup() {}
})
```

## Reference Link

https://reactjs.org/docs/hooks-effect.html
