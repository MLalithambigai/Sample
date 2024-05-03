import React, { useState } from 'react';
import "./OrphanageNavbar.css";
import logo from "../../Assets/app_logo .png";


export const OrphanageNavbar = () => {
  
  const[menu,setMenu]=useState("Home")
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='OrphanageNavbar'>
            <div className='logo-setup'>
                <img src={logo} alt="Logo" />
                <h2>ORPHANAGE</h2> 
            </div>
      </div>
      
    </>
  );
};


/*

<li> <Link to='/Orphanage-Name/GiveFeedback' style={{ textDecoration: "none", color: "black" }}>Give Feedback</Link> </li>
                  <li> <Link to="/" style={{ textDecoration: "none", color: "black" }}>Logout</Link> </li>


            <li> <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Home</Link> </li>
            <li> <Link to="/Orphanage-Name/GiveReDonor" style={{ textDecoration: "none", color: "blue" }}>Give Request to Donate</Link> </li>
            <li> <Link to='/Orphanage-Name/ViewReStatus' style={{ textDecoration: "none", color: "blue" }}>View Request Status</Link> </li>
            <li> <Link to='/Orphanage-Name/GiveFeedback' style={{ textDecoration: "none", color: "blue" }}>Give Feedback</Link> </li>
            <li> <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Logout</Link> </li>*/