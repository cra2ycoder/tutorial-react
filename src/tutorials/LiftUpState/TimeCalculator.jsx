import React from 'react'
import ReactDOM from 'react-dom'
import TimeForm from './TimeForm'

class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hours: 0,
      mins: 0,
    }
  }

  convertHoursToMins = hours => {
    this.setState({
      hours: hours,
      mins: hours * 60,
    })
  }

  convertMinsToHours = mins => {
    this.setState({
      hours: mins / 60,
      mins: mins,
    })
  }

  render() {
    const { hours, mins } = this.state
    return (
      <>
        <TimeForm
          title="Hours"
          result={hours}
          onUpdateCbk={this.convertHoursToMins}
        />
        <TimeForm
          title="Minutes"
          result={mins}
          onUpdateCbk={this.convertMinsToHours}
        />
      </>
    )
  }
}

export { TimeCalculator }
export default TimeCalculator
