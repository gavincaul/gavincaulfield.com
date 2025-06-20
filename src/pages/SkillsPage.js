import { useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import "./SkillsPage.css";
import skillsData from "../data/pages.json";
import Skill from "../components/Skill.tsx";
import SkillsNavBar from "../components/SkillsNavBar.tsx";
import NavBar from "../components/NavBar.tsx";

export default function SkillsPage() {
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
  const { id } = useParams();
  const navigate = useNavigate();

  const [skillMap, setSkillMap] = useState({});
  const [groupColor, setGroupColor] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const skills = skillsData.skills[id];
    console.log(skills);
    if (skills && skills.skills) {
      setSkillMap(skills.skills);
      setGroupColor(skills.groupColor);
    } else {
      navigate("/experience/skills");
    }
  }, [id, navigate]);

  

  const skillsArray = Object.keys(skillMap).map((key) => {
    const { time, experience, works, img, projects} =
      skillMap[key];
    console.log(groupColor);
    return (
      <Skill
        groupcolor={groupColor}
        img={img}
        name={key}
        time={time}
        works={works}
        experience={experience}
        projects={projects}
      />
    );
  });
  let rowCount = 4;
  const cols = [[], [], [], []];
  for (let i = 0; i < skillsArray.length; i += 1) {
    cols[i % rowCount].push(skillsArray[i]);
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
