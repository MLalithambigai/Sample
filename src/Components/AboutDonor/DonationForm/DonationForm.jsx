import React from 'react'
import "./DonationForm.css"

export const DonationForm = () => {
  return (
    <div className='DonationForm-container'>
        <div className='DonationForm-heading'>
          <div className='DonationForm'><h2>DONATION FORM</h2></div>
        <div/>

        <div className='sub-DonationForm-container'>
          <tr>
            <td>ID:</td>
            <td><input type="text" placeholder='4'/></td>
          </tr>
          <tr>
            <td>Orphanage Name:</td>
            <td><input type="text" placeholder='Kaje House'/></td>
          </tr>

          <tr>
            <td>Purpose:</td>
            <td><input type="text" placeholder='Education' /></td>
          </tr>

          <tr>
            <td>Donar Name:</td>
            <td><input type="text" placeholder='Kaje'/></td>
          </tr>

          <tr>
            <td>Email:</td>
            <td><input type="text" placeholder='kaje2002@gmail.com'/></td>
          </tr>

          <tr>
            <td>Enter Amount:</td>
            <td><input type="text" placeholder=''/></td>
          </tr>

          <tr>
            <td>Card Number:</td>
            <td><input type="text" placeholder='' /></td>
          </tr>

          <tr>
            <td>Expiry date:</td>
            <td><input type="text" placeholder='' /></td>
          </tr>

          <tr>
            <td>CCV:</td>
            <td><input type="text" placeholder=''/></td>
          </tr>

          <button>Donate</button>
        </div>
        </div>
    </div>
  )
}
