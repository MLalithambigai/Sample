import React from 'react'
import "./CSS/DonorLogin.css"
import { Link } from 'react-router-dom'

export const DonerLogin = () => {
  return (
    <div className='main-continer'>
      <div className='Admin-container'>
        <div className='Admin-header'>
          <h2>Donor Login</h2>
        </div>

        <div className='Admin-body'>
          <input type="text" placeholder='Username' className='Admin-body-input' name='Username' />
          <input type="text" placeholder='Password' className='Admin-body-input' name='Password'/>
          <button className='Admin-body-button'> <Link to="/Donor-Name" style={{textDecoration:"none"}}>SIGN IN</Link></button>
        </div>

        <div className='Donor-signup'>
          <p>New Donor signup not correct</p>
          <h3>SIGN UP NOW</h3>
        </div>
      </div>
    </div>
  )
}
