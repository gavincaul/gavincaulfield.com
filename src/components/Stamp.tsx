import React, { useState, useRef } from "react";
import "./Stamp.css";
import StampGif from "../data/stamps/stamp.gif"

export default function Stamp({ name, img, flavor, link }) {
  const [enlarged, setEnlarged] = useState(false);
  const [stamp, setStamp] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const triggerSpin = () => {
    const el = imgRef.current;
    if (!el) return;
    if (!enlarged) {
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "spin 1s ease-in-out forwards";
    }
  };

  const handleClick = () => {
    if (enlarged) {
      setStamp(true); 
      
      setTimeout(() => {
        setStamp(false);
        setEnlarged(false);
      }, 3000); 
    } else {
      setEnlarged(true);
    }
  };

  return (
    <div className="stampContainer">
      <div className={`stamp${enlarged ? "Enlarged" : ""}`} style={{ position: 'relative' }}>
        {!enlarged && <div className="text">{name}</div>}

        <img
          ref={imgRef}
          className="stampImage"
          src={require(`../data/stamps/${img}`)}
          alt={name}
          onClick={handleClick}
          onMouseEnter={triggerSpin}
        />

        {enlarged && !stamp && (
          <div className="enlargedContent">
            <div className="enlargedName">{name}</div>
            <div className="enlargedFlavor">{flavor}</div>
          </div>
        )}

        {enlarged && stamp && (
          <img
            src={StampGif}
            alt="Active Stamp Animation"
            className="stampGif"
            
          />
        )}
      </div>
    </div>
  );
}
