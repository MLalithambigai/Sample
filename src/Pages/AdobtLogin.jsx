import React from 'react'
import "./CSS/AdobtLogin.css"
import { Link } from 'react-router-dom'

export const AdobtLogin = () => {

 

  return (
    <div className='AdobtLogin-main-continer'>
      <div className='AdobtLogin-container'>
        <div className='AdobtLogin-header'>
          <h2>Adopter Login</h2>
        </div>

        <div className='AdobtLogin-body'>
          <input type="text" placeholder='Username' className='AdobtLogin-body-input' name='Username' />
          <input type="text" placeholder='Password' className='AdobtLogin-body-input' name='Password'/>
          <button className='AdobtLogin-body-button'> <Link to="/Adobt/ViewChild" style={{textDecoration:"none"}}>SIG IN</Link></button>
        </div>

        <div className='AdobtLogin-signup'>
          <p>Before Don't Register Please Register Now!!!</p>
          <Link to="/Adobt/Regester" style={{textDecoration:"none"}}><h3>REGISTER NOW</h3></Link>
        </div>
      </div>
    </div>
  )
}
