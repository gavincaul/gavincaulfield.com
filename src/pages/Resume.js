import React, { useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import myresume from "../data/Caulfield, Gavin Resume.jpg";
import "./Resume.css";
import { useNavigate } from "react-router-dom";
import githubLogo from "../data/logos/githublogo.png";
import linkedInLogo from "../data/logos/linkedin.png";
import instagramLogo from "../data/logos/instagram.png";
import scholarLogo from "../data/logos/scholar.png";

export default function Resume() {
  const stored = sessionStorage.getItem("colorPalette");
  const colorPalette = stored
    ? JSON.parse(stored)
    : {
        name: "Forest",
        background: "#243119",
        primary: "#629460",
        secondary: "#96BE8C",
        accent: "#ACECA1",
        text: "#C9F2C7",
      };
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleSkillsClick() {
    navigate("/experience/skills");
  }
  function handleAccoladesClick() {
    navigate("/experience/accolades");
  }
  return (
    <div
      className="background"
      style={{
        "--color0": colorPalette.background,
        "--color1": colorPalette.primary,
        "--color2": colorPalette.secondary,
        "--color3": colorPalette.accent,
        "--color4": colorPalette.text,
      }}
    >
      <NavBar color={colorPalette} />

      <div className="title-container">
        <button className="button-45" onClick={handleSkillsClick}>
          Skills
        </button>
        <div className="titleexp">Resume</div>
        <button className="button-45" onClick={handleAccoladesClick}>
          Accolades
        </button>
      </div>

      <div className="button-container">
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/gavincaulfield"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <img alt="LinkedIn" src={linkedInLogo}></img>
            </div>
          </a>

          <a
            className="social-icon"
            href="https://scholar.google.com/citations?user=IdAPR7sAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <img alt="googlescholar" src={scholarLogo}></img>
            </div>
          </a>
          <a
            className="social-icon"
            href="https://www.github.com/gavincaul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <img alt="github" src={githubLogo}></img>
            </div>
          </a>
          <a
            className="social-icon"
            href="https://www.instagram.com/gavincaulfield_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <img alt="Instagram" src={instagramLogo}></img>
            </div>
          </a>
        </div>
      </div>

      <div className="resume-container">
        <a href={myresume} target="_blank" rel="noopener noreferrer">
          <img src={myresume} alt="Resume" className="resume-image" />
        </a>
      </div>
    </div>
  );
}
