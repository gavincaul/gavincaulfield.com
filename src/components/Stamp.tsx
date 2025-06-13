import React, { useState } from "react";
import "./Stamp.css";

export default function Stamp({ name, img, flavor, link }) {
  const [hover, setHover] = useState(false);
  const [stamp, setStamp] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    setStamp(false);
    console.log("enter", stamp, hover);
  };

  const handleMouseLeave = () => {
    console.log("exit", stamp, hover);
    setHover(false); 
    setStamp(true);
    setTimeout(() => {
      setStamp(false);
    }, 3000);
  };

  return (
    <div className="stampContainer" onClick={() => window.open(link, "_blank")}>
      <div
        className="stampWrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="stampImageContainer">
          <img
            className="stampImage"
            src={require(`../data/stamps/${img}`)}
            alt={name}
          />
        </div>
        {stamp && (
          <img
            className="stampGif"
            src={require(`../data/stamps/stamp.gif`)}
            alt="stamp animation"
          />
        )}
        {hover && <div className="stampFlavor">{flavor}</div>}
      </div>
      <div className="stampName">{name}</div>
    </div>
  );
}
