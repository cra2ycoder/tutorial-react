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

  console.log({ catalogResponse })

  const totalCount = get(catalogResponse, 'pageableInfo.totalCount', 0)
  const productList = get(catalogResponse, 'product', [])

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
        setQueryParams({ sort: stringifySortValue })
      } else {
        setQueryParams(null)
      }
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
