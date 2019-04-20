import React from 'react'
import ReactDOM from 'react-dom'
import { productList } from './fixtures'
import FilterableProductTable from './FilterableProductTable'

ReactDOM.render(
  <FilterableProductTable list={productList} />,
  document.getElementById('filter-table')
)
