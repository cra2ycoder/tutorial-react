import React from 'react'
import ReactDOM from 'react-dom'
import TimeCalculator from './TimeConversion/TimeCalculator'
import MoneyCalculator from './MoneyConversion/MoneyCalculator'

ReactDOM.render(
  <>
    <TimeCalculator />
    <MoneyCalculator />
  </>,
  document.getElementById('lift-up-state')
)
