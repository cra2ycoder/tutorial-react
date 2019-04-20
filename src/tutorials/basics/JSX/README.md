# JSX

## Expression

```jsx
// example 1
const userName = 'John'
<h2>Hello, {userName}</h2> // <h2>Hello, John</h2>


// example 2
function getUserName(user) {
  return user.firstName + ' ' + user.lastName
}

const userData = {
  firstName: 'John',
  lastName: 'Doe',
}

<h3>User Name: {getUserName(userData)}</h3> // <h3>UserName: John Doe</h3>
```

## Attributes

- React attributes basically camelCase
  - class -> className
  - tabindex -> tabIndex

```jsx

// input
<div className="cls-name" tabIndex="0">
  Attribute Element
</div>

// output
<div class="cls-name" tabindex="0">
  Attribute Element
</div>
```
