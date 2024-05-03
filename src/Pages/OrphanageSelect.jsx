import React from 'react'
import "./CSS/OrphanageSelect.css"
import { Link } from 'react-router-dom'

export const OrphanageSelect = () => {
  return (
    <div className='main-continer'>
    <div className='Admin-container'>
        <div className='Admin-header'>
        <h2>Select Orphanage</h2>
        </div>

        <div className='Admin-body'>
        <select name="" id="select" >
            <option value="1" className='option-ChooseOrphanage'>Choose Orphanage</option> 
            <option value="2" >Lali House</option>
            <option value="3" >Remi House</option>
            <option value="4" >Kaje House</option>
        </select>
        <button type='submit' className='Admin-body-button'> <Link to="/OrphanageLogin" style={{textDecoration:"none"}}>Submit</Link></button>
        </div>
    </div>
  </div>
  )
}
