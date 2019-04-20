import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @description
 * simple dialog box
 */
class DialogBox extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <title>Dialog Box Title</title>
        {children}
      </div>
    )
  }
}

/**
 * @description
 * alert component which uses DialogBox component
 */
class Alert extends React.Component {
  render() {
    return (
      <DialogBox>
        <div>Alert</div>
        <div>I am from alert box component</div>
        <button>OK</button>
        <button>CANCEL</button>
      </DialogBox>
    )
  }
}

/**
 * @description
 * message component which uses DialogBox component
 */
class Message extends React.Component {
  render() {
    return (
      <DialogBox>
        <div>Message</div>
        <div>Your Message Successfully Posted!</div>
        <button>OK</button>
      </DialogBox>
    )
  }
}

ReactDOM.render(
  <>
    <Alert />
    <hr />
    <Message />
  </>,
  document.getElementById('compositions')
)
