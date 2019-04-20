import React from 'react'

class ProductRow extends React.Component {
  static defaultProps = {
    name: 'undefined',
    price: '$0.00',
    stocked: false,
  }
  render() {
    const { name, price, stocked } = this.props
    const divStyle = {
      color: stocked ? 'black' : 'red',
    }
    return (
      <div style={divStyle}>
        <span>{name}</span>
        <span> {price}</span>
      </div>
    )
  }
}

export { ProductRow }
export default ProductRow
