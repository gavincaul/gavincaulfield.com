import React, { useState } from "react";
import "./Record.css"
export default function Record({ name, imgSrc, albumSource }) {
  const [enlarged, setEnlarged] = useState(false);


  const handleClick = () => { 
    if (enlarged && albumSource) {
      window.open(albumSource, "_blank"); 
    }
    setEnlarged(true);
  };

  return (
    <div
      className={`record ${enlarged ? "enlarged" : ""}`}
      onClick={handleClick}
      onMouseLeave={() => setEnlarged(false)}
      
    >
      <img src={imgSrc} alt={name} />
    </div>
  );
}
