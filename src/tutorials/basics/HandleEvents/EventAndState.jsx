import React from 'react'

class EventAndState extends React.Component {
  constructor(props) {
    super(props)

    // declaring state
    this.state = {
      shouldToggle: false,
    }
  }

  // updating the state on button click
  handleClick = () => {
    this.setState((state, props) => ({
      shouldToggle: !state.shouldToggle,
    }))
  }

  render() {
    const { shouldToggle } = this.state
    return (
      <button onClick={this.handleClick}>{shouldToggle ? 'ON' : 'OFF'}</button>
    )
  }
}

export { EventAndState }
export default EventAndState
