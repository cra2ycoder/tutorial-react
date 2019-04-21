# Effect Hooks

- used to do the side effects in the function components
- `Effect Hooks` is combination of three react component life cycles or combined

  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount

## Core pieces

- works as like react life cycle
- also helps to cleanup from memory leak issues

## syntax

- basic

```jsx
import React, { useEffect } from 'react'

// type 1
useEffect(fn)

// type 2
function useEffectFn() {
  return
}
useEffect(useEffectFn)
```

- when required to cleanup on every `unMount` cases

```jsx
import React, { useEffect } from 'react'

// type 1
useEffect(() => {
  return function cleanup() {}
})

// type 2
useEffect(() => {
  return () => {}
})

// type 3
function cleaupFn() {}

function useEffectFn() {
  return cleaupFn
}
useEffect(useEffectFn)
```

- prevent from rendering for the same value for performance

```jsx
import React, { useState, useEffect } from 'react'
const [value, setValue] = useState(0)

// this will not be triggered when the previous value and current value is same
// like 1 === 1, 2 === 2 etc.,
useEffect(() => {}, [value])
```

- when only wanted to run the `componentDidMount` and `componentWillUnmount`
  like `mount` and `unmount` to do so, we need to return `cleanup` function, with second argument as empty array `[]`

```jsx
import React, { useEffect } from 'react'
useEffect(() => {
  // statements
  // cleanup function
  return function cleanup() {}
}, [])
```

## examples

- life cycle -> `EffectLifeCycle.jsx`

  - this shows how the `useEffect()` flow works

- window event listeners -> `WindowResize.jsx`

  - this shows how the event are added and removed when the clean function triggered

## Reference Link

https://reactjs.org/docs/hooks-effect.html
