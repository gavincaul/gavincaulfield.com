import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";
import creative from "../data/projects/creative.jpg";
import potpourri from "../data/projects/potpurri.jpg";
import research from "../data/projects/research.jpg";
import spotify from "../data/projects/spotify.jpg";
import work from "../data/projects/work.jpg";
import NavBar from "../components/NavBar.tsx";

export default function Experience() {
  const [colorPalette, setColorPalette] = useState(() => {
    const stored = sessionStorage.getItem("colorPalette");
    return stored
      ? JSON.parse(stored)
      : {
          name: "Forest",
          background: "#243119",
          primary: "#629460",
          secondary: "#96BE8C",
          accent: "#ACECA1",
          text: "#C9F2C7",
        };
  });
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
      color: colorPalette.accent,
      text: "In this picture, my brother Colton and I are celebrating my receipt of the prestigious Hatem M. Khalil Award.",
    },
    {
      id: "work",
      src: work,
      color: colorPalette.accent,
      text: "This photo captures a moment of celebration with my coworker and friend, Ella Wilkins, after I won my favorite sweatshirt.",
    },

    {
      id: "creative",
      src: creative,
      color: colorPalette.accent,
      text: "Behind the scenes with Phoebe, my dog; the star.",
    },
  ];

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
        <button className="button-45" onClick={handleSkillsClick}>
          Skills
        </button>
        <div className="titleexp">Projects</div>
        <button className="button-45" onClick={handleAccoladesClick}>
          Accolades
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
              src={project.src}
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
    </div>
  );
}
