# Conditional Rendering

- types:
  - simple if
  - if else
  - simple if + logical && Operator
  - conditional operator
  - prevent (return null)

**simple if**

```jsx
const isLoggedIn = false

let view = <button>Login</button>
// simple if rendering
if (isLoggedIn) {
  view = <button>Logout</button>
}
```

**if else**

```jsx
const isLoggedIn = false

// if else rendering
if (isLoggedIn) {
  view = <div>Welcome, you are successfully Logged in!</div>
} else {
  view = (
    <>
      <div>Please Login</div>
      <button>Login</button>
    </>
  )
}
```

---

**simple if + logical && Operator**

- true && expression => returns expression
- false && expression => returns false

```jsx
const message = ''
const view = (
{ message.length > 0 && (
    <>
      <div>you have a message!</div>
      <div>{message}</div>
    </>
  )
})
```

**Conditional Operator**

- condition ? true : false

```jsx
const { isLoggedIn } = this.props
return <button>{isLoggedIn ? 'LOGOUT' : 'LOGIN'}</button>
```

**Preventing**

- return null

```jsx
const getMessageView = message => {
  if (message === undefined || message.length === 0) {
    return null
  }
  return <div>{message}</div>
}
```
