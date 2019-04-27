import React from 'react'

class MyComponent extends React.Component {
  render() {
    return this.props.children ? this.props.children : ''
  }
}

class ChildrenRenderProp extends React.Component {
  renderChildren() {
    return (
      <>
        <h2>Title</h2>
        <img src="https://via.placeholder.com/50" />
        <p>description goes here...</p>
      </>
    )
  }

  renderType1() {
    return (
      <MyComponent>
        <h2>Title</h2>
        <img src="https://via.placeholder.com/50" />
        <p>description goes here...</p>
      </MyComponent>
    )
  }

  renderType2() {
    return <MyComponent>{this.renderChildren()}</MyComponent>
  }

  render() {
    return (
      <>
        {this.renderType1()}
        {this.renderType2()}
      </>
    )
  }
}

export { ChildrenRenderProp }
export default ChildrenRenderProp
