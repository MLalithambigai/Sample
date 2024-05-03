import React from 'react'
import "./CSS/OrphanageLogin.css"
import { Link } from 'react-router-dom'

export const OrpanageLogin = () => {
  return (
    <div className='main-continer'>
    <div className='Admin-container'>
    <div className='Admin-header'>
      <h2>Orphanage Login</h2>
    </div>

    <div className='Admin-body'>
      <input type="text" placeholder='Orphane Name'  className='Admin-body-input' name=''/>
      <input type="text" placeholder='Username' className='Admin-body-input' name='Username' />
      <input type="text" placeholder='Password' className='Admin-body-input' name='Password'/>
      <button className='Admin-body-button'> <Link to="/Orphanage-Name" style={{textDecoration:"none"}}>SIGN IN</Link></button>
    </div>
  </div>
  </div>
  )
}
