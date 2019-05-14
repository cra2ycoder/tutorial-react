import React, { useState, useEffect, createContext } from 'react'
import get from 'get-value'
import querystring from 'querystring'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
import Sort from './Sort'
import Filter from './Filter'
import './styles.css'

const CatalogContext = createContext({})

function Catalog(props) {
  /**
   * @note
   * - where we have to get the query string from the url
   * - that needs to be shared as default value to the useCatalogAPI
   */
  const qpFromURL = `` //`?sort={"sort":[{"field":"sort_string_salePrice","direction":"ASC"}]}&filter={"filters":[{"field":"facet_name","value":"Boy's Pocket T-Shirt","operation":"IN"}]}`

  const predefinedQP = querystring.parse(qpFromURL.slice(1))

  const {
    catalogId,
    setCategoryId,
    queryParams,
    setQueryParams,
    catalogResponse,
    isLoading,
  } = useCatalogAPI('plainteesboys', predefinedQP)

  const inputElement = document.getElementById('url-bar')
  // if (inputElement !== null && inputElement.value.length === 0) {
  //   inputElement.value = qpFromURL
  // }

  // console.log({ catalogResponse, props, location })

  const totalCount = get(catalogResponse, 'pageableInfo.totalCount', 0)
  const productList = get(catalogResponse, 'product', [])

  var queryParamLocalObj = { ...predefinedQP }
  // var filterLocalList = {}
  // console.log('init ... queryParamLocalObj ->')
  console.dir(queryParamLocalObj)

  function setQueryParamWithURL() {
    // console.dir({ queryParamLocalObj })
    var qpStr = []
    for (var p in queryParamLocalObj) {
      qpStr.push(`${p}=${queryParamLocalObj[p]}`)
    }

    inputElement.value = qpStr.join('&')
  }

  function renderProductListCard(item, id) {
    return (
      <div className="product-card" key={'key-' + id}>
        <ProductCard product={item} />
      </div>
    )
  }

  function updateQueryParam(obj, type) {
    if (obj !== null) {
      const stringifyObj = JSON.stringify(obj)
      queryParamLocalObj = {
        ...queryParamLocalObj,
        ...{ [type]: stringifyObj },
      }
      // console.log({ queryParamLocalObj })
      setQueryParams(queryParamLocalObj)
    } else {
      setQueryParams(null)
    }
    setQueryParamWithURL()
  }

  function onSortChange(newSort) {
    // console.log('onSortChange ---->')
    // console.log(newSort)
    if (newSort !== undefined) {
      if (newSort.field !== '' && newSort.direction !== '') {
        updateQueryParam({ sort: [newSort] }, 'sort')
      } else {
        updateQueryParam(null, 'sort')
      }
    }
  }

  function mergeFilters(newFilter) {
    if (newFilter === null && newFilter === undefined) {
      return null
    }

    var prevFilterObject = {}

    if (
      queryParamLocalObj !== undefined &&
      Object.keys(queryParamLocalObj).length > 0
    ) {
      prevFilterObject = JSON.parse(queryParamLocalObj.filter)
    }

    // console.log({ prevFilterObject })

    const merge = (pf, nf) => {
      const concat = { ...pf, ...nf }
      return {
        ...concat,
        value: [pf.value, nf.value],
      }
    }

    if (prevFilterObject.filters !== undefined) {
      /**
       * making sure that the new filter is already available
       */
      var prevFilterIdx = -1
      const prevFilter = prevFilterObject.filters.filter((item, idx) => {
        prevFilterIdx = idx
        return item.field === newFilter.field
      })

      if (prevFilter.length > 0) {
        console.log(`prevFilterIdx: ${prevFilterIdx}`)
        const mergedFilters = merge(prevFilter[0], newFilter)
        prevFilterObject.filters[prevFilterIdx] = mergedFilters
        console.log({ mergedFilters })
      } else {
        prevFilterObject.filters.push(newFilter)
      }
      console.log('returing....!')
      console.log({ prevFilterObject })
      return prevFilterObject
    } else {
      return { filters: [newFilter] }
    }
  }

  function onFilterChange(newFilter, isSelected) {
    // console.log('onFilterChange ---->')
    // console.log(newFilter, isSelected)
    if (newFilter !== undefined) {
      if (newFilter.field !== '' && newFilter.value !== '') {
        const value = mergeFilters(newFilter)
        updateQueryParam(value, 'filter')
      } else {
        updateQueryParam(null, 'filter')
      }
    }
  }

  const callbacks = {
    sort: {
      onChange: onSortChange,
    },
    filter: {
      onChange: onFilterChange,
    },
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CatalogContext.Provider value={{ catalogResponse, callbacks }}>
          <header className="catalog-header">
            <h2>
              {catalogId}
              <span>({totalCount})</span>
            </h2>
            <Sort />
          </header>
          <section className="product-list-wrapper">
            <section className="filter-section">
              <Filter />
            </section>
            <section className="product-list-section">
              {productList.length > 0 && productList.map(renderProductListCard)}
            </section>
          </section>
        </CatalogContext.Provider>
      )}
    </>
  )
}

export { Catalog, CatalogContext }
export default Catalog
