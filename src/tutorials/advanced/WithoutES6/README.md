# React without ES6

- Are you want to skip ES6 features still?
- then here we go:

**For Creating Classes**

- we should require `create-react-class`

```jsx
const createReactClass = require('create-react-class')
const Component = createReactClass({
  render: () => {
    return ''
  },
})
```

**For Class Props**

- required to use `getDefaultProps()` inside the function

```jsx
const createReactClass = require('create-react-class')
const Component = createReactClass({
  getDefaultProps: () => {
    return {
      name: 'mary',
      age: 23,
    }
  },
})
```

**For Class States**

```jsx
const createReactClass = require('create-react-class')
const Component = createReactClass({
  getInitialState: () => {
    return {
      count: 0,
    }
  },
})
```

**For More:**
https://reactjs.org/docs/react-without-es6.html
