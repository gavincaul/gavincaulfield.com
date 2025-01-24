import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navcontainer">
      <div
        className={`button ${isOpen ? '' : 'open'}`}
        onClick={toggleNav}
        role="button"
        aria-label="Toggle navigation"
        tabIndex={0}
      >
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <div className="navlinks">
            <NavLink
              to="/"
              className="navlink"
              style={{ animationDelay: '300ms' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navlink"
              style={{ animationDelay: '400ms' }}
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className="navlink"
              style={{ animationDelay: '500ms' }}
            >
              Experience
            </NavLink>
            <NavLink
              to="/resume"
              className="navlink"
              style={{ animationDelay: '600ms' }}
            >
              Resume
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
