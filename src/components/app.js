import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Hero from './hero'
import Jobs from '../containers/jobs'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchJobs} from '../actions/index'


class App extends Component {
  render() {
    this.props.fetchJobs()
    return (
      <div>
        <Hero />
        <Jobs />
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchJobs}, dispatch)
}
export default connect(null, mapDispatchToProps)(App)
