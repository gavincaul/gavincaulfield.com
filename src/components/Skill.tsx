import React, { useEffect } from "react";
import { useState } from "react";
import "./Skill.css";
import StarRating from "./StarRating.tsx";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/pages.json";

export default function Skill({
  groupcolor,
  name,
  img,
  time,
  experience,
  works,
  projects,
}) {
  const [mappedProjects, setMappedProjects] = useState([]);

  const navigate = useNavigate();

  const handleSkillMap = () => {
    if (mappedProjects["projects"]) {
      navigate(`/experience/${encodeURIComponent(name)}#projects`, {
        state: { mapProjects: mappedProjects },
      });
    }
  };

  useEffect(() => {
    if (projects.length > 0) {
      const newMappedProjects = projects.reduce((acc, projectPath) => {
        let projectData = projectsData["pages"];
        projectPath.split("/").forEach((index) => {
          projectData = projectData[index];
        });
        const name = projectPath.split("/").pop();
        if (projectData === undefined) {
          console.log(projectPath, name);
        }
        acc[name] = {
          //@ts-ignore
          img: projectData.img,
          //@ts-ignore
          desc: projectData.desc,
          //@ts-ignore
          links: projectData.links,
        };

        return acc;
      }, {});

      // Set the mapped projects object
      setMappedProjects({ why: "", projects: newMappedProjects });
    }
  }, [projects]);


  return (
    <div className="skill-card">
      <header
        className="skill-card__header"
        style={{ backgroundColor: `${groupcolor}` }}
      >
        <img src={img} alt={`${name} Logo`} className="skill-card__icon" />
      </header>
      <section className="skill-card__body">
        <h2 className="skill-card__title">{name}</h2>
        <span className="skill-card__duration">{time}</span>
        <StarRating rating={experience} />
        <ul className="skill-card__knowledge">
          {works.map((item, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${(index + 1) * 0.25}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          className="item"
          onClick={handleSkillMap}
          style={{
            color: Boolean(mappedProjects["projects"]) ? "#6564DB" : "#d81e5b",
            textDecoration: "underline",
          }}
        >
          Projects
        </div>
      </section>
    </div>
  );
}
