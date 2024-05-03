import React from 'react'
import "./GiveFeedback.css"

export const GiveFeedback = () => {
  return (
    <div className='Feedback-container'>
        <div className='Feedback'>

          <div className='give-feedback '><h2>GIVE FEEDBACK</h2></div>
        
          <div className='sub-Feedback-container'>
            <tr>
              <td>Name:</td>
              <td><input type="text" placeholder='Deepa'/></td>
            </tr>

            <tr>
              <td>mail ID:</td>
              <td><input type="text" placeholder='remi2002@gmail.com'/></td>
            </tr>

            <tr>
              <td>Feedback:</td>
              <td ><input type="text" placeholder='' style={{height:"50px"}}/></td>
            </tr>

            <button>Submit</button>
          </div>
          </div>
        <div/>
    </div>
  )
}
