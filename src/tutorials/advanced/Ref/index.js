import React, { createRef } from 'react'
import ReactDOM from 'react-dom'

/**
 * @description
 * ref example
 */
class RefExample extends React.Component {
  constructor(props) {
    super(props)

    this.textInputRef = createRef()
  }

  focusInputBox = e => {
    e.preventDefault()
    this.textInputRef.current.focus()
  }

  render() {
    console.log(this.textInputRef)
    return (
      <>
        <input placeholder="enter a value" ref={this.textInputRef} />
        <button onClick={this.focusInputBox}>Focus</button>
      </>
    )
  }
}

/**
 * @description
 * ref example
 */
class CallbackRef extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = null
    this.textInputRef = element => {
      console.log(element)
      this.textInput = element
    }
  }

  focusInputBox = e => {
    e.preventDefault()
    if (this.textInput) {
      this.textInput.focus()
    }
  }

  render() {
    return (
      <>
        <input placeholder="enter a value" ref={this.textInputRef} />
        <button onClick={this.focusInputBox}>Focus</button>
      </>
    )
  }
}

ReactDOM.render(
  <>
    <CallbackRef />
    <RefExample />
  </>,
  document.getElementById('ref')
)
