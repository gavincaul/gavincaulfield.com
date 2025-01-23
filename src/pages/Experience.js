import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";
import creative from "../data/projects/creative.jpg";
import potpourri from "../data/projects/potpurri.jpg";
import research from "../data/projects/research.jpg";
import spotify from "../data/projects/spotify.jpg";
import work from "../data/projects/work.jpg";
import NavBar from "../components/NavBar.tsx";
import SkillsNavBar from "../components/SkillsNavBar.tsx";


export default function Experience() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  function handleProjectClick(id) {
    navigate(`/experience/${id}`);
  }

  const projects = [
    { id: "research", src: research, color: "#4D5382", text: "Shown here is my presentation on the Enhanced Physical Rehabilitation project at CHASE NERIC 2023." },
    { id: "work", src: work, color: "#FF6B35", text: "This photo captures a moment of celebration with my coworker and friend, Ella Wilkins, after I won my favorite sweatshirt." },
    { id: "potpourri", src: potpourri, color: "#9BC53D", text: "In this picture, my brother Colton and I are celebrating my receipt of the prestigious Hatem M. Khalil Award." },
    { id: "spotify", src: spotify, color: "#80FFEC", text: "Here’s a young Gavin playing the xylophone, marking the beginning of my lifelong love for music." },
    { id: "creative", src: creative, color: "#F1D302", text: "Behind the scenes with Phoebe, my dog; the star." },
  ];

  return (
    <div className="background">
          <SkillsNavBar />
      <NavBar />
  
      <div className="title">
        Projects
        <div className="subtext">
          I work in a lot of areas, not all coinciding within each other.
          Please click and investigate some of my work experience.
        </div>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            onMouseEnter={() => setHoveredImage(project.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={project.src}
              alt={project.id}
              style={{ borderColor: project.color }}
              onClick={() => handleProjectClick(project.id)}
            />
            <p>{project.id}</p>
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
