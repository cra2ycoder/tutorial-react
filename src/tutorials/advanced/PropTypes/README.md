# PropTypes

- has moved into different package since `v15.5`
- package name:`prop-types`
- used to resolve typechecking bugs
- **NOTE:** only applicable for react `components`

## Advantages

- its like validators
- used to validate the receiving data type
- `propTypes` typechecking happens after `defaultProps` resolved
- so its applicable for `defaultProps` as well

## Usage

- type 1

```jsx
import PropTypes from 'prop-types'

class MyComponent extends React.Component {
  render() {
    return ''
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  age: PropTypes.number,
}
```

- type 2

```jsx
class Profile extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    list: PropTypes.array,
  }
  render() {
    const { name, age, list } = this.props
    return ''
  }
}
```

## Example

- on the below example, you can see that the red lines on the props got removed in the second image after assigning the prop types to the component

![](https://cra2ycoder.sirv.com/tutorial-react/proptypes.png)
