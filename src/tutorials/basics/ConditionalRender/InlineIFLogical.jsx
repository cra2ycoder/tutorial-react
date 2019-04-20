import React from 'react'

class InlineIFLogical extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    message: '',
  }

  render() {
    const { message } = this.props

    return (
      <>
        <div>Hello, User!</div>
        {message.length > 0 && (
          <>
            <div>you have a message!</div>
            <div>{message}</div>
          </>
        )}
      </>
    )
  }
}

export { InlineIFLogical }
export default InlineIFLogical
