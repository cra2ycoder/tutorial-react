import React from 'react'

class SimpleIF extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  render() {
    const { isLoggedIn } = this.props
    let view = null
    if (isLoggedIn) {
      view = <button>Login</button>
    } else {
      view = <button>Logout</button>
    }
    return view
  }
}

export { SimpleIF }
export default SimpleIF
