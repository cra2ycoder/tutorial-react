import React from 'react'

class InternalRenderProps extends React.Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    title: 'Default Title',
    imgSrc: 'https://via.placeholder.com/150',
    desc: 'Default Description',
    renderTitle: null,
    renderImage: null,
    renderParagraph: null,
  }

  defaultRenderParagraph(props) {
    const { desc } = props
    return <p>{desc}</p>
  }

  defaultRenderImage(props) {
    const { imgSrc } = props
    return <img src={imgSrc} />
  }

  defaultRenderTitle(props) {
    const { title } = props
    return <h2>{title}</h2>
  }

  render() {
    console.log(this.props)
    const { renderTitle, renderImage, renderParagraph, ...rest } = this.props
    return (
      <>
        {renderTitle ? renderTitle(rest) : this.defaultRenderTitle(rest)}
        {renderImage ? renderImage(rest) : this.defaultRenderImage(rest)}
        {renderParagraph
          ? renderParagraph(rest)
          : this.defaultRenderParagraph(rest)}
      </>
    )
  }
}

export { InternalRenderProps }
export default InternalRenderProps
