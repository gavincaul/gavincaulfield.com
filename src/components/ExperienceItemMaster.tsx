import React, { useRef, useState } from "react";
import "./ExperienceItemMaster.css";

export default function ExperienceItemMaster({ name, colors, img, items }) {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [closing, setClosing] = useState(false);
  const positions = [
    { x: "-100%", y: "-100%" }, // top left
    { x: "0%", y: "-100%" }, // top center
    { x: "100%", y: "-100%" }, // top right
    { x: "-100%", y: "0%" }, // mid left
    { x: "100%", y: "0%" }, // mid right
    { x: "-100%", y: "100%" }, // bottom left
    { x: "0%", y: "100%" }, // bottom
    { x: "100%", y: "100%" }, // bot right
  ];

  const handleClose = () => {
    setOpen(false);
    setClosing(false);
    setShrunk(false);
    animationsEnded.current = 0;
  };

  const animationsEnded = useRef(0);

  const onGridItemCloseAnimationEnd = () => {
    animationsEnded.current += 1;
    if (animationsEnded.current === items.length - 3) {
      handleClose();
    }
  };

  const handleExpClick = () => {
    if (open) {
      setClosing(true);
    } else {
      setOpen(!open);
    }
  };
  const handleShrink = () => {
    setShrunk(true);
  };

  return (
    <div>
      <div style={{ marginTop: "10rem" }}></div>
      <div className="boundingBox">
        <div
          className={`experienceItem ${open ? "scaleDown" : ""}`}
          style={{
            "--c1": colors[1],
            "--c2": colors[2],
            "--c3": colors[3],
            "--c4": colors[4],
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } as any}
          onClick={handleExpClick}
          onTransitionEnd={handleShrink}
        ></div>
        {open &&
          shrunk &&
          (!closing ? (
            <>
              {items.map((item, i) => (
                <div
                  key={i}
                  className="gridItem"
                  style={{
                    "--p1": positions[i].x,
                    "--p2": positions[i].y,
                    "--p3": `${i * 0.2}s`,
                  
                  } as any}
                  onAnimationEnd={(e) => {
                    e.currentTarget.classList.add("idle");
                  }}
                >
                  {item}
                </div>
              ))}
            </>
          ) : (
            <>
              {items.map((item, i) => (
                <div
                  key={i}
                  className="gridItemClose"
                  style={{
                    "--p1": positions[i].x,
                    "--p2": positions[i].y,
                    "--p3": `${i * 0.2}s`,
                  }as any}
                  onAnimationEnd={onGridItemCloseAnimationEnd}
                >
                  {item}
                </div>
              ))}
            </>
          ))}
      </div>
    </div>
  );
}
