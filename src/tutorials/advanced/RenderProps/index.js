import React from 'react'
import ReactDOM from 'react-dom'
import InternalRenderProps from './InternalRenderProps'
import ExternalRenderProps from './ExternalRenderProps'
import ChildrenRenderProp from './ChildrenRenderProp'

ReactDOM.render(
  <>
    <InternalRenderProps />
    <ExternalRenderProps />
    <ChildrenRenderProp />
  </>,
  document.getElementById('render-props')
)
