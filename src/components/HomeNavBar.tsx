import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeNavBar.css";

function HomeNavBar({ borderColor }) {
  return (
    <div className="grid" style={{ "--borderColor": borderColor } as any}>
      <nav id="HomeNavBar">
        <div className="bar"></div>
        <NavLink className="nav-link" to="/highlights">
          Highlights
        </NavLink>
        <div className="bar"></div>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <div className="bar"></div>
        <NavLink className="nav-link" to="/experience">
          Experience
        </NavLink>
        <div className="bar"></div>
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
        <div className="bar"></div>
        <NavLink className="nav-link" to="/stamps">
          Stamps
        </NavLink>
        <div className="bar"></div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
