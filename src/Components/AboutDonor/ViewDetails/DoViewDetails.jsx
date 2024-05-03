import React from 'react'
import "./DoViewDetails.css"
import { Link } from 'react-router-dom'

export const DoViewDetails = () => {
  return (
    <>
      <div className=' ViewDetails-container'>
        <div className='ViewDetails-sub-container'>
          <div className='heading'><h1>ALL DONATION REQUEST DETAILS</h1></div>
          <table className='table-Details'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Orpanage Name</th>
                  <th>Mail Id</th>
                  <th>Orpanage Admin</th>
                  <th>Purpose</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td style={{color:"red",fontWeight:600}}>Remi home</td>
                  <td>kaje2002@gmail.com</td>
                  <td>kaje</td>
                  <td style={{color:"red",fontWeight:600}}>Education</td>
                  <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum qui rem nostrum provident corporis sunt? </td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>
                    <div className='buttons'>
                    <Link to="/Donor-Name/ViewDetails/Donationform"><button  className='Accept-button'>Accept</button></Link>
                    <button  className='Reject-button'>Reject</button>
                    </div>
                    
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td style={{color:"red",fontWeight:600}}>Kaje home</td>
                  <td>kaje2002@gmail.com</td>
                  <td>kaje</td>
                  <td style={{color:"red",fontWeight:600}}>Foods</td>
                  <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum qui rem nostrum provident corporis sunt? </td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>
                    <div className='edit-buttons'>
                    <Link to="/Donor-Name/ViewDetails/Donationform"><button  className='Accept-button'>Accept</button></Link>
                    <button  className='Reject-button'>Reject</button>
                    </div>
                    
                  </td>
                </tr>

              </tbody>
          </table>
          
        </div>
      </div>
    </>
    
  )
}

 
