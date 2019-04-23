import React, { useState, useEffect } from 'react'

function useProductListHook() {
  const [plpList, setPLPList] = useState({})
  const [categoryName, setCategoryName] = useState('plainteesmen')
  const [isLoading, setIsLoading] = useState(false)

  /**
   * @description
   * @param {*} data
   * making the response as minimal as possible
   * so transforming data
   */
  function transformList(data) {
    const formatData = data.map(item => {
      return {
        imageURL: item.properties.imageURL,
        name: item.properties.name,
        price: item.prices[0].price,
        brand: item.properties.brand,
      }
    })
    console.log(formatData)
    return formatData
  }

  function fetchPLPList() {
    async function getData() {
      // to show loading
      setIsLoading(true)

      const fetchURL = `https://api.skavacommerce.com/orchestrationservices/storefront/catalogs/categories/${categoryName}/products`
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
          console.log(data)
          const transformedList = transformList(data.product)
          setPLPList(transformedList)
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

  useEffect(fetchPLPList, [categoryName])

  return {
    plpList,
    setPLPList,
    categoryName,
    setCategoryName,
    isLoading,
    setIsLoading,
  }
}

export { useProductListHook }
export default useProductListHook
