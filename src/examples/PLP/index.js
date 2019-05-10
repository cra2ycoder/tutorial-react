import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import Catalog from './Catalog'
const Flag = true
const Form = () => {
  return (
    <>
      <form style={{ display: 'none' }} onSubmit={e => e.preventDefault()}>
        <input
          id="url-bar"
          style={{ width: '80vw', height: '3rem', padding: '0 10px' }}
          placeholder="query params goes here"
        />
      </form>
    </>
  )
}
ReactDOM.render(
  <>
    {Flag && <Form />}
    <Catalog />
  </>,
  document.getElementById('catalog')
)
