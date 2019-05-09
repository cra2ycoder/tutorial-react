import React, { useState, useEffect } from 'react'

function useCatalogSort(options, defSortValue) {
  const [sortOptions, setSortOptions] = useState(options)
  const [sortValue, setSortValue] = useState(defSortValue)

  const transformSortOption = idx => {
    if (sortOptions !== undefined && idx !== undefined) {
      if (idx === 0) {
        return null
      } else {
        const currentSortOption = sortOptions[idx]
        const { key, name, selected } = currentSortOption
        const [field, direction = ''] = key.split(' ')
        return { field, direction }
      }
    } else {
      return null
    }
  }

  const handleSortChange = idx => {
    const currentSortValue = transformSortOption(idx)
    setSortValue(currentSortValue)
  }

  return {
    sortOptions,
    setSortOptions,
    sortValue,
    setSortValue,
    handleSortChange,
  }
}

export { useCatalogSort }
export default useCatalogSort
