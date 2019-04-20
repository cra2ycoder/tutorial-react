import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
    }
  }
  static defaultProps = {
    list: [],
  }

  getUserInputFromSearch = res => {
    // console.log(res)
    this.setState({
      category: res,
    })
  }

  renderProductTable(category) {
    // console.log('renderProductTable: ' + category)
    const { list } = this.props

    const filteredList = list.filter(item => {
      let categoryName = item.category.toLowerCase()
      category = category.toLowerCase()
      return categoryName.indexOf(category) > -1
    })

    return <ProductTable data={filteredList} />
  }

  render() {
    const { category } = this.state
    return (
      <>
        <SearchBar getUserInput={this.getUserInputFromSearch} />
        {category.length > 0 && this.renderProductTable(category)}
      </>
    )
  }
}

export { FilterableProductTable }
export default FilterableProductTable
