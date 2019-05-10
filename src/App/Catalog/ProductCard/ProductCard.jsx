import React, { useState } from 'react'
import get from 'get-value'
import './styled.css'

function ProductCard(props) {
  const [isFavSelected, setIsFavSelected] = useState(false)
  const { product } = props
  const { brand, name, imageURL } = get(product, 'properties', {})
  const price = get(product, 'transactionPrice.price', 0)

  function toggleFavIcon(e) {
    setIsFavSelected(!isFavSelected)
  }

  return (
    <>
      <div className="product-card-image">
        <img src={imageURL} />
      </div>
      <div
        className={'fav-icon' + (isFavSelected ? ' selected' : '')}
        onClick={toggleFavIcon}
      />
      <label className="product-card-name">{name}</label>
      <label className="product-card-brand">{brand}</label>
      <h3 className="product-card-price">${price}</h3>
    </>
  )
}

export { ProductCard }
export default ProductCard
