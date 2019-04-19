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
    let view = <button>Login</button>
    if (isLoggedIn) {
      view = <button>Logout</button>
    }
    return view
  }
}

export { SimpleIF }
export default SimpleIF
