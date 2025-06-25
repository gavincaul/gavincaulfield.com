import { useLocation, useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import pagesData from "../data/pages.json";
import { getProjects } from "../components/GetProjects.ts";
import ExperienceItemMaster from "../components/ExperienceItemMaster.tsx";
import ExperienceItem from "../components/ExperienceItem.tsx";
import "./ProjectPage.css";
import NavBar from "../components/NavBar.tsx";
export default function Projects() {
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
  const location = useLocation();

  const [data, setData] = useState(null);
  const [isPassedProjects, setIsPassedProjects] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const passedProjects = location.state?.mapProjects;
    if (passedProjects) {
      setData(passedProjects);
      setIsPassedProjects(true);
    } else {
      const pageData = pagesData.pages.experience.parents[id];
      if (pageData) {
        setData(pageData);
        setIsPassedProjects(false);
      } else {
        navigate("/experience");
      }
    }
  }, [id, navigate, location.state]);

  if (!data) return <div>Loading...</div>;

  // Shared
  const parent = id;
  const text = isPassedProjects ? data.why : data.text;

  // Conditional content rendering
  let groupMasters = [];
  let flatProjectItems = [];

  if (isPassedProjects) {
    // Flattened custom-passed projects
    flatProjectItems = Object.entries(data.projects).map(([key, item], i) => (
      <div className="projectElement" key={key}>
        <ExperienceItem
          projectKey={i}
          img={item.img}
          title={key}
          desc={item.desc}
          color={colorPalette.secondary}
          links={item.links}
        />
      </div>
    ));
  } else {
    // Standard grouped projects
    groupMasters = Object.keys(data.groups).map((group) => {
      const groupData = data.groups[group];
      const items = getProjects({ parent, group });

      return (
        <ExperienceItemMaster
          key={group}
          name={group}
          img={require(`../data/imgs/${groupData.img}`)}
          colors={["#A6D49F", "#9CB380", "#88A366", "#034C3C"]}
          items={items.map((item, i) => (
            <ExperienceItem
              key={item.key}
              projectKey={i}
              img={item.img}
              title={item.title}
              desc={item.desc}
              color={colorPalette.secondary}
              links={item.links}
            />
          ))}
        />
      );
    });

    const flatProjects = getProjects({ parent });
    flatProjectItems = flatProjects.map((item, i) => (
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
      <div className="why">{text}</div>
      <>
        {groupMasters}
        <div className="allProjectTitle">
          All <span className="highlightedID" >{id}</span> Projects
        </div>
        <div className="allProjectsContainer">{flatProjectItems}</div>
      </>
    </div>
  );
}
