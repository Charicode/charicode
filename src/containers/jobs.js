import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobListing from '../components/job-listing'

class Jobs extends Component {

  renderJobList() {

      const row = this.props.jobs.map(function(job) {

        if (job.length < 7) {
          console.log('fff')
          return
        }

        return (
            <tr>
              {job.map(function(val){
                return <td>{val}</td>
              })}
            </tr>
          )
      })

    return row
  }

  render() {

    return (
      <table>
        <tr>
          <th>Company</th>
          <th>Tech</th>
          <th>Role</th>
          <th>Rate</th>
          <th>Start</th>
          <th>Duration</th>
          <th>Location</th>
        </tr>
        <tbody>{this.renderJobList()}</tbody>
      </table>
    )
  }
}


function mapStateToProps( {jobs} ) {
  return { jobs }
}

export default connect(mapStateToProps)(Jobs)
