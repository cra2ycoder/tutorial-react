import React from 'react'
import ReactDOM from 'react-dom'

class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
    }
  }

  static defaultProps = {
    name: 'react life cycle',
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
    console.log('------------')
  }

  handleUpdateState = e => {
    this.setState({
      status: 'did update!',
    })
  }

  render() {
    console.log('render()')
    return (
      <>
        <button onClick={this.handleUpdateState}>Update State</button>
      </>
    )
  }
}

// class TestLifeCycle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       doRemove: false,
//     }
//   }
//   handleButton = () => {
//     this.setState({
//       doRemove: !this.state.doRemove,
//     })
//   }
//   render() {
//     const { doRemove } = this.state
//     return (
//       <>
//         {doRemove ? '' : <ReactLifeCycle />}
//         <button onClick={this.handleUpdateState}>Remove Component</button>
//       </>
//     )
//   }
// }

ReactDOM.render(<ReactLifeCycle />, document.getElementById('react-life-cycle'))
