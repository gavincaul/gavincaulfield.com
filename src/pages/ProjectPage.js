import { useLocation, useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import pagesData from "../data/pages.json";
import Project from "../components/Project.tsx";
import "./ProjectPage.css";
import NavBar from "../components/NavBar.tsx";

export default function Projects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  let passedProjects;
  const location = useLocation();
  if (location.state !== null) {
    passedProjects = location.state.mapProjects;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const pageData = passedProjects ? passedProjects : pagesData.pages[id];
    if (pageData) {
      setData(pageData);
    } else {
      navigate("/experience");
    }
  }, [id, navigate, passedProjects]);

  /*
  Projects to add

  CISC275 Restaurant ; Git Agile TS JS HTML CSS  React VSC
  HCI Research ; C# .NET Unity R C++ VSC Unity3D/2D Google Workplace Clinical Research Data Analysis Clinical Writing Reportive Writing Photoshop
  This Website ; Git Agile TS JS HTML CSS React Domain Management  VSC 
  Septronix ; Musical Abilities
  Drumming ; Musical Abilities
  Finding Nolan ; FCP; 
  Dance Video FCP Photoshop
  Midwifery VSC Unity3D/2D Clinical Research Data Analysis
  Other HCI? VSC Unity3D/2D Clinical Research Data Analysis

   



  */

  if (!data) return <div>Loading...</div>;
  const { projects, why } = data;
  const rowCount = 2;
  console.log(projects);
  const projectArray = Object.keys(projects).map((key, index) => {
    const { img, desc, links } = projects[key];
    const picture = require(`../data/imgs/${img}`);

    return (
      <div className="projectElement" key={index}>
        <Project
          index={index % 2}
          img={picture}
          text={desc}
          color={projects[key].color}
          link={links}
          projectKey={key}
        />
      </div>
    );
  });

  const rows = [];
  for (let i = 0; i < projectArray.length; i += rowCount) {
    rows.push(projectArray.slice(i, i + rowCount));
  }

  return (
    <div className="background">
      <NavBar />
      <div className="title">{id}</div>
      <div
        className="why"
        dangerouslySetInnerHTML={{ __html: why.replace(/\n/g, "<br />") }}
      ></div>
      <div className="projects">
        {rows.map((row, rowIndex) => (
          <div className={row.length === 1 ? "projectRowSolo" : "projectRow"}
            key={rowIndex}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
