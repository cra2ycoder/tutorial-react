import React from 'react'

class ConditionalOperator extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  render() {
    const { isLoggedIn } = this.props
    return <button>{isLoggedIn ? 'LOGOUT' : 'LOGIN'}</button>
  }
}

export { ConditionalOperator }
export default ConditionalOperator
