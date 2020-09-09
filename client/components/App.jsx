import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Navbar from './Navbar'
import Login from './Login'
import Dashboard from './Dashboard'
import LogDefect from './LogDefect'
import DefectsOutstanding from './DefectsOutstanding'
import DefectsCompleted from './DefectsCompleted'
import AccountSettings from './AccountSettings'

const App = () => {
  return (
    <div className='app-container'>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>

      <Route path='/' component={Navbar} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/log-defect' component={LogDefect} />
      <Route path='/defects-outstanding' component={DefectsOutstanding} />
      <Route path='/defects-completed' component={DefectsCompleted} />
      <Route path='/account-settings' component={AccountSettings} />
    </div>
  )
}

export default App
