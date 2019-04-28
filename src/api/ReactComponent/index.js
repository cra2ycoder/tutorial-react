import React from 'react'
import ReactDOM from 'react-dom'
import PlainComponent from './Components/Component'
import PureComponent from './Components/PureComponent'

ReactDOM.render(
  <>
    <PlainComponent />
    <PureComponent />
  </>,
  document.getElementById('react-component')
)
