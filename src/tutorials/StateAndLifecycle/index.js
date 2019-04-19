import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 */
class Clock extends React.Component {
  constructor(props) {
    super(props)

    // declaring state
    this.state = {
      date: new Date(),
    }
  }

  updateTime() {
    this.setState({
      date: new Date(),
    })
  }

  // this will be triggered once the component mounted
  componentDidMount() {
    this.timer = setInterval(() => this.updateTime(), 1000)
  }

  // this will be triggered before the component gets destroyed
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { date } = this.state
    return <h1>{date.toLocaleTimeString()}</h1>
  }
}

ReactDOM.render(<Clock />, document.getElementById('state-and-lifecycle'))
