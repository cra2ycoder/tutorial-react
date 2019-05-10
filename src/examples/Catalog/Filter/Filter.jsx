import React, { useState, useEffect, useContext, useRef } from 'react'
import get from 'get-value'
import { CatalogContext } from '../Catalog'
import FacetItem from './FacetItem'
import './styles.css'

function Filter(props) {
  const context = useContext(CatalogContext)
  const facetFilter = get(context, 'catalogResponse.facetFilter', [])

  // loading minimal for easy reading
  const facets = facetFilter.splice(0, 4)
  console.log({ facetFilter })

  function renderFacetList(facetItem, idx) {
    const { key, ...remainingProps } = facetItem
    console.log(facetItem)
    return (
      <React.Fragment key={key}>
        <FacetItem id={key} {...remainingProps} />
      </React.Fragment>
    )
  }

  return <>{facets !== undefined && facets.map(renderFacetList)}</>
}

export { Filter }
export default Filter
