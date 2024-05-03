import React from 'react'
import "./Subscripe.css"

export const Subscripe = () => {
  return (
    <div className='Newleeter'>
        <div className="Newleeter-text">
            <div><h1>Get Argent Wants of Orpanage On Your Email</h1></div>
            <div>Subcribe to our newletter and stay updated</div>
         </div>
        <div className='subcribe'>
            <input type="text" placeholder='Enter Email Id'/>
            <button>Subcribe</button>
        </div>
        
    </div>
  )
}
