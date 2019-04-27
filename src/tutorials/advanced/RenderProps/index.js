import React from 'react'
import ReactDOM from 'react-dom'
import InternalRenderProps from './InternalRenderProps'
import ExternalRenderProps from './ExternalRenderProps'
import ChildrenRenderProp from './ChildrenRenderProp'

const internalMethodProps = {
  title: 'Internal Title',
  imgSrc: 'https://via.placeholder.com/100',
  desc: 'Internal Description',
  renderTitle: props => {
    return <h2>{props.title}</h2>
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
    <InternalRenderProps {...internalMethodProps} />
    <ExternalRenderProps />
    <ChildrenRenderProp />
  </>,
  document.getElementById('render-props')
)
