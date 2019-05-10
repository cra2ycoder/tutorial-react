import React, { useState, useEffect, createContext } from 'react'
import get from 'get-value'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
import Sort from './Sort'
import './styles.css'

const CatalogContext = createContext({})

function Catalog(props) {
  const {
    catalogId,
    setCategoryId,
    queryParams,
    setQueryParams,
    catalogResponse,
    isLoading,
  } = useCatalogAPI('plainteesmen', null)

  // console.log({ catalogResponse, props, location })

  const totalCount = get(catalogResponse, 'pageableInfo.totalCount', 0)
  const productList = get(catalogResponse, 'product', [])
  var queryParamLocalObj = {}

  function setQueryParamWithURL() {
    console.dir(queryParamLocalObj)
    var qpStr = []
    for (var p in queryParamLocalObj) {
      qpStr.push(`${p}=${queryParamLocalObj[p]}`)
    }

    const inputElement = document.getElementById('url-bar')
    inputElement.value = qpStr.join('&')
  }

  function renderProductListCard(item, id) {
    return (
      <div className="product-card" key={'key-' + id}>
        <ProductCard product={item} />
      </div>
    )
  }

  function onSortChange(value) {
    console.log('onSortChange ---->')
    console.log(value)
    if (value !== undefined) {
      if (value.field !== '' && value.direction !== '') {
        const stringifySortValue = JSON.stringify({
          sort: [value],
        })
        const sortQP = { sort: stringifySortValue }
        queryParamLocalObj = { ...queryParamLocalObj, ...sortQP }
        setQueryParams(sortQP)
      } else {
        setQueryParams(null)
      }
      setQueryParamWithURL()
    }
  }

  const callbacks = {
    sort: {
      onChange: onSortChange,
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
            {productList.length > 0 && productList.map(renderProductListCard)}
          </section>
        </CatalogContext.Provider>
      )}
    </>
  )
}

export { Catalog, CatalogContext }
export default Catalog
