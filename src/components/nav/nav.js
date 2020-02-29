import React from 'react'
import {NavLink} from 'react-router-dom'

import './nav.css'

const Nav = () =>{
   const active={
        fontWeight: "bold",
        color: "red"
      }
    const navStyle={
        textDecoration:"none",
        color:"black",
        
        
    }
    

    return(
        <div className='nav'>
           <div className="nav-child"> <NavLink style={navStyle} to="/">Home </NavLink></div>|
           <div className="nav-child"> <NavLink style={navStyle} to="/projects">Projects </NavLink></div>|
           <div className="nav-child"> <NavLink style={navStyle} to="/goals">Goals </NavLink></div>|
            <div className="nav-child"><NavLink style={navStyle} to="/contact">Contact Me </NavLink></div>|
            <div className="nav-child"><NavLink style={navStyle} to="/experience">Experience </NavLink></div>|
            <div className="nav-child"><NavLink style={navStyle} to="/education">Education </NavLink></div>
            
        </div>
    )
}

export default Nav;
