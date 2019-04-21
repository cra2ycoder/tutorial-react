import React from 'react'
import ReactDOM from 'react-dom'
import EffectLifeCycle from './EffectLifeCycle'
import WindowResize from './WindowResize'
import FetchExample from './FetchExample'

ReactDOM.render(
  <>
    <h1>Hooks</h1>
    <EffectLifeCycle />
    <WindowResize />
    <FetchExample url={'http://api.icndb.com/jokes/random/10'} />
  </>,
  document.getElementById('effect-hook')
)
