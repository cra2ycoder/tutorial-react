import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './Greetings'
import Counter from './Counter'
import MultipleStateTypes from './MultipleStateTypes'

ReactDOM.render(
  <>
    <h1>Hooks</h1>
    <Greetings />
    <hr />
    <Counter />
    <hr />
    <MultipleStateTypes />
  </>,
  document.getElementById('use-state')
)
