import React, { useState, useEffect, useContext } from 'react'
import get from 'get-value'
import useCatalogSort from '../hooks'
import { CatalogContext } from '../Catalog'

function Sort(props) {
  const context = useContext(CatalogContext)
  const sortOptions = get(context, 'sort', [])

  console.log({ context, sortOptions })

  //   const {
  //     sortOptions,
  //     sortValue,
  //     defaultIdx,
  //     handleSortChange,
  //   } = useCatalogSort(sortList, 0)

  //   console.log(1)
  //   console.table(sortValue)
  const handleChange = e => {
    console.log('handle change!')
  }

  return (
    <select onChange={handleChange} defaultValue={0}>
      {sortOptions.map((item, id) => {
        const { key, name, selected } = item
        return (
          <option key={key} value={id}>
            {name}
          </option>
        )
      })}
    </select>
  )
}

export { Sort }
export default Sort
