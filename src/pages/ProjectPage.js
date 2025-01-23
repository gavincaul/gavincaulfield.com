import { useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import pagesData from "../data/pages.json";
import Project from '../components/Project.tsx';
import "./ProjectPage.css"
import NavBar from "../components/NavBar.tsx";


export default function Projects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const pageData = pagesData.pages[id];
    if (pageData) {
      setData(pageData);
    } else {
      navigate('/experience');
    }
  }, [id, navigate]);

  if (!data) return <div>Loading...</div>;

  const { projects, why } = data;
  const rowCount = 2;

  const projectArray = Object.keys(projects).map((key, index) => {
    const { img, desc, links } = projects[key];  
    const picture = require(`../data/imgs/${img}`);

    return (
      <div className="projectElement" key={index}>
        <Project index={index%2} img={picture} text={desc} color={projects[key].color} link={links} projectKey={key} />
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
      <div className="why" dangerouslySetInnerHTML={{ __html: why.replace(/\n/g, '<br />') }}></div>
      <div className="projects">
        {rows.map((row, rowIndex) => (
          <div className="projectRow" key={rowIndex}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
