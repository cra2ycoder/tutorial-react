import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './Greetings'
import Counter from './Counter'

ReactDOM.render(
  <>
    <h1>Hooks</h1>
    <Greetings />
    <hr />
    <Counter />
  </>,
  document.getElementById('use-state')
)
