import React from 'react'

class MoneyForm extends React.Component {
  static defaultProps = {
    type: '',
    result: 0,
    onUpdateCbk: () => {},
  }

  onInputChange = e => {
    const { onUpdateCbk } = this.props
    onUpdateCbk(e.target.value)
  }

  render() {
    const { type, result } = this.props
    return (
      <fieldset>
        <legend>{type}</legend>
        <input value={result} onChange={this.onInputChange} />
      </fieldset>
    )
  }
}

export { MoneyForm }
export default MoneyForm
