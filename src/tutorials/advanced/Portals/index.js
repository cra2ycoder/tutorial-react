import React from 'react'
import ReactDOM from 'react-dom'

function Modal(props) {
  const { handleClick } = props
  return (
    <div>
      <h2>Modal</h2>
      <p>You have a message!</p>
      <button onClick={handleClick}>CLOSE</button>
    </div>
  )
}

class Portals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleModal: false,
      handleClick: this.handleButtonClick.bind(this),
    }
  }
  handleButtonClick = e => {
    e.preventDefault()
    this.setState({
      toggleModal: !this.state.toggleModal,
    })
  }
  render() {
    const { toggleModal } = this.state
    //
    return (
      <>
        {toggleModal ? (
          ReactDOM.createPortal(<Modal {...this.state} />, document.body)
        ) : (
          <button onClick={this.handleButtonClick}>SHOW MODAL!</button>
        )}
      </>
    )
  }
}

ReactDOM.render(<Portals />, document.getElementById('portals'))
