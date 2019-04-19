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
