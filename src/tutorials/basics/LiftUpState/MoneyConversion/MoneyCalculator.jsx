import React from 'react'
import MoneyForm from './MoneyForm'

class MoneyCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inr: 0,
      usd: 0,
    }
    this.USD_VALUE_PER_INR = 69.39
  }

  convertUSDToINR = usd => {
    this.setState({
      inr: usd / this.USD_VALUE_PER_INR,
      usd: usd,
    })
  }

  convertINRToUSD = inr => {
    this.setState({
      inr: inr,
      usd: inr * this.USD_VALUE_PER_INR,
    })
  }

  render() {
    const { inr, usd } = this.state
    return (
      <>
        <MoneyForm type="USD" result={usd} onUpdateCbk={this.convertUSDToINR} />
        <MoneyForm type="INR" result={inr} onUpdateCbk={this.convertINRToUSD} />
      </>
    )
  }
}

export { MoneyCalculator }
export default MoneyCalculator
