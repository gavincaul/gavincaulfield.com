import React, { useState, useRef, useEffect } from "react";
import "./ExperienceItem.css";
import Overlay from "./Overlay.tsx";
import Project from "./Project.tsx"; // Make sure path is correct

function ExperienceItem({ img, title, desc, color, links, projectKey }) {
  const [clicked, setClicked] = useState(false);

  const imgRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(true);
  };

  const closeOverlay = () => {
    setClicked(false);
  };

  useEffect(() => {
    document.body.style.overflow = clicked ? "hidden" : "";
  }, [clicked]);

  return (
    <>
      <div
        className="experienceItemSquare"
        style={{ borderColor: color }}
        onClick={handleClick}
        ref={imgRef}
      >
        <img src={img} alt={title} />
      </div>

      {clicked && (
        <Overlay onClose={closeOverlay}>
          <Project
            index={0}
            img={img}
            text={desc}
            color={color}
            links={links}
            projectKey={title}
          />
          <button onClick={closeOverlay} className="closeBtn">
            Close
          </button>
        </Overlay>
      )}
    </>
  );
}

export default ExperienceItem;
