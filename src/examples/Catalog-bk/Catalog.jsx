import React, { useState, useEffect, createContext } from 'react'
import get from 'get-value'
import querystring from 'querystring'
import { useCatalogAPI } from './hooks'
import ProductCard from './ProductCard'
import Sort from './Sort'
import Filter from './Filter'
import './styles.css'

const CatalogContext = createContext({})

function Catalog(props) {
  return (
    <>
      <header className="catalog-header">
        <h2>
          {'Plainteesmen'}
          <span>({'20'})</span>
        </h2>
        <Sort />
      </header>
      <section className="product-list-wrapper">
        <section className="filter-section">
          <Filter />
        </section>
        <section className="product-list-section">
          {'IRONMANBKKKK'.split('').map(item => (
            <ProductCard product={item} />
          ))}
        </section>
      </section>
    </>
  )
}

export { Catalog, CatalogContext }
export default Catalog
