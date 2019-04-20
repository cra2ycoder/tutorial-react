import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
  static defaultProps = {
    isStock: false,
    data: [],
  }
  renderCategoryTable = () => {
    const { data, isStock } = this.props
    const categoryTitle = data[0].category

    return (
      <>
        <ProductCategoryRow title={categoryTitle} />
        <ul>
          {data.map((item, idx) => {
            return (
              (!isStock || isStock === item.stocked) && (
                <li key={'id' + idx}>
                  <ProductRow {...item} />
                </li>
              )
            )
          })}
        </ul>
      </>
    )
  }
  render() {
    const { data } = this.props
    return <>{data && data.length > 0 && this.renderCategoryTable()}</>
  }
}

export { ProductTable }
export default ProductTable
