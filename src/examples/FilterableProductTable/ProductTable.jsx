import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
  static defaultProps = {
    data: [],
  }
  renderCategoryTable = () => {
    const { data } = this.props
    const categoryTitle = data[0].category
    return (
      <>
        <ProductCategoryRow title={categoryTitle} />
        <ul>
          {data.map((item, idx) => {
            return (
              <li key={'id' + idx}>
                <ProductRow {...item} />
              </li>
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
