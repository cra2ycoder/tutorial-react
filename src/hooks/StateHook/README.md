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
- naming on the variables inside the array is not strict, we can have any,
  but for understanding, keep the value name and function name similarly
- Please use `spread or rest operator (...)` when using `Array` and `Object` since `useState()` will merge the data and so it wont maintain any previous value

## example

- single `useState()` -> `Counter.jsx`
- multiple `useState()` -> `Greetings.jsx`
- multiple types of state with `useState()` -> `MultipleStateTypes.jsx`

## Reference Link

https://reactjs.org/docs/hooks-state.html
