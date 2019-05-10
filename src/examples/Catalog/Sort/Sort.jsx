import React, { useState, useEffect, useContext, useRef } from 'react'
import get from 'get-value'
import { CatalogContext } from '../Catalog'

function Sort(props) {
  const context = useContext(CatalogContext)
  const defaultSortOption = {
    key: '',
    name: 'Sort By',
    selected: false,
  }
  const apiSortOptions = get(context, 'catalogResponse.sort', [])
  const onSortChangeCbk = get(context, 'callbacks.sort.onChange', function() {})
  const sortOptions = [defaultSortOption, ...apiSortOptions]

  // console.log({ sortOptions })

  const [sortValue, setSortValue] = useState()
  const selectRef = useRef()

  const handleChange = e => {
    e.preventDefault()
    const currentIdx = +selectRef.current.value
    const { key, name, selected } = sortOptions[currentIdx]
    const [field, direction = ''] = key.split(' ')
    setSortValue({ field, direction })
  }

  useEffect(() => {
    // console.log(sortValue)
    if (sortValue !== undefined) {
      onSortChangeCbk(sortValue)
    }
  }, [sortValue])

  /**
   * predefined selection
   */
  const defIdx = sortOptions.findIndex(
    (item, index, array) => item.selected === true
  )

  return (
    <select onChange={handleChange} defaultValue={defIdx || 0} ref={selectRef}>
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
