import React from 'react'
import "./DoViewFeedback.css"

export const DoViewFeedback = () => {
  return (
    <>
    <div className=' DoViewFeedback-container'>
      <div className='DoViewFeedback-sub-container'>
        <div className='DoViewFeedback-heading'><h1>VIEW ALL FEEDBACKS</h1></div>
        <table className='DoViewFeedback-table-Details'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Orpanage Name</th>
                <th>Given By</th>
                <th>Mail</th>
                <th>Feedback</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td style={{color:"red",fontWeight:600}}>Remi home</td>
                <td >Deepa</td>
                <td>regi2002@gmail.com</td>
                <td>The donation more helpful for us</td>
              </tr>

              <tr>
                <td>1</td>
                <td style={{color:"red",fontWeight:600}}>kaje home</td>
                <td>lali</td>
                <td>regi2002@gmail.com</td>
                <td>The donation more helpful for us</td>
              </tr>
            </tbody>
        </table>
        
      </div>
    </div>
  </>
)
}