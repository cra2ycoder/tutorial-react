import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      shouldStockAvailable: undefined,
    }
  }
  static defaultProps = {
    list: [],
  }

  getUserInputFromCheckbox = res => {
    // console.log('getUserInputFromCheckbox -> ', res)
    this.setState({
      shouldStockAvailable: res ? true : undefined,
    })
  }

  getUserInputFromSearch = res => {
    // console.log(res)
    this.setState({
      category: res,
    })
  }

  renderProductTable(category, isStock) {
    // console.log('renderProductTable: ' + category)
    const { list } = this.props

    const filteredList = list.filter(item => {
      let categoryName = item.category.toLowerCase()
      category = category.toLowerCase()
      return categoryName.indexOf(category) > -1
    })

    return <ProductTable data={filteredList} isStock={isStock} />
  }

  render() {
    const { category, shouldStockAvailable } = this.state
    return (
      <>
        <SearchBar
          getUserInput={this.getUserInputFromSearch}
          getCheckboxInput={this.getUserInputFromCheckbox}
        />
        {category.length > 0 &&
          this.renderProductTable(category, shouldStockAvailable)}
      </>
    )
  }
}

export { FilterableProductTable }
export default FilterableProductTable
