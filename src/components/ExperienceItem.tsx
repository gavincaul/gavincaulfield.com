import React, { useState, useRef, useEffect } from "react";
import "./ExperienceItem.css";

function ExperienceItem({ img, title, desc, color }) {
  const [clicked, setClicked] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [startRect, setStartRect] = useState(null);
  const imgRef = useRef(null);


  const handleClick = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setStartRect(rect);
    }
    setClicked(true);
    setAnimating(true);
  };


  const closeOverlay = () => {
    setClicked(false);
    setAnimating(false);
    setStartRect(null);
  };


  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
        <div className="overlay" onClick={closeOverlay}>
          <div
            className="overlayContent"
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
            style={{ borderColor: color }}
          >
            <img src={img} alt={title} className="overlayImage" />

            <h2 style={{ color }}>{title}</h2>
            <p>{desc}</p>

            <button onClick={closeOverlay} className="closeBtn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExperienceItem;
