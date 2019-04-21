import React, { useState, useEffect } from 'react'
import fetch from 'node-fetch'

function FetchExample(props) {
  const { url } = props
  const [response, setResponse] = useState([])

  function getAPIResponse() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // set response with the useState function
        setResponse(data.value)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // making fetch call
    async function fetchData() {
      await getAPIResponse()
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>API Response</h1>
      <ul>
        {response.length > 0 &&
          response.map((item, idx) => {
            const { id, joke } = item
            return (
              <li key={'key-' + idx}>
                <h4>{id}</h4>
                <p>{joke}</p>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export { FetchExample }
export default FetchExample
