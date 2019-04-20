import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
  render() {
    return (
      <>
        <ProductCategoryRow />
        <ProductRow />
      </>
    )
  }
}

export { ProductTable }
export default ProductTable
