import React, { useState, useEffect, useContext, useRef } from 'react'
import get from 'get-value'
import { CatalogContext } from '../Catalog'
import FacetItem from './FacetItem'
import './styles.css'

function Filter(props) {
  const context = useContext(CatalogContext)
  const facetFilter = get(context, 'catalogResponse.facetFilter', [])
  const onFilterChangeCbk = get(
    context,
    'callbacks.filter.onChange',
    function() {}
  )

  // loading minimal for easy reading
  const facets = facetFilter.splice(0, 4)
  console.log({ facetFilter })

  // [{"field":"facet_fit","operation":"IN","value":["regular","medium"]}]

  function onFilterChange(e) {
    const field = e.target.id
    const value = e.target.value
    const isSelected = e.target.checked
    onFilterChangeCbk({ field, value, operation: 'IN' }, isSelected)
  }

  function renderFacetList(facetItem, idx) {
    const { key, ...remainingProps } = facetItem
    // console.log(facetItem)
    return (
      <React.Fragment key={key}>
        <FacetItem
          id={key}
          onFilterClick={onFilterChange}
          {...remainingProps}
        />
      </React.Fragment>
    )
  }

  return <>{facets !== undefined && facets.map(renderFacetList)}</>
}

export { Filter }
export default Filter
