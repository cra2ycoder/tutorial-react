import React from 'react'
import {
  renderImage as defaultRenderImage,
  renderTitle as defaultRenderTitle,
  renderParagraph as defaultRenderParagraph,
} from './renderProps'

class ExternalRenderProps extends React.Component {
  static defaultProps = {
    title: 'External Default Title',
    imgSrc: 'https://via.placeholder.com/150',
    desc: 'External Default Description',
    renderTitle: defaultRenderTitle,
    renderImage: defaultRenderImage,
    renderParagraph: defaultRenderParagraph,
  }
  render() {
    const { renderTitle, renderImage, renderParagraph, ...rest } = this.props
    console.log('external', this.props)
    return (
      <>
        {renderTitle(rest)}
        {renderImage(rest)}
        {renderParagraph(rest)}
      </>
    )
  }
}

export { ExternalRenderProps }
export default ExternalRenderProps
