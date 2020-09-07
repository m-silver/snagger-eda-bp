import React from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {

  render () {
  return (
      <div>
        <h2>DASHBOARD</h2>
        <Link to='/log-defect'><h3>Log a new defect</h3></Link>
        <Link to='/defects-outstanding'><h3>Defects outstanding</h3></Link>
        <Link to='/defects-completed'><h3>Defects completed</h3></Link>
        <Link to='/account-settings'><h3>Account settings/details</h3></Link>
        <Link to='/'><h3>Log out</h3></Link>
      </div>
    )
  }
}

export default Dashboard