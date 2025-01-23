import React, { useEffect } from "react";
import { useState } from "react";
import "./Skill.css";
import StarRating from "./StarRating.tsx";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/pages.json"

export default function Skill({ name, time, experience, projects }) {
  const [dropdown, setDropdown] = useState(false);
  const [mappedProjects, setMappedProjects] = useState([]);
  const handleDropDown = () => {
    setDropdown(!dropdown);
  };
  const navigate = useNavigate();

  const handleSkillMap = () => {
    if (mappedProjects["projects"]) {
      navigate(`/experience/${name}#projects`, { state: { mapProjects:mappedProjects } });
    }
  };


  useEffect(() => {
    if (projects.length > 0) {
    
      const newMappedProjects = projects.reduce((acc, projectPath) => {
        let projectData = projectsData["pages"]; 
        projectPath.split("/").forEach(index => {
          projectData = projectData[index];
        });
        const name = projectPath.split("/").pop();
        acc[name] = {
          //@ts-ignore
          img: projectData.img,
          //@ts-ignore
          desc: projectData.desc,
          //@ts-ignore
          links: projectData.links 
        };

        return acc;
      }, {});

      // Set the mapped projects object
      setMappedProjects({ "why": "", "projects": newMappedProjects });
    }
  }, [projects]);

  return (
    // dropdown
    <div className="skill">
      <button onClick={handleDropDown} className="dropbtn">
        {name}
      </button>
      {dropdown && (
        <div>
          <div className="skillAttributeBlock" style={{ "--id": 5 }}>
            <div className="item">
              Time: {time} 
            </div>
          </div>
          <div className="skillAttributeBlock" style={{ "--id": 8 }}>
            <div className="item">
              Experience:
              <StarRating rating={experience} />
            </div>
          </div>
          <div className="skillAttributeBlock" style={{ "--id": 11 }}>
            <div
              className="item"
              onClick={handleSkillMap}
              style={{ color: Boolean(mappedProjects["projects"]) ? "#6564DB" : "#d81e5b" , textDecoration: "underline" }}
            >
              Projects
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
