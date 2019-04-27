import React from 'react'
import ReactDOM from 'react-dom'
import InternalRenderProps from './Internal/InternalRenderProps'
import ExternalRenderProps from './External/ExternalRenderProps'
import ChildrenRenderProp from './ChildrenRenderProp'

const internalMethodProps = {
  title: 'Internal Title',
  imgSrc: 'https://via.placeholder.com/100',
  desc: 'Internal Description',
  renderTitle: props => {
    return <h2>{`i: ` + props.title}</h2>
  },
  renderImage: props => {
    return <img src={props.imgSrc} />
  },
  renderDescription: props => {
    return <p>{props.desc}</p>
  },
}

ReactDOM.render(
  <>
    <h1>Internal:</h1>
    <InternalRenderProps {...internalMethodProps} />
    <hr />
    <h1>External:</h1>
    <ExternalRenderProps />
    <ExternalRenderProps renderTitle={internalMethodProps.renderTitle} />
    <hr />
    <h1>Using Children:</h1>
    <ChildrenRenderProp />
  </>,
  document.getElementById('render-props')
)
