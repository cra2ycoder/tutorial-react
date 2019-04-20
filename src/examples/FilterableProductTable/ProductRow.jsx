import React from 'react'

class ProductRow extends React.Component {
  static defaultProps = {
    name: 'undefined',
    price: '$0.00',
  }
  render() {
    const { name, price } = this.props
    return (
      <>
        <span>{name}</span>
        <span> {price}</span>
      </>
    )
  }
}

export { ProductRow }
export default ProductRow
