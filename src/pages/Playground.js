import React from "react";
import NavBar from "../components/NavBar.tsx";
import "./Playground.css";
import { getProjects } from "../components/GetProjects.ts";
import ExperienceItemMaster from "../components/ExperienceItemMaster.tsx";
import ExperienceItem from "../components/ExperienceItem.tsx";
export default function Playground() {
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

  const researchItems = getProjects({ parent: "work", group: "Research" });

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
      <div className="expContainer">
        <ExperienceItemMaster
          name="Research"
          colors={["#A6D49F", "#9CB380", "#88A366", "#034C3C"]}
          img={require(`../data/imgs/24.jpg`)} // match image
          items={researchItems.map((p, i) => (
            <ExperienceItem
              key={p.key}
              projectKey={i}
              img={p.img}
              title={p.title}
              desc={p.desc}
              color={"#A6D49F"}
              links={p.links}
            />
          ))}
        />
      </div>
    </div>
  );
}
