import React from 'react'
import "./CSS/AdobtRegister.css"

export const AdobtRegister = () => {
  return (
    <div className='Adobt-main-container'>
        <div className='Adobt-container'>
            <div className='Adobt-container-head'>
                <div className='Register-form'><h1>ADOPTER REGISTER FORM</h1></div>
            </div>

            <div className='Adobt-container-body'>
                <div className='Adobt-image'>
                    <img src="" alt="" />
                    <h3>Register here</h3>
                </div>
            
                <tr>
                    <td>Applicant Name:</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Married:</td>
                    <input type="radio" /> <label htmlFor="">YES</label>
                    <input type="radio" /> <label htmlFor="">NO</label>
                    
                </tr>
                <tr>
                    <td>Husband/Wife Name:</td>
                    <input type="text" />    
                </tr>
                <tr>
                    <td>Adsress:</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Mobile No:</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Username:</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Password:</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Conform Password:</td>
                    <input type="text" />
                </tr>
                <button className='Adoct-button'>Submit</button>
            </div>
        </div>
    </div>
  )
}
