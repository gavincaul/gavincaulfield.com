import React from "react";
import NavBar from "../components/NavBar.tsx";
import myresume from "../data/Caulfield, Gavin Resume.jpg";
import "./Resume.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();
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
        <button className="skillAccButton" onClick={handleSkillsClick}>
          Skills
        </button>
        <div className="titleexp">Resume</div>
        <button className="skillAccButton" onClick={handleAccoladesClick}>
          Accolades
        </button>
      </div>
      <img src={myresume} alt="Resume" className="resume-image" />
    </div>
  );
}
