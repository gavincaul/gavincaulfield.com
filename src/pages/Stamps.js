import React from "react";
import "./Stamps.css";
import Stamp from "../components/Stamp.tsx";
import pagesData from "../data/pages.json";

export default function Stamps() {
  const [stamps, setStamps] = React.useState(null);

  React.useEffect(() => {
    setStamps(pagesData.stamps || null);
  }, []); 

  if (!stamps) return <div>Loading...</div>;

  return (
    <div className="background">
      {Object.keys(stamps).map((stampKey) => {
        const stamp = stamps[stampKey];
        return (
          <Stamp
            key={stampKey} 
            name={stampKey}
            img={stamp.img}
            flavor={stamp.flavor}
            link={stamp.link}
          />
        );
      })}
    </div>
  );
}
