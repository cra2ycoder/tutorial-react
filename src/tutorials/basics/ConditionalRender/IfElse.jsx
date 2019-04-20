import React from 'react'

class IfElse extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  render() {
    const { isLoggedIn } = this.props

    let view = null

    // if else rendering
    if (isLoggedIn) {
      view = <div>Welcome, you are successfully Logged in!</div>
    } else {
      view = (
        <>
          <div>Please Login</div>
          <button>Login</button>
        </>
      )
    }

    return view
  }
}

export { IfElse }
export default IfElse
