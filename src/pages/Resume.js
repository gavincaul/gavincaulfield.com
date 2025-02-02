import React, { useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import myresume from "../data/Caulfield, Gavin Resume.jpg";
import "./Resume.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
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
    <div className="background">
      <NavBar />

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
        <a
          href="https://www.linkedin.com/in/gavincaulfield"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button button-linkedin">LinkedIn</button>
        </a>
        <a
          href="https://github.com/gavincaul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button button-github">GitHub</button>
        </a>
        <a
          href="https://scholar.google.com/citations?user=IdAPR7sAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button button-scholar">
            Google Scholar
          </button>
        </a>
      </div>

      <div className="resume-container">
        <a
          href={myresume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={myresume} alt="Resume" className="resume-image" />
        </a>
      </div>
    </div>
  );
}
