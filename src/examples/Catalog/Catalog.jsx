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
  const qpFromURL = `?sort={"sort":[{"field":"sort_string_salePrice","direction":"ASC"}]}&filter={"filters":[{"field":"facet_name","value":"Boy's Pocket T-Shirt","operation":"IN"}]}`

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
  if (inputElement !== null && inputElement.value.length === 0) {
    inputElement.value = qpFromURL
  }

  // console.log({ catalogResponse, props, location })

  const totalCount = get(catalogResponse, 'pageableInfo.totalCount', 0)
  const productList = get(catalogResponse, 'product', [])

  var queryParamLocalObj = { ...predefinedQP }
  console.log('init ... queryParamLocalObj ->')
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

  function onSortChange(value) {
    // console.log('onSortChange ---->')
    // console.log(value)
    if (value !== undefined) {
      if (value.field !== '' && value.direction !== '') {
        updateQueryParam({ sort: [value] }, 'sort')
      } else {
        updateQueryParam(null, 'sort')
      }
    }
  }

  function onFilterChange(value, isSelected) {
    // console.log('onFilterChange ---->')
    // console.log(value, isSelected)
    if (value !== undefined) {
      if (value.field !== '' && value.value !== '') {
        updateQueryParam({ filter: [value] }, 'filters')
      } else {
        updateQueryParam(null, 'filters')
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
