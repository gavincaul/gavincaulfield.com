import React, { useState } from "react";
import "./Stamps.css";
import Stamp from "../components/Stamp.tsx";
import pagesData from "../data/pages.json";
import NavBar from "../components/NavBar.tsx";
export default function Stamps() {
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
  const [stamps, setStamps] = useState(null);

  React.useEffect(() => {
    setStamps(pagesData.stamps || null);
  }, []);

  if (!stamps) return <div>Loading...</div>;

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
      <div className="stampsContainer">
        {Object.keys(stamps).map((stampKey, index) => {
          const stamp = stamps[stampKey];

          return (
            <Stamp
              name={stampKey}
              img={stamp.img}
              flavor={stamp.flavor}
              link={stamp.link}
            />
          );
        })}
      </div>
    </div>
  );
}
