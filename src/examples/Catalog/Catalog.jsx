import React, { useState, useEffect, createContext } from 'react'
import get from 'get-value'
import querystring from 'querystring'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
import Sort from './Sort'
import Filter from './Filter'
import { mergeFilters, setQueryParamWithURL } from './deps'
import './styles.css'

const CatalogContext = createContext({})

function Catalog(props) {
  /**
   * @note
   * - where we have to get the query string from the url
   * - that needs to be shared as default value to the useCatalogAPI
   */
  const qpFromURL = ``
  const predefinedQP = querystring.parse(qpFromURL.slice(1))

  const {
    catalogId,
    setCategoryId,
    queryParams,
    setQueryParams,
    catalogResponse,
    isLoading,
  } = useCatalogAPI('plainteesboys', predefinedQP)

  const totalCount = get(catalogResponse, 'pageableInfo.totalCount', 0)
  const productList = get(catalogResponse, 'product', [])
  const inputElement = document.getElementById('url-bar')

  function renderProductListCard(item, id) {
    return (
      <div className="product-card" key={'key-' + id}>
        <ProductCard product={item} />
      </div>
    )
  }

  function getPreviousQueryParams() {
    return inputElement.value.length > 0
      ? querystring.parse(inputElement.value)
      : {}
  }

  function updateQueryParam(obj, type) {
    var queryParamLocalObj = {}
    if (obj !== null) {
      const stringifyObj = JSON.stringify(obj)
      // console.log(inputElement.value)

      const prevQueryParamLocalObj = getPreviousQueryParams()

      console.log({ prevQueryParamLocalObj })
      queryParamLocalObj = { ...prevQueryParamLocalObj, [type]: stringifyObj }

      setQueryParams(queryParamLocalObj)
    } else {
      setQueryParams(null)
    }

    /**
     * @todo
     * later this should be assigned in the history
     */
    const qpFromURL = setQueryParamWithURL(queryParamLocalObj)
    if (inputElement !== null) {
      inputElement.value = qpFromURL
    }
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

  function onFilterChange(newFilter, isSelected) {
    // console.log('onFilterChange ---->')
    // console.log(newFilter, isSelected)
    if (newFilter !== undefined) {
      if (newFilter.field !== '' && newFilter.value !== '') {
        const prevQueryParamLocalObj = getPreviousQueryParams()
        var prevFilters = prevQueryParamLocalObj.filter
          ? JSON.parse(prevQueryParamLocalObj.filter).filters
          : []
        // console.log({ prevQueryParamLocalObj })
        const value = mergeFilters(newFilter, prevFilters)
        updateQueryParam({ filters: value }, 'filter')
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
