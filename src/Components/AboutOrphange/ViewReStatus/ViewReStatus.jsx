import React from 'react'
import "./ViewReStatus.css"
import {Link} from "react-router-dom"

export const ViewReStatus = () => {
  return (
    <>
      <div className=' View_ReDetails-container'>
        <div className='View_ReDetails-sub-container'>
          <div className='View_ReDetails-heading'><h1>VIEW ALL REQUEST STATUS</h1></div>
          <table className='View_ReDetails-table-Details'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Orpanage Name</th>
                  <th>Mail Id</th>
                  <th>Orpanage Admin</th>
                  <th>Purpose</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Donor Name</th>
                  <th>Status</th>
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
                  <td>Lorem ipsum dolor sit,  adipisicing.... </td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>Test</td>
                  <td>Accepted</td>
                  <td style={{color:"blue",fontWeight:600,cursor:"pointer"}}>Verify & Acknowledge the request</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td style={{color:"red",fontWeight:600}}>Remi home</td>
                  <td>kaje2002@gmail.com</td>
                  <td>kaje</td>
                  <td style={{color:"red",fontWeight:600}}>Education</td>
                  <td>Lorem ipsum dolor sit,  adipisicing.... </td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>Test</td>
                  <td>Accepted</td>
                  <td style={{color:"blue",fontWeight:600,cursor:"pointer"}}>Verify & Acknowledge the request</td>
                </tr>

              </tbody>
          </table>
          
        </div>
      </div>
    </>
  )
}
