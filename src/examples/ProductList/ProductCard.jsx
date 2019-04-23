import React from 'react'
import './styled.css'

function ProductCard(props) {
  const { data } = props
  return (
    <>
      <div className="product-card-image">
        <img src={data.imageURL} />
      </div>
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>{data.brand}</div>
    </>
  )
}

export { ProductCard }
export default ProductCard
