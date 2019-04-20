import React from 'react'

class ProductCategoryRow extends React.Component {
  static defaultProps = {
    title: 'undefined',
  }
  render() {
    const { title } = this.props
    return <h3>{title}</h3>
  }
}

export { ProductCategoryRow }
export default ProductCategoryRow
