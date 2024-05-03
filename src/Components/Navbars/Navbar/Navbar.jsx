import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Assets/app_logo .png"
//import menu_icon from "../../Assets/image.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const[menu,setMenu]=useState("Home")
  return (
    <div className='navber-header'>
        <div className='logo-setup'>
            <img src={logo} alt="Logo" className='logo'/>
            <h2>ORPHANAGE</h2>    
        </div>

        

        <div className="mid-nav">
            <ul>
                <li onClick={()=>setMenu("Home")}> <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link> {(menu === "Home") ? <hr></hr> :<></> }  </li>

                <li onClick={()=>setMenu("AdminLogin")}> <Link to="/AdminLogin" style={{textDecoration:"none",color:"black"}}>Admin</Link> {(menu === "AdminAdminLogin") ? <hr></hr> :<></> } </li>

                <li onClick={()=>setMenu("Orphanage Login")}> <Link to="/OrphanageSelect" style={{textDecoration:"none",color:"black"}}>Orphanage Login</Link> {(menu === "Orphanage Login") ? <hr></hr> :<></> }</li>

                <li onClick={()=>setMenu("Adopt")}> <Link to="/Adopt" style={{textDecoration:"none",color:"black"}}>Adopt</Link>  {(menu === "Adopt") ? <hr></hr> :<></> }</li>

                <li onClick={()=>setMenu("Donor Login")}> <Link to="/DonerLogin" style={{textDecoration:"none",color:"black"}}>Donor Login</Link>  {(menu === "Donor Login") ? <hr></hr> :<></> }</li>

                <li onClick={()=>setMenu("Donor SignUp")}>Donor SignUp {(menu === "Donor SignUp") ? <hr></hr> :<></> }</li>
            </ul>
        </div>
        
    </div>
  )
}
