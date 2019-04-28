import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/***
 * @example
 * type 1
 * prop types outside the class
 */
class Profile extends React.Component {
  render() {
    const { name, age, list } = this.props
    return ''
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
}

/**
 * @example
 * type 2
 * propTypes inside the class component
 */
class TypeDeclare2 extends React.Component {
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

/**
 * @example
 * type 3
 * propTypes + defaultProps
 *
 */

class TypeDeclare3 extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    list: PropTypes.array,
  }
  static defaultProps = {
    name: '',
    age: 0,
    list: [],
  }
  render() {
    const { name, age, list } = this.props
    return ''
  }
}

ReactDOM.render(
  <>
    <Profile />
    <TypeDeclare2 />
  </>,
  document.getElementById('prop-types')
)
