# PropTypes

- has moved into different package since `v15.5`
- package name:`prop-types`
- used to resolve typechecking bugs

## Advantages

- its like validators
- used to validate the receiving data type
- `propTypes` typechecking happens after `defaultProps` resolved
- so its applicable for `defaultProps` as well

## Usage

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
