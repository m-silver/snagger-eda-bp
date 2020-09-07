import React from 'react'

import ReturnToDashboard from './ReturnToDashboard'

class LogDefect extends React.Component {

  render () {
    return (
      <div>
        <h2>Log Defect</h2>
        <img src='/images/floorplan1.png'></img>
        <form className='defectForm'>
          <div className='defectFormTrade'>Trade:  <input name='trade'></input></div>
          <div className='defectFormName'>Defect Name: <input name='defectName'></input></div>
          <div className='defectFormDescription'>Defect Description: <input name='defectDescription'></input></div>
          <button onClick={this.handleClick}>Log defect</button>
        </form>
        <ReturnToDashboard />
      </div>
    )
  }
}

export default LogDefect