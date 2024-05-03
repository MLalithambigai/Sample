
import React, { useState } from 'react';
import { OrphanageNavbar } from '../Components/Navbars/OrpanageNavbar/OrphanageNavbar';
import p3_img from "../Components/Assets/im3.png";
import "./CSS/OrphanageShow.css";
import { Link } from 'react-router-dom';
import menuicon from "../Components/Assets/menuicon.png"
import cannel_icon from"../Components/Assets/cannel_icon.png"


export const OrphanageShow = () => {

  const[isopen,setIsOpen] = useState(false)
  const toggle = ()=>setIsOpen(!isopen)
  
  return (
    <div>
      <OrphanageNavbar />
      <div className='OrphanageNavbar-body'>
        <div className='OrphanageNavbar-body-image'>
          <img src={p3_img} alt="" style={{ height: "100%", width:'100%'}} />
        </div>
        <div className={`Orphanage-Links ${isopen ? 'open' : ''}`}>
            <ul>
              <div><li> <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link> </li></div> 
              <div><li> <Link to="/Orphanage-Name/GiveReDonor" style={{ textDecoration: "none", color: "white" }}>Give Request to Donate</Link> </li></div>
              <div><li> <Link to='/Orphanage-Name/ViewReStatus' style={{ textDecoration: "none", color: "white" }}>View Request Status</Link> </li></div>
              <div><li> <Link to='/Orphanage-Name/GiveFeedback' style={{ textDecoration: "none", color: "white" }}>Give Feedback</Link> </li></div>
              <div><li> <Link to='/Orphanage-Name/Add Child' style={{ textDecoration: "none", color: "white" }}>Add Child</Link> </li></div>
              <div><li> <Link to='/Orphanage-Name/view Child' style={{ textDecoration: "none", color: "white" }}>Update Child</Link> </li></div>
              <div><li> <Link to='/Orphanage-Name/AcceptAdoption' style={{ textDecoration: "none", color: "white" }}>Accept Adoption</Link> </li></div>
              <div><li> <Link to="/" style={{ textDecoration: "none", color: "white" }}>Logout</Link> </li></div>
            </ul>
        </div>

        <div className='menuicon' onClick={toggle}> {isopen==true? <img src={cannel_icon} alt="" />:<img src={menuicon} alt="" />}</div>
            
        </div>
      </div>

  );
};