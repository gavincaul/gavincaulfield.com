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
      background: "36, 49, 25",
      primary: "98, 148, 96",
      secondary: "150, 190, 140",
      accent: "172, 236, 161",
      text: "201, 242, 199",
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
    if (skills && skills.skills) {
      setSkillMap(skills.skills);
      setGroupColor(skills.groupColor);
    } else {
      navigate("/experience/skills");
    }
  }, [id, navigate]);

  
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

  const skillsArray = Object.keys(skillMap).map((key) => {
    const { time, experience, works, img, projects} =
      skillMap[key];
    return (
      <Skill
        groupcolor={groupColor}
        img={img}
        key={key}
        name={key}
        time={time}
        works={works}
        experience={experience}
        projects={projects}
      />
    );
  });
  let colCount = Math.round(useWindowSize().width / 200);
  if (colCount < 1) colCount = 1;
  if (colCount > 4) colCount = 4;
  const cols = Array.from({ length: colCount }, () => []);
  for (let i = 0; i < skillsArray.length; i += 1) {
    cols[i % colCount].push(skillsArray[i]);
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
