import React from 'react'

class SearchBar extends React.Component {
  static defaultProps = {
    getUserInput: () => {},
  }

  onUserType = e => {
    // console.log('onUserType ---->')
    const { getUserInput } = this.props
    getUserInput(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <form>
        <input placeholder="Search..." onChange={this.onUserType} />
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
