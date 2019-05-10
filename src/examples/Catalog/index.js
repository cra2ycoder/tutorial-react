import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import Catalog from './Catalog'

ReactDOM.render(
  <>
    <form onSubmit={e => e.preventDefault()}>
      <input
        id="url-bar"
        style={{ width: '80vw', height: '3rem', padding: '0 10px' }}
        placeholder="query params goes here"
      />
    </form>
    <hr />
    <br />
    <Catalog />
  </>,
  document.getElementById('catalog')
)
