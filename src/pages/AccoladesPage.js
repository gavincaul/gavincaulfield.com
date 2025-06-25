import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import Overlay from "../components/Overlay.tsx";
import Record from "../components/Record.tsx";
import bulletinBoard from "../data/awards/bullitinboard.jpg";

import recordcab from "../data/awards/recordcab.jpg";
import pagesData from "../data/pages.json";
import "./AccoladesPage.css";

function Accolade({ x, y, title, img, style, desc, year }) {
  const [clicked, setClicked] = useState(false);

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
    <div
      className="accolade"
      style={{
        position: "absolute",
        top: y,
        left: x,
        ...style,
      }}
      title={title}
      onClick={handleClick}
    >
      <img src={img} alt={title}></img>
      {clicked && (
        <Overlay onClose={closeOverlay}>
          <div className="accoladeOverlayContent">
            <img
              src={img}
              alt={title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <h2>{title}</h2>
            <p>
              <strong>{year}</strong>
            </p>
            <p>{desc}</p>
            <button onClick={closeOverlay} className="closeBtn">
              Close
            </button>
          </div>
        </Overlay>
      )}
    </div>
  );
}

export default function AccoladesPage() {
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
  const albumEntries = Object.entries(pagesData.accolades.albums);
  const accoladesDataLeft = pagesData.accolades.accoladesDataLeft;
  const accoladesDataRight = pagesData.accolades.accoladesDataRight;
  const drawers = [
    albumEntries.slice(0, 50),
    albumEntries.slice(50, 100),
    albumEntries.slice(100, 149),
  ];

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
      <div className="accoladeTitle">Awards, Accolades, and Collections</div>
      <div className="awardCenter">
        <div className="bullitenBoard">
          <img src={bulletinBoard} alt="awardBoardImg" />

          {accoladesDataLeft.map(
            ({ id, x, y, style, title, img, desc, year }) => (
              <Accolade
                key={id}
                x={x}
                y={y}
                title={title}
                img={require(`../data/awards/${img}`)}
                desc={desc}
                year={year}
                style={style}
                onClick={() => alert(`Clicked accolade: ${title}`)}
              />
            )
          )}
        </div>
        <div className="whiteBoard2">
          <img src={bulletinBoard} alt="bullitenBoard" />
          {accoladesDataRight.map(
            ({ id, x, y, style, title, img, desc, year }) => (
              <Accolade
                key={id}
                x={x}
                y={y}
                title={title}
                img={require(`../data/awards/${img}`)}
                desc={desc}
                year={year}
                style={style}
                onClick={() => alert(`Clicked accolade: ${title}`)}
              />
            )
          )}
        </div>
        <div className="recordCollection">
          <img src={recordcab} alt="recordCab"></img>
          <div className="recordArea">
            {drawers.map((drawer, i) => (
              <div key={i} className="drawer">
                {drawer.map(([albumName, album], j) => (
                  <Record
                    key={albumName}
                    name={albumName}
                    imgSrc={album.albumCover}
                    albumSource={album.SpotifyLink}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
