import React from 'react'

import { addDefect } from '../api'

import ReturnToDashboard from './ReturnToDashboard'

class LogDefect extends React.Component {
  state = {
    homeId: '',
    trade: '',
    defectName: '',
    defectDescription: '',
    status: 'logged',
    imagePath: 'no image'
  }

  handleChange = (evt) => {
    const { name, value } = evt.target
    this.setState({
      [name]: value // computes name based on the input name coming through the evt.target
    })
  }

  handleClick = () => {
    const newDefect = {
      homeId: this.state.homeId,
      trade: this.state.trade,
      defectName: this.state.defectName,
      defectDescription: this.state.defectDescription,
      status: this.state.status,
      imagePath: this.state.imagePath
    }
    addDefect(newDefect)
      .then(res => {
        this.setState({
          homeId: '',
          trade: '',
          defectName: '',
          defectDescription: '',
          status: 'logged',
          imagePath: 'no image'
        })
      })
  }

  render () {
    return (
      <div className='logDefectContainer'>
        <h2>Log Defect</h2>
        <img className='floorplanImage' src='/images/floorplan1.png'></img>
        <form className='defectForm'>
        <div className='defectFormHomeId'>Home Id:  <input name='homeId' onChange={this.handleChange}></input></div>
          <div className='defectFormTrade'>Trade:  <input name='trade' onChange={this.handleChange}></input></div>
          <div className='defectFormName'>Defect Name: <input name='defectName' onChange={this.handleChange}></input></div>
          <div className='defectFormDescription'>Defect Description: <input name='defectDescription' onChange={this.handleChange}></input></div>
          <button className='defectFormButton' onClick={this.handleClick}>Log defect</button>
        </form>
        <ReturnToDashboard />
      </div>
    )
  }
}

export default LogDefect