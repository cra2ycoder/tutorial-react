import React from 'react'
import ReactDOM from 'react-dom'
import SimpleIF from './SimpleIF'

ReactDOM.render(
  <>
    <SimpleIF isLoggedIn={false} />
    <SimpleIF isLoggedIn={true} />
  </>,
  document.getElementById('conditional-render')
)
