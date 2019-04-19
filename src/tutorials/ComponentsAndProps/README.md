# Components and Props

- specifically for UI independent
- reusable pieces

## Basic react component with function and props

- code

```jsx
function User(props) {
  const { name } = props
  return <div>{name}</div>
}

<User name="John" />
<User name="Michael" />
```

- result

```jsx
<div>John</div>
<div>Michael</div>
```

## Basic react component with ES6 class

- code

```jsx
class UserComponent extends React.Component {
  render() {
    const { name } = this.props
    return <h2>{name}</h2>
  }
}
<UserComponent name="James" />
<UserComponent name="Amaya" />
```

- result

```jsx
<div>James</div>
<div>Amaya</div>
```

## using multiple component

```jsx
// to display profile pic
class ProfileIcon extends React.Component {
  render() {
    const { photoUrl } = this.props
    return (
      <div>
        <img src={photoUrl} />
      </div>
    )
  }
}

// to display user name
class PersonInfo extends React.Component {
  render() {
    const { firstName, lastName } = this.props
    return (
      <div>
        {firstName} {lastName}
      </div>
    )
  }
}

// main component
class Person extends React.Component {
  render() {
    return (
      <>
        <ProfileIcon photoUrl="https://via.placeholder.com/150" />
        <PersonInfo firstName="john" lastName="doe" />
      </>
    )
  }
}

// person component will add ProfileIcon and PersonInfo
const view = <Person />
```
