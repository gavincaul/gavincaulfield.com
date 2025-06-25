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
  let isMobile = window.innerWidth <= 768;
  const [mappedProjects, setMappedProjects] = useState({});
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    if (isMobile) setExpanded((prev) => !prev);
  };
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
        const projectData = projectsData.pages.experience.projects[projectPath];
        if (!projectData) {
          console.warn(
            `Project data missing for: ${projectPath} (Skill: ${name})`
          );
          return acc;
        }

        acc[projectPath] = {
          img: require(`../data/imgs/${projectData.img}`),
          desc: projectData.desc,
          links: projectData.links,
        };

        return acc;
      }, {});

      setMappedProjects({ why: "", projects: newMappedProjects });
    }
  }, [projects, name]);

  return (
    <div
      className={`skill-card ${expanded ? "expanded" : ""}`}
      onClick={handleToggle}
    >
      <header
        className="skill-card__header"
        style={{ backgroundColor: `rgb(${groupcolor})` }}
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
          onClick={(e) => {
            e.stopPropagation();
            handleSkillMap();
          }}
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
