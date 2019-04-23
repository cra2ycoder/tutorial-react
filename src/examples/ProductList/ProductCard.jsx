import React, { useState } from 'react'
import './styled.css'

function ProductCard(props) {
  const [isFavSelected, setIsFavSelected] = useState(false)
  const { data } = props

  function toggleFavIcon(e) {
    setIsFavSelected(!isFavSelected)
  }

  return (
    <>
      <div className="product-card-image">
        <img src={data.imageURL} />
      </div>
      <div
        className={'fav-icon' + (isFavSelected ? ' selected' : '')}
        onClick={toggleFavIcon}
      />
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>{data.brand}</div>
    </>
  )
}

export { ProductCard }
export default ProductCard
