import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// with propTypes assigned
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

ReactDOM.render(
  <>
    <Profile />
  </>,
  document.getElementById('prop-types')
)
