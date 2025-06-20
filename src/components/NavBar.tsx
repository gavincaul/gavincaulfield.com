import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ color }) {
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="navcontainer"
      style={
        {
          "--navcolor": color.secondary,
          "--textcolor": color.textcolor,
          "--highlightcolor": color.background,
        } as any
      }
    >
      <div
        className={`button`}
        role="button"
        aria-label="Toggle navigation"
        tabIndex={0}
      >
        <nav className="nav">
          <div className="navlinks">
            <NavLink
              to="/"
              className="navlink"
              style={{ animationDelay: "300ms" }}
            >
              {isMobile ? "🏠" : "Home"}
            </NavLink>
            <NavLink
              to="/about"
              className="navlink"
              style={{ animationDelay: "400ms" }}
            >
              {isMobile ? "👤" : "About"}
            </NavLink>
            <NavLink
              to="/experience"
              className="navlink"
              style={{ animationDelay: "500ms" }}
            >
              {isMobile ? "🧠💻" : "Experience"}
            </NavLink>
            <NavLink
              to="/resume"
              className="navlink"
              style={{ animationDelay: "600ms" }}
            >
              {isMobile ? "📄" : "Resume"}
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
