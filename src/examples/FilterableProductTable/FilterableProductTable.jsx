import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <ProductTable />
      </>
    )
  }
}

export { FilterableProductTable }
export default FilterableProductTable
