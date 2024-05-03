import React from 'react'
import { AddOrphanage } from '../AddOrphanage/AddOrphanage'

export const UpdateOrphanage = () => {
  return (
    <div className='AddOrphanage-container'>
        <div className='AddOrphanage-heading'>
          <div className='new-addmission'><h2>UPDTE ORPHANAGE DETAIlS</h2></div>
        <div/>

        <div className='sub-AddOrphanage-container'>
          <tr>
            <td>Orphanage Name:</td>
            <td><input type="text" placeholder='Orphanage Name'/></td>
          </tr>

          <tr>
            <td>Location:</td>
            <td><input type="text" placeholder='Location' /></td>
          </tr>

          <tr>
            <td>Orphanage Admin:</td>
            <td><input type="text" placeholder='Orphanage Admin'/></td>
          </tr>

          <tr>
            <td>Description:</td>
            <td><input type="text" placeholder='Description'/></td>
          </tr>

          <tr>
            <td>Username:</td>
            <td><input type="text" placeholder='Username' /></td>
          </tr>

          <tr>
            <td>Password:</td>
            <td><input type="text" placeholder='Password' /></td>
          </tr>

          <tr>
            <td>Moboile Number:</td>
            <td><input type="text" placeholder='Moboile Number' /></td>
          </tr>

          <tr>
            <td>Email Id:</td>
            <td><input type="text" placeholder='Email Id'/></td>
          </tr>

          <button>UPDATE</button>
        </div>
        </div>
    </div>
  )
}
