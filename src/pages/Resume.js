import React, { useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import myresume from "../data/files/Caulfield, Gavin Resume.jpg";
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
        background: "36, 49, 25",
        primary: "98, 148, 96",
        secondary: "150, 190, 140",
        accent: "172, 236, 161",
        text: "201, 242, 199",
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
        <button className="btn" onClick={handleSkillsClick}>
          <span className="textbtn">Skills</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66669 11.3334L11.3334 4.66669"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66669 4.66669H11.3334V11.3334"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="titleexp">Resume</div>
        <button className="btn" onClick={handleAccoladesClick}>
          <span className="textbtn">Awards</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66669 11.3334L11.3334 4.66669"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66669 4.66669H11.3334V11.3334"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
