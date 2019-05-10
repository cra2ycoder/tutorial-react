import React from 'react'
import ProductCard from './ProductCard'
import Sort from './Sort'
import Filter from './Filter'
import './styles.css'

function Catalog(props) {
  return (
    <>
      <header className="catalog-header">
        <h2>
          {'Plainteesmen'}
          <span>(0)</span>
        </h2>
        <Sort />
      </header>
      <section className="product-list-wrapper">
        <section className="filter-section">
          <Filter />
        </section>
        <section className="product-list-section">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </section>
    </>
  )
}

export { Catalog }
export default Catalog
