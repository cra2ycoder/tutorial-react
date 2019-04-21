# State Hook

- class components (this.state + this.setState) => useState()
- to have state hook in our code, we should use `useState()`
- `useState()` -> returns an array with two elements

  - 0: element -> the value of state
  - 1: element -> the function which will be using for updating the state value

- declaring the `useState()` in our code

```jsx
import React, { useState } from 'react'
const [count, setCount] = useState(0)
// count -> is the value
// setCount -> is the function
// useState() -> is a function from React package
// 0 -> says default value, so count -> 0
```

## Notes

- we can have `n` of `useState()` in one function component
- naming on the variables inside the array is not strict, we can have any
  for underStanding, keep the value variable and function name similar to understand

## example

- single `useState()` -> `Counter.jsx`
- multiple `useState()` -> `Greetings.jsx`