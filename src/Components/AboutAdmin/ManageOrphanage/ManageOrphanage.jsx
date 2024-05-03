import React from 'react'
import "./ManageOrphanage.css"
import { Link } from 'react-router-dom'

export const ManageOrphanage = () => {
  return (
    <>
      <div className=' ManageOrphanage-container'>
        <div className='ManageOrphanage-sub-container'>
          <div className='heading'><h1>MANAGE ALL ORPHANAGE DETAILS</h1></div>
          <table className='table-Details'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Orpanage Name</th>
                  <th>Location</th>
                  <th>Orpanage Admin</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>sri home</td>
                  <td>colombo</td>
                  <td>kaje</td>
                  <td>0775354890</td>
                  <td>kaje2002@gmail.com</td>
                  <td>
                    <div className='edit-buttons'>
                    <Link to="/Admin/ManageOrphanage/UpdateOrphange"><button  className='update-button'>Update</button></Link>
                    <button  className='delete-button'>Delete</button>
                    </div>
                    
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>lali home</td>
                  <td>jaffna</td>
                  <td>lali</td>
                  <td>0775354657</td>
                  <td>lalaithambikai2002@gmail.com</td>
                  <td>
                  <div className='edit-buttons'>
                      <Link to="/Admin/ManageOrphanage/UpdateOrphange"><button  className='update-button'>Update</button></Link>
                      <button  className='delete-button'>Delete</button>
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
