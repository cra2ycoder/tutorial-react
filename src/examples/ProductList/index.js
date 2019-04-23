import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useProductListHook from './ProductListHook'
import ProductCard from './ProductCard'
import './styled.css'

function ProductList() {
  const {
    plpList,
    categoryName,
    setCategoryName,
    isLoading,
  } = useProductListHook()

  const categoryInputRef = useRef()

  function loadPLPByCategoryName(e) {
    e.preventDefault()
    console.log(categoryInputRef.current.value)
    setCategoryName(categoryInputRef.current.value)
  }

  function renderProductListCard(item, id) {
    return (
      <div className="product-card" key={'key-' + id}>
        <ProductCard data={item} />
      </div>
    )
  }

  return (
    <>
      <form>
        <input ref={categoryInputRef} placeholder="enter your category name" />
        <button onClick={loadPLPByCategoryName}>LOAD</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h1>{categoryName}</h1>
            <div className="product-list-wrapper">
              {plpList.length > 0 && plpList.map(renderProductListCard)}
            </div>
          </div>
        </>
      )}
    </>
  )
}

ReactDOM.render(<ProductList />, document.getElementById('plp'))
