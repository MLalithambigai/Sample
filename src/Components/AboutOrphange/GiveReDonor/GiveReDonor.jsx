import React from 'react'
import "./GiveReDonor.css"

export const GiveReDonor = () => {
  return (
    <div className='GiveReDonor-container'>
        <div className='GiveReDonor'>

          <div className='give-requst '><h2>GIVE REQUEST TO DONOR</h2></div>
          

          <div className='sub-GiveReDono-container'>
            <tr>
              <td>Orphanage Name:</td>
              <td><input type="text" placeholder='Orphanage Name'/></td>
            </tr>

            <tr>
              <td>Purpose of Request:</td>
              <td>
                <select name="" id="select">
                  <option value="" className='option1'>...Select...</option>
                  <option value="">Education</option>
                  <option value="">Food</option>
                  <option value="">Health</option>
                  <option value="">Money</option>
                  <option value="">Others</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>Description:</td>
              <td><input type="text" placeholder='AdD Description'/></td>
            </tr>

            <tr>
              <td>Date:</td>
              <td><input type="text" placeholder='Date'/></td>
            </tr>

            <button>Send Request</button>
          </div>
          </div>
        <div/>
    </div>
  )
}
