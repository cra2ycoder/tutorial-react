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

  //   UNSAFE_componentWillReceiveProps() {
  //     console.log('UNSAFE_componentWillReceiveProps')
  //   }

  //   UNSAFE_componentWillUpdate(nextProps, nextState) {
  //     console.log('UNSAFE_componentWillUpdate')
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldComponentUpdate')
  //     console.log(nextProps)
  //     console.log(nextState)
  //     return true
  //   }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log('getDerivedStateFromProps')
  //     console.log(props)
  //     console.log(state)
  //     return {}
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('getSnapshotBeforeUpdate')
  //     console.log(prevProps)
  //     console.log(prevState)
  //     return {}
  //   }

  //   static getDerivedStateFromError(error) {
  //     console.log('getDerivedStateFromError')
  //     console.log(error)
  //   }

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

ReactDOM.render(<ReactLifeCycle />, document.getElementById('react-life-cycle'))
