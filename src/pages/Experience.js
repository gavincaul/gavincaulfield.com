import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";
import creative from "../data/projects/creative.jpg";
import potpourri from "../data/projects/potpurri.jpg";
import { getProjects } from "../components/GetProjects.ts";
import work from "../data/projects/work.jpg";
import NavBar from "../components/NavBar.tsx";
import ExperienceItem from "../components/ExperienceItem.tsx";

export default function Experience() {
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
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleProjectClick(id) {
    console.log("handling");
    navigate(`/experience/${id}`);
  }
  function handleSkillsClick() {
    navigate("/experience/skills");
  }
  function handleAccoladesClick() {
    navigate("/experience/accolades");
  }

  const projects = [
    {
      id: "potpourri",
      src: potpourri,
      color: `rgb(${colorPalette.accent})`,
      text: "In this picture, my brother Colton and I are celebrating my receipt of the prestigious Hatem M. Khalil Award.",
    },
    {
      id: "work",
      src: work,
      color: `rgb(${colorPalette.accent})`,
      text: "This photo captures a moment of celebration with my coworker and friend, Ella Wilkins, after I won my favorite sweatshirt.",
    },

    {
      id: "creative",
      src: creative,
      color: `rgb(${colorPalette.accent})`,
      text: "Behind the scenes with Phoebe, my dog; the star.",
    },
  ];
  const allProjects = getProjects({ parent: "all" });
  const allProjectItems = allProjects.map((item, i) => (
    <div className="projectElement" key={item.key}>
      <ExperienceItem
        projectKey={i}
        img={item.img}
        title={item.title}
        desc={item.desc}
        color={colorPalette.secondary}
        links={item.links}
      />
    </div>
  ));



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
        <div className="titleexp">Experience</div>
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
      <div className="subtext">
        I work in a lot of areas, not all coinciding within each other. Please
        click and investigate some of my work experience.
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            onClick={() => handleProjectClick(project.id)}
            onMouseEnter={() => setHoveredImage(project.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={project.src || null}
              alt={project.id}
              style={{ borderColor: project.color }}
              onClick={() => handleProjectClick(project.id)}
            />
            <div className="project-title">{project.id}</div>
            <div className="project-title">{project.id}</div>
            {hoveredImage === project.id && (
              <div className="projectwindow">
                <div className="flavor-text">{project.text}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="allProjectTitle">All  Projects</div>
        <div className="allProjectsContainer">
          {allProjectItems}
        </div>
    </div>
  );
}
