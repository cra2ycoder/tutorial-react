# Hooks

- New addition from `16.8` react release
- helps us to use `state` and other react `features` **without using `class`**

- **Completely opt-in**

  - you can try using with existing components that you have

- **100% backwards-compatible**

  - NO BREAKING Changes in Hooks

- **No plans to remove class components**

  - Hooks is just additional features for React, so existing features will not be deprecated

- **Hooks provides direct API**

  - you may already familier with: `props, state, context, ref and lifecycle.`
  - Hooks just provide you alternate powerful way to work on the same features.

- **Update your all packages when updating react**
  - while updating `react` update the `reactDOM` when you trying to get the updates for hooks

## Why Hooks?

- **Hooks allow you to reuse stateful logic without changing your component hierarchy**
- **Helps to split one component into multiple small functions and handles lifecycle easily**
- **Hooks let you use more of React's features without classes**

- **render:**
  - as the hooks are functional components means just like functions, so no render() will be required

## Core pieces

- **State Hook:** (state management)

  - `this.state + this.setState => useState()`

- **Effect Hook** (life cycle)

  - `componentDidMount + componentDidUpdate + componentWillUnmount` => `useEffect()`
  - `componentDidCatch + getDerivedStateFromError` => there are no hooks methods yet but will be added soon.

- **Custom Hooks** (build our own hooks)
- **Other Hooks** (using context with hooks)

## ESLint support for Hooks

- add the following package in your `devDependencies`

```json
devDependencies: {
    "eslint-plugin-react-hooks": "1.6.0"
}
```

- and run the following command to install

```
yarn install
```

- add configuration in `.eslintrc.json`

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Rules of Hooks

- Don't call Hooks **inside loops, conditions, or nested functions**
  - instead always use at the top level in the react function components
- Add ESLint plugin for hooks lints `eslint-plugin-react-hooks` (see above)
- Hooks are called based on the order which declared in the code flow
- DON'T make any conditions on the hooks function instead use inside of it

  - wrong

  ```jsx
  // 🔴 We're breaking the first rule by using a Hook in a condition
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name)
    })
  }
  ```

  - correct

  ```jsx
  useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name)
    }
  })
  ```

---

# Custom Study for Sharing

## Why Hooks?

- minimal code
- easy to understand and takes very less time to implement
- **100%** backward compatible
- comes with `eslint-plugin-react-hooks` (need to add the package)
- **NO MORE Classes**, just simply requires function based components
- **NO MORE Life cycle** to handle/update the data, `useState() and useEffect()` will take care everything automatically
- Data flow with all the component tree from main component - can be done very easily with use of `useContext()` - To be simple, **NO MORE Consumer** with the simple static data components inside the code
- **flexible and re-usable**, can be multiple into very small small pieces without code breaking
- also can be done `custom hooks`

## State Hook - useState()

- for state management
- `this.state + this.setState()` => **useState()**

**How to use?**

```jsx
import React, { useState } from 'react'

/**
 * @description
 * @declare
 * {name} -> consider as a property
 * {setName} -> its a function, used to update the value of a name
 * 'joe' -> default value of the name
 */
const [name, setName] = useState('Joe')

/**
 * @usage
 * automatically re-render will be called when click on the button
 */
setName('Michael')
```

---

**Example**

```jsx
import React, { useState } from 'react'

function MyComponent(props) {
  const [name, setName] = useState('Joe')
  function updateName(e) {
    setName('Michael')
  }
  return (
    <>
      <div>{name}</div>
      <button onClick={updateName}>Submit</button>
    </>
  )
}
```

## Effect Hook - useEffect()

- for life cycle based state and data management
- `componentDidMount + componentDidUpdate + componentWillUnmount` => **useEffect()**

**How to use?**

- default

```jsx
/**
 * @declaration
 */
function lifeCycleFunction() {
  const url = ''
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // statement goes here
    })
    .catch(err => err)
}

/**
 * @type0
 * lifeCycleFunction -> this function will be triggered automatically
 * when componentDidMount() + componentDidUpdate() life cycle methods happens
 */
useEffect(lifeCycleFunction)
```

- when only required to run for two life cycles **compoundDidMount** and **componentWillUnMount**

```jsx
/**
 * @type1
 * [] -> uses only the componentDidMount + componentWillUnmount life cycle
 * only once
 */
useEffect(() => {}, [])
```

- when you want to skip running the life cycle update for same value

```jsx
/**
 * @type2
 * name === 'joe' -> useEffect won't trigger any life cycle
 * only works for different name
 */
const [name, setName] = useState('joe')
useEffect(() => {}, [name])
```

- when you need clean something on each life cycle happens
- ex: event listeners, object memory etc.,

```jsx
/**
 * @type3
 * name === 'joe' -> useEffect won't trigger any life cycle
 * only works for different name
 */
const [name, setName] = useState('joe')
useEffect(() => {
  // we need add clean function with return syntax
  return () => {
    // clean statement need to be written here
  }
}, [name])
```

---

**Example**

```jsx
import React, { useState, useEffect } from 'react'

function MyComponent(props) {
  const [apiData, setAPIData] = useState({})

  useEffect(() => {
    const url = ''
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAPIData(data)
      })
      .catch(err => err)
  })

  return (
    <>
      <div>{apiData.name}</div>
      <div>{apiData.info}</div>
      <div>{apiData.reference}</div>
    </>
  )
}
```

## Context Hook - useContext()

- to use context with the component
- most simplified way

- syntax

```jsx
import React, { useContext } from "react";

// context creating
const MyContext = React.createContext({ name: "joe", age: 30 });

// assigning with useContext
const currentContext = useContext(MyContext);

// getting value
<div>{currentContext.name}</div>
<div>{currentContext.age}</div>
```

- sample

```jsx
import React, { useContext } from 'react'
const MyContext = React.createContext({ name: 'joe', age: 30 })

function MyComponent() {
  const currentContext = useContext(MyContext)
  return (
    <>
      <div>{currentContext.name}</div>
      <div>{currentContext.age}</div>
    </>
  )
}
```

---

## FAQ

https://reactjs.org/docs/hooks-faq.html#which-versions-of-react-include-hooks
