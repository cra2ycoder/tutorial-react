import React from 'react'

class SearchBar extends React.Component {
  static defaultProps = {
    getUserInput: () => {},
    getCheckboxInput: () => {},
  }

  onUserType = e => {
    // console.log('onUserType ---->')
    const { getUserInput } = this.props
    getUserInput(e.target.value)
  }

  onUserSelect = e => {
    const { getCheckboxInput } = this.props
    getCheckboxInput(e.target.checked)
  }

  render() {
    const { value } = this.props
    return (
      <form>
        <input placeholder="Search..." onChange={this.onUserType} />
        <div>
          <input
            type="checkbox"
            name="isInStock"
            onChange={this.onUserSelect}
          />
          <span> Only show products in stock</span>
        </div>
      </form>
    )
  }
}

export { SearchBar }
export default SearchBar
