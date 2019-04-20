import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="Search..." />
        <div>
          <input type="checkbox" name="isInStock" />
          <span> Only show products in stock</span>
        </div>
      </form>
    )
  }
}

export { SearchBar }
export default SearchBar
