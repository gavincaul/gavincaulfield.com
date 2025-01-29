import { useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import "./SkillsPage.css";
import skillsData from "../data/pages.json";
import Skill from "../components/Skill.tsx";
import SkillsNavBar from "../components/SkillsNavBar.tsx";
import NavBar from "../components/NavBar.tsx";

export default function SkillsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skills, setSkills] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const skills = skillsData.skills[id];
    if (skills) {
      setSkills(skills);
    } else {
      navigate("/experience/skills");
    }
  }, [id, navigate]);

  const skillsArray = Object.keys(skills).map((key) => {
    const { time, experience, projects } = skills[key];
    return (
      <Skill
        name={key}
        time={time}
        experience={experience}
        projects={projects}
      />
    );
  });
  let rowCount = 3;
  const cols = [[], [], []];
  for (let i = 0; i < skillsArray.length; i += 1) {
    cols[i % rowCount].push(skillsArray[i]);
  }

  return (
    <div className="skillsbackground">
      <NavBar />
      <SkillsNavBar />
      <div className="skillsRow">
        {cols.map((row, rowIndex) => (
          <div className="skillCol" key={rowIndex}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
