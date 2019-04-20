# State and Lifecycle

## State

- state is a private property of a component
- and its fully controlled by the Component

## Declaring a State

- syntax

```jsx
this.state = {
    prop1: propvalue1,
    prop2: propvalue2
    prop3: propvalue3
    ...
}
```

- example

```jsx
class StateExample extends React.Component {
  constructor(props) {
    super(props)

    // state declaring
    this.state = {
      date: new Date(),
    }
  }
  render() {
    return ''
  }
}
```

## Reading a State

- state can be read anywhere in the component

```jsx
// using a object destructuring
const { date } = this.state

// default
this.state.date
```

- example

```jsx
class StateExample extends React.Component {
  constructor(props) {
    super(props)

    // state declaring
    this.state = {
      date: new Date(),
    }
  }
  render() {
    // reading a state
    const { date } = this.state
    return ''
  }
}
```

## Updating state

- setState method is used to update the state

```jsx
this.setState({
  date: new Date(),
})
```

**NOTE:**

- cant be assigned like a property since that wont re-render the component

```jsx
// this wont re-render
this.state.date = new Date()

// have to use like this
this.setState({
  date: new Date(),
})
```

- when required to update the state with use of props

```jsx
// using arrow function
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}))

// using normal function
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment,
  }
})
```

---

## Merge state :(

- state merge the updates and there is no support for deep merge
- for example, please check the `UserProfile.jsx`

```jsx
// by default, when state declared
this.state = {
  info: {
    firstName: 'John',
    lastName: 'Doe',
  },
  picture: {
    photoUrl: 'https://via.placeholder.com/150',
  },
}

// stage 2: on the first state get updated after calling updateProfileData()
// lastName gets removed
this.state = {
  info: {
    firstName: 'Michael',
  },
  picture: {
    photoUrl: 'https://via.placeholder.com/150',
  },
}

// stage 3: on the first state get updated after calling updatePicture()
this.state = {
  info: {
    firstName: 'Michael',
  },
  picture: {
    photoUrl: 'https://via.placeholder.com/75',
  },
}
```
