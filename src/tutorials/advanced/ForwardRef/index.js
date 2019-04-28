import React from 'react'
import ReactDOM from 'react-dom'

const EmailInput = React.forwardRef((props, ref) => {
  console.log(ref)
  console.log(props)
  return <input ref={ref} {...props} />
})

class FancyButton extends React.Component {
  constructor(props) {
    super(props)
    this.emailRef = React.createRef()
  }

  handleClick = e => {
    e.preventDefault()
    this.emailRef.current.focus()
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <EmailInput ref={this.emailRef} placeholder="enter email" />
        <button onClick={this.handleClick}>Focus</button>
      </form>
    )
  }
}

ReactDOM.render(<FancyButton />, document.getElementById('forward-ref'))
