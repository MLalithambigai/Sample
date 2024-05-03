import React, { useState } from 'react';
import "./DonorNavbar.css"
import logo from "../../Assets/app_logo .png";
import { Link } from 'react-router-dom';

export const DonorNavbar = () => {
    const [menu, setMenu] = useState("Home");
  return (
    <div className='navber-header'>
            <div className='logo-setup'>
                <img src={logo} alt="Logo" />
                <h2>ORPHANAGE</h2>
            </div>

            <div className="mid-nav">
                <ul>
                    <li onClick={() => setMenu("Home")}> <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link> {(menu === "Home") ? <hr></hr> : <></>} </li>

                    <li onClick={() => setMenu("View Details")}> <Link to="/Donor-Name/ViewDetails" style={{ textDecoration: "none", color: "black" }}>View Details</Link> {(menu === "View Details") ? <hr></hr> : <></>} </li>

                    <li onClick={() => setMenu("View All History")}> <Link to='/Donor-Name/ViewHistory' style={{ textDecoration: "none", color: "black" }}>View All History</Link> {(menu === "View All History") ? <hr></hr> : <></>} </li>


                    <li onClick={() => setMenu("View Feedback")}> <Link to='/Donor-Name/ViewFeedback' style={{ textDecoration: "none", color: "black" }}>View Feedback</Link>  {(menu === "View Feedback") ? <hr></hr> : <></>} </li>

                    <li onClick={() => setMenu("Logout")}> <Link to="/" style={{ textDecoration: "none", color: "black" }}>Logout</Link> {(menu === "Logout") ? <hr></hr> : <></>} </li>

                </ul>
            </div>
        </div>
  )
}
