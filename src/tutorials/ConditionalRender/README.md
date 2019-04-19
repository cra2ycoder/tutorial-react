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
