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

  /**
   * @description
   * 1. getting the value from TimeFrom
   * 2. convert the value
   * 3. assign to state
   */
  convertHoursToMins = hours => {
    this.setState({
      hours: hours,
      mins: hours * 60,
    })
  }

  /**
   * @description
   * 1. getting the value from TimeFrom
   * 2. convert the value
   * 3. assign to state
   */
  convertMinsToHours = mins => {
    this.setState({
      hours: mins / 60,
      mins: mins,
    })
  }

  render() {
    /**
     * @description
     * 1. get the hours and mins from state
     * 2. assign as prop value to the TimeForm
     * 3. Pass TimeCalculator global function as callback to TimeForm
     */
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
