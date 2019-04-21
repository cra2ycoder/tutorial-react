import React from 'react'
import ReactDOM from 'react-dom'
import EffectLifeCycle from './EffectLifeCycle'
import WindowResize from './WindowResize'

ReactDOM.render(
  <>
    <h1>Hooks</h1>
    <EffectLifeCycle />
    <WindowResize />
  </>,
  document.getElementById('effect-hook')
)
