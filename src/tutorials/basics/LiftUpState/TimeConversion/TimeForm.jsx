import React from 'react'
import ReactDOM from 'react-dom'

class TimeForm extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    title: 'undefined',
    result: 0,
    onUpdateCbk: () => {},
  }

  /**
   * @description
   * when input field gets changing the input value will be shared to TimeCalculator
   * to do the calculation
   */
  onInputChange = e => {
    const { onUpdateCbk } = this.props
    onUpdateCbk(e.target.value)
  }

  render() {
    const { title, result } = this.props
    return (
      <fieldset>
        <legend>{title}</legend>
        <input value={result} onChange={this.onInputChange} />
      </fieldset>
    )
  }
}

export { TimeForm }
export default TimeForm
