import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const Nav = () =>{

    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Education</NavLink>
        </div>
    )
}

export default Nav;
