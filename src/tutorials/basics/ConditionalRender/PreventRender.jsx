import React from 'react'

class PreventRender extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    message: '',
  }

  getMessageView = message => {
    if (message === undefined || message.length === 0) {
      return null
    }
    return <div>{message}</div>
  }

  render() {
    const { message } = this.props
    return this.getMessageView(message)
  }
}

export { PreventRender }
export default PreventRender
