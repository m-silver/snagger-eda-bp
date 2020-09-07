import React from 'react'
import { Link } from 'react-router-dom'

class ReturnToDashboard extends React.Component {

  render () {
    return (
      <div>
        <Link to='/dashboard'><h3>Return to dashboard</h3></Link>
      </div>
    )
  }
}

export default ReturnToDashboard