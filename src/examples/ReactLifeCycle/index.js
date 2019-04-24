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

  //   UNSAFE_componentWillMount() {
  //     console.log('UNSAFE_componentWillMount')
  //   }

  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps')
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

ReactDOM.render(
  <>
    <ReactLifeCycle />
    <ReactLifeCycle a={10} />
  </>,
  document.getElementById('react-life-cycle')
)
