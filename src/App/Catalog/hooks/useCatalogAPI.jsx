import React, { useState, useEffect } from 'react'
import querystring from 'querystring'

function useCatalogAPI(catId, queries) {
  const [catalogId, setCategoryId] = useState(catId)
  const [queryParams, setQueryParams] = useState(queries)
  const [catalogResponse, setCatalogResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  function getQueryParamsAsString() {
    // console.log(querystring.parse(location.search.slice(1)))
    console.log(querystring.stringify(queryParams))
    return querystring.stringify(queryParams)
  }

  function fetchPLPList() {
    async function getData() {
      // to show loading
      setIsLoading(true)

      const baseUrl = `https://api.skavacommerce.com/orchestrationservices/storefront/catalogs/categories`
      const qp = getQueryParamsAsString()

      const fetchURL = `${baseUrl}/${catalogId}/products${qp ? `?` + qp : ''}`
      console.log(fetchURL)

      await fetch(fetchURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'x-store-id': '11',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setCatalogResponse(data)
        })
        .catch(err => {
          console.log(err)
        })

      // making sure that the api call is done
      setIsLoading(false)
    }

    // making the call
    getData()
  }

  useEffect(fetchPLPList, [queryParams])

  return {
    catalogId,
    setCategoryId,
    queryParams,
    setQueryParams,
    catalogResponse,
    setCatalogResponse,
    isLoading,
    setIsLoading,
  }
}

export { useCatalogAPI }
export default useCatalogAPI
