import React from 'react'
import "./DoViewHistory.css"

export const DoViewHistory = () => {
  return (
    <>
      <div className=' History-container'>
        <div className='History-sub-container'>
          <div className='History-heading'><h1>VIEW ALL REQUEST STATUS</h1></div>
          <table className='History-table-Details'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Orpanage Name</th>
                  <th>Orpanage Admin</th>
                  <th>Purpose</th>
                  <th>Requested Date</th>
                  <th>Accepted Date</th>
                  <th>Status</th>
                  
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td style={{color:"red",fontWeight:600}}>Remi home</td>
                  <td>Deepa</td>
                  <td style={{color:"red",fontWeight:600}}>Education</td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>2024.04.14 15:50 PM</td>
                  <td style={{color:"blue",fontWeight:600,cursor:"pointer"}}>Received</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td style={{color:"red",fontWeight:600}}>Remi home</td>
                  <td>Deepa</td>
                  <td style={{color:"red",fontWeight:600}}>Education</td>
                  <td>2024.04.10 12:50 PM</td>
                  <td>2024.04.14 15:50 PM</td>
                  <td style={{color:"blue",fontWeight:600,cursor:"pointer"}}>Received</td>
                </tr>
              </tbody>
          </table>
          
        </div>
      </div>
    </>
  )
}
