import React from 'react'

function renderParagraph(props) {
  const { desc } = props
  return <p>{desc}</p>
}
function renderImage(props) {
  const { imgSrc } = props
  return <img src={imgSrc} />
}
function renderTitle(props) {
  const { title } = props
  return <h2>{title}</h2>
}

export { renderParagraph, renderImage, renderTitle }
