import React from 'react'
import ReactDOM from 'react-dom'
import SimpleIF from './SimpleIF'
import IfElse from './IfElse'

ReactDOM.render(
  <>
    <SimpleIF isLoggedIn={false} />
    <SimpleIF isLoggedIn={true} />
    <hr />
    <IfElse isLoggedIn={false} />
    <IfElse isLoggedIn={true} />
    <hr />
  </>,
  document.getElementById('conditional-render')
)
