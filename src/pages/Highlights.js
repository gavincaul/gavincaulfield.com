import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar.tsx";
import highlightsData from "../data/pages.json";
import "./Highlights.css";

function Highlight({ name, imgs = [], desc, date }) {
  const [expanded, setExpanded] = useState(false);

  const handleHighlightClick = () => {
    setExpanded(!expanded);
  };
  function convertMarkdownLinks(text) {
    return text
      .replace(/\n/g, "<br />")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      );
  }

  return (
    <div
      className={`highlight ${expanded ? "highlighted" : ""}`}
      onClick={handleHighlightClick}
    >
      {expanded ? (
        <>
          <div
            className={`highlightImageContainer ${
              imgs.length === 1 ? "single" : "multiple"
            }`}
          >
            {imgs.map((img, index) => (
              <img
                key={index}
                src={require(`../data/highlights/${img}`)}
                alt={`${name} - ${index + 1}`}
                className="highlightImage"
              />
            ))}
          </div>
          <div className="highlightTextContainer">
            <div className="highlightTitle">{name}</div>
            <div className="highlightDate">{date}</div>
            <div
              className="highlightDesc"
              dangerouslySetInnerHTML={{
                __html: convertMarkdownLinks(desc),
              }}
            />
          </div>
        </>
      ) : (
        <div className="highlightTitle">{name}</div>
      )}
    </div>
  );
}

export default function Highlights() {
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

  const [highlights, setHighlights] = useState({});

  useEffect(() => {
    const highlights = highlightsData.highlights;
    if (highlightsData && highlights) {
      setHighlights(highlights);
    } else {
      return <div>Error loading highlights</div>;
    }
  }, []);

  const highlightObjects = Object.keys(highlights).map((key) => {
    const { img, desc, date } = highlights[key];
    return (
      <Highlight key={key} name={key} imgs={img} desc={desc} date={date} />
    );
  });

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
      <div className="highlightReel">{highlightObjects}</div>
    </div>
  );
}
