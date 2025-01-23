import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';


export default function NavBar(){

    return(

        <div className='nav'>
            <NavLink className='link' to='/home'>
                GC
            </NavLink>
            <NavLink className="link" to="/about">
                About
            </NavLink>
            <NavLink className="link" to="/experience">
                Experience
            </NavLink>
            <NavLink className="link" to="/resume">
                Resume
            </NavLink>
        </div>
        
    )
}