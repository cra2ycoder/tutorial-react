import React, { useState, useEffect } from 'react'
import get from 'get-value'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
import './styles.css'

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

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h1>
              {catalogId}
              <span>({totalCount})</span>
            </h1>
            <div className="product-list-wrapper">
              {productList.length > 0 && productList.map(renderProductListCard)}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export { Catalog }
export default Catalog
