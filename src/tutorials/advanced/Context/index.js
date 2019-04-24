import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import Basic from './Basic'
import { ClassContext, ClassContextType2 } from './ClassContext'

ReactDOM.render(
  <>
    <Basic />
    <ClassContext />
    <ClassContextType2 />
  </>,
  document.getElementById('context')
)
