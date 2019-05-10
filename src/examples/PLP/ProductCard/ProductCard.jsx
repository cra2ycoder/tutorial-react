import React from 'react'
import './styled.css'

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={'https://raderain.sirv.com/T-Giant/093F_210028110_main.png'}
        />
      </div>
      <div className={'fav-icon'} />
      <label className="product-card-name">{`Men's Textured T-Shirt`}</label>
      <label className="product-card-brand">{`Ford Creek`}</label>
      <h3 className="product-card-price">{`$80.99`}</h3>
    </div>
  )
}

export { ProductCard }
export default ProductCard
