import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNavBar.css';

function HomeNavBar({borderColor}) {
  return (
    <div className="grid">
      <nav id="HomeNavBar">
        <div className="bar" style={{ borderColor: borderColor }}></div>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <div className="bar" style={{ borderColor: borderColor}}></div>
        <NavLink className="nav-link" to="/experience">
          Experience
        </NavLink>
        <div className="bar"style={{ borderColor: borderColor }} ></div>
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
        <div className="bar" style={{ borderColor: borderColor }}></div>
      </nav>
    </div>
  );
}

export default HomeNavBar;