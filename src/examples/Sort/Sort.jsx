import React, { useState, useEffect } from 'react'

const sortList = [
  { key: '', name: 'Sort By', selected: true },
  {
    key: 'sort_string_salePrice ASC',
    name: 'salePrice A TO Z',
    selected: false,
  },
  {
    key: 'sort_string_salePrice DESC',
    name: 'salePrice Z TO A',
    selected: false,
  },
  { key: 'sort_string_price ASC', name: 'price A TO Z', selected: false },
  { key: 'sort_string_price DESC', name: 'price Z TO A', selected: false },
  { key: 'sort_number_price ASC', name: 'price LOW To High', selected: false },
  {
    key: 'sort_number_price DESC',
    name: 'price High  To  LOW',
    selected: false,
  },
]

function useSortHook(options, idx) {
  const [sortOptions, setSortOptions] = useState(options)
  const [defaultIdx, setDefaultIdx] = useState(idx)

  const handleSortChange = idx => {
    setDefaultIdx(+idx)
  }

  const transformSortOption = () => {
    const currentSortOption = sortOptions[defaultIdx]
    const { key, name, selected } = currentSortOption
    const [sortField, sortDirection = ''] = key.split(' ')
    // console.dir({ currentSortOption, defaultIdx })
    return { sortField, sortDirection }
  }

  const [sortValue, setSortValue] = useState(transformSortOption())

  useEffect(() => {
    console.log('defaultIdx: ' + defaultIdx)
    const sv = transformSortOption()
    setSortValue(sv)
  }, [defaultIdx])

  return {
    sortOptions,
    setSortOptions,
    defaultIdx,
    setDefaultIdx,
    sortValue,
    setSortValue,
    handleSortChange,
  }
}

function Sort(props) {
  const { sortOptions, sortValue, defaultIdx, handleSortChange } = useSortHook(
    sortList,
    0
  )

  //   console.log(1)
  //   console.table(sortValue)
  const handleChange = e => {
    handleSortChange(e.target.value)
    // console.log(`handleChange--->`)
    // console.log(sortValue)
  }

  return (
    <>
      {console.log({ sortValue, defaultIdx })}
      <select onChange={handleChange} defaultValue={defaultIdx}>
        {sortOptions.map((item, id) => {
          const { key, name, selected } = item
          return (
            <option key={key} value={id}>
              {name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export { Sort }
export default Sort
