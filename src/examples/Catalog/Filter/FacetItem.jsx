import React from 'react'
import get from 'get-value'

function FacetItem(props) {
  const { id, name, values, onFilterClick } = props

  function renderFacetOptions(options, idx) {
    const { count, name, selected } = options
    return (
      <div className="facet-option" key={`${id}_${idx}`}>
        <input
          type="checkbox"
          id={id}
          value={name}
          onClick={onFilterClick}
          defaultChecked={selected}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    )
  }
  return (
    <div className="facet-item">
      <h3>{name}</h3>
      <form>{values && values.map(renderFacetOptions)}</form>
    </div>
  )
}

export { FacetItem }
export default FacetItem
