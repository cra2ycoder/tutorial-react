import React, { useState, useEffect } from 'react'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
// import './styled.css'

function Catalog(props) {
  console.log(location.search)
  const {
    catalogId,
    setCategoryId,
    queryParams,
    setQueryParams,
    catalogResponse,
    isLoading,
  } = useCatalogAPI('plainteesmen', null)

  return (
    <>{console.log({ catalogId, queryParams, catalogResponse, isLoading })}</>
  )
}

export { Catalog }
export default Catalog
