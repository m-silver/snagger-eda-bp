import React from 'react'

import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (evt) => {
    const { name, value } = evt.target
    this.setState({
      [name]: value // [name] is computed based on the input name coming through the evt.target, used for object keys
    })
  }

  handleClick = () => {

  }

  render () {
    return (
      <div className='login-container'>
        <img className='logo' src='/images/logo.png'></img>
        <h1 className='logo-title'>SNAGGER</h1>
        <input name='username' value={this.state.username} onChange={this.handleChange} placeholder='username'/><br></br>
        <input name='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/><br></br>
        <Link to='/dashboard'><button onClick={this.handleClick}>Login</button></Link>
      </div>
    )
  }
}

export default Login