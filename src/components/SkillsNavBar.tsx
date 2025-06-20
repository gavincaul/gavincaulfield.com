import React, { useState } from "react";
import "./SkillsNavBar.css";
import pagesData from "../data/pages.json";
import { useNavigate } from "react-router-dom";

export default function SkillsNavBar() {
  const navigate = useNavigate();
  const skills = pagesData.skills;
  const [activeSkill, setActiveSkill] = useState(null);

  function handleSkillsClick(id) {
    setActiveSkill(id);
    navigate(`/experience/skills/${id}`);
  }

  return (
    <div className="navSkills">
      {Object.keys(skills).map((e, index) => (
        <div
          className={`skillsLink ${activeSkill === e ? "active" : ""}`}
          style={{ "--color": skills[e].groupColor } as any}
          onClick={() => handleSkillsClick(e)}
          key={index}
        >
          {e}
        </div>
      ))}
    </div>
  );
}
