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
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={'https://raderain.sirv.com/T-Giant/093F_210028110_main.png'}
        />
      </div>
      <div
        className={'fav-icon' + (isFavSelected ? ' selected' : '')}
        onClick={toggleFavIcon}
      />
      <label className="product-card-name">{`Men's Textured T-Shirt`}</label>
      <label className="product-card-brand">{`Ford Creek`}</label>
      <h3 className="product-card-price">{`$80.99`}</h3>
    </div>
  )
}

export { ProductCard }
export default ProductCard
