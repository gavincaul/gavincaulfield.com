import { useLocation, useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import pagesData from "../data/pages.json";
import Project from "../components/Project.tsx";
import "./ProjectPage.css";
import NavBar from "../components/NavBar.tsx";

export default function Projects() {
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



  if (!data) return <div>Loading...</div>;
  const { projects, why } = data;
  const rowCount = 2;
  console.log(projects);
  const projectArray = Object.keys(projects)
    .filter((key) => !projects[key].hidden)
    .map((key, index) => {
      const { img, desc, links } = projects[key];
      const picture = require(`../data/imgs/${img}`);

      return (
        <div className="projectElement" key={index}>
          <Project
            index={index % 2}
            img={picture}
            text={desc}
            color={projects[key].color}
            links={links}
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
      <div className="title">{id}</div>
      <div
        className="why"
        dangerouslySetInnerHTML={{ __html: why.replace(/\n/g, "<br />") }}
      ></div>
      <div className="projects">
        {rows.map((row, rowIndex) => (
          <div
            className={row.length === 1 ? "projectRowSolo" : "projectRow"}
            key={rowIndex}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
