import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNavBar.css';

function HomeNavBar() {
  return (
    <div className="grid">
      <nav id="HomeNavBar">
        <div className="bar" style={{ borderColor: "#135618" }}></div>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <div className="bar" style={{ borderColor: "#2E6032" }}></div>
        <NavLink className="nav-link" to="/experience">
          Experience
        </NavLink>
        <div className="bar"style={{ borderColor: "#2E6032" }} ></div>
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
        <div className="bar" style={{ borderColor: "#135618" }}></div>
      </nav>
    </div>
  );
}

export default HomeNavBar;