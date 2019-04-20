import React from 'react'

class EventFunctionType extends React.Component {
  plainFunctionCall(e) {
    console.log(this) // undefined
    console.log(e) // works
  }

  arrowFunctionCall = e => {
    console.log(e) // works
    console.log(this) // works
  }

  arrowFnWithPlainFunction() {
    console.log(this) // works
    console.log(e) // throws error
  }

  arrowFuncWithEventArgPassed(e) {
    console.log(this) // works
    console.log(e) // works
  }

  getExtraArgumentsFromOnClick(e, type) {
    console.log(this) // works
    console.log(e) // works
    console.log(type) // works
  }

  render() {
    return (
      <>
        <button onClick={this.plainFunctionCall}>plain function</button>
        <button onClick={this.arrowFunctionCall}>arrow function</button>
        <button onClick={() => this.arrowFnWithPlainFunction()}>
          arrow func + plain function
        </button>
        <button onClick={e => this.arrowFuncWithEventArgPassed(e)}>
          arrow function + event arg passed
        </button>
        <button
          onClick={e => this.getExtraArgumentsFromOnClick(e, 'mouse event')}
        >
          arrow function + event arg + extra arg
        </button>
        <button
          onClick={this.getExtraArgumentsFromOnClick.bind(this, 'mouse event')}
        >
          arrow function + event arg + extra arg + using bind
        </button>
      </>
    )
  }
}

export { EventFunctionType }
export default EventFunctionType
