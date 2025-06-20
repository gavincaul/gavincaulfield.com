import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import Overlay from "../components/Overlay.tsx";
import Record from "../components/Record.tsx";
import bulletinBoard from "../data/awards/bullitinboard.jpg";

import recordcab from "../data/awards/recordcab.jpg";
import pagesData from "../data/pages.json";
import "./AccoladesPage.css";

import aivr from "../data/awards/aivr.jpg";
import hatem from "../data/awards/hatem.png";
import holoflash from "../data/awards/holoflash.png";
import interdance from "../data/awards/interdance.png";
import obama08 from "../data/awards/obama08.png";
import sgeracimos from "../data/awards/sgeracimos.png";
import sousa from "../data/awards/sousa.png";
import ud from "../data/awards/ud.png";

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
const accoladesDataLeft = [
  {
    id: 1,
    style: { width: "35%" },
    x: "40%",
    y: "70%",
    img: hatem,
    title: "Hatem M. Khalil Memorial Award",
    desc: "Awarded the Hatem M. Khalil Memorial Award in recognition of outstanding achievement in software engineering at the University of Delaware's CIS Department.",
    year: "2024",
  },

  {
    id: 3,
    style: { width: "35%" },
    x: "80%",
    y: "70%",
    img: interdance,
    title: "Interdisciplinary Study in Dance Award",
    desc: "Awarded yearly to strongest interdisciplinary research in dance. See 'Computationally Random Computing'",
    year: "2025",
  },

  {
    id: 5,
    style: { width: "35%" },
    x: "80%",
    y: "29%",
    img: aivr,
    title: "AIxVR 2024 Conference Honorable Mention",
    desc: "Awarded to 'Towards Anatomy Education with Generative AI-based Virtual Assistants in Immersive Virtual Reality Environments'",
    year: "2024",
  },
  {
    id: 6,
    style: { width: "35%" },
    x: "40%",
    y: "30%",
    img: sgeracimos,
    title: "Steven Geracimos Memorial Award",
    desc: "Recipient of the Steven Geracimos Memorial Award in recognition of 'an outstanding computer science major who has demonstrated both interest and aptitude for the subject'",
    year: "2025",
  },
];
const accoladesDataRight = [
  {
    id: 7,
    style: { width: "12.5%" },
    x: "43%",
    y: "20%",
    img: ud,
    title: "Dean's List: Fall 2021",
    desc: "Dean's List Recipient in Fall 2021; GPA: 3.73",
    year: "2021",
  },
  {
    id: 8,
    style: { width: "12.5%" },
    x: "55%",
    y: "20%",
    img: ud,
    title: "Dean's List: Spring 2022",
    desc: "Dean's List Recipient in Spring 2022; GPA: 3.75",
    year: "2022",
  },
  {
    id: 9,
    style: { width: "12.5%" },
    x: "43%",
    y: "40%",
    img: ud,
    title: "Dean's List: Fall 2022",
    desc: "Dean's List Recipient in Fall 2022; GPA: 3.75",
    year: "2022",
  },
  {
    id: 10,
    style: { width: "12.5%" },
    x: "55%",
    y: "40%",
    img: ud,
    title: "Dean's List: Spring 2023",
    desc: "Dean's List Recipient in Spring 2023; GPA: 3.88",
    year: "2023",
  },
  {
    id: 11,
    style: { width: "12.5%" },
    x: "43%",
    y: "60%",
    img: ud,
    title: "Dean's List: Fall 2023",
    desc: "Dean's List Recipient in Fall 2023; GPA: 3.88",
    year: "2023",
  },
  {
    id: 12,
    style: { width: "12.5%" },
    x: "55%",
    y: "60%",
    img: ud,
    title: "Dean's List: Spring 2024",
    desc: "Dean's List Recipient in Spring 2024; GPA: 3.95",
    year: "2024",
  },
  {
    id: 13,
    style: { width: "12.5%" },
    x: "43%",
    y: "80%",
    img: ud,
    title: "Dean's List: Fall 2024",
    desc: "Dean's List Recipient in Fall 2024; GPA: 3.93",
    year: "2024",
  },
  {
    id: 14,
    style: { width: "12.5%" },
    x: "55%",
    y: "80%",
    img: ud,
    title: "Dean's List: Spring 2025",
    desc: "Dean's List Recipient in Spring 2025; GPA: 3.75",
    year: "2025",
  },
  {
    id: 15,
    style: { width: "43%" },
    x: "21%",
    y: "49%",
    img: obama08,
    title: "Signed Obama, Biden 08' T-Shirt",
    desc: "An Obama, Biden 08' T-Shirt signed by Jeremy Strong and Michael Imperioli",
    year: "2024",
  },
  {
    id: 4,
    style: { width: "15%" },
    x: "67%",
    y: "31%",
    img: holoflash,
    title: "Winner of 'Best Use of AI in Education'",
    desc: "At HenHacks 2024, my group and I won the above award for our Study in Augmented Reality tool, Holoflash.",
    year: "2024",
  },
  {
    id: 2,
    style: { width: "15%" },
    x: "67%",
    y: "71%",
    img: sousa,
    title: "John Philip Sousa Award",
    desc: "Recipient of the John Philip Sousa Award, honoring superior musicianship, outstanding dedication, and exemplary leadership.",
    year: "2021",
  },
];

export default function AccoladesPage() {
  const stored = sessionStorage.getItem("colorPalette");
  const colorPalette = stored
    ? JSON.parse(stored)
    : {
        name: "Forest",
        background: "#243119",
        primary: "#629460",
        secondary: "#96BE8C",
        accent: "#ACECA1",
        text: "#C9F2C7",
      };
  const albumEntries = Object.entries(pagesData.albums);
  const drawers = [
    albumEntries.slice(0, 50),
    albumEntries.slice(50, 100),
    albumEntries.slice(100, 149),
  ];
  console.log(albumEntries);
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
      <div className="title">Accolades, Relics, and Collections</div>
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
                img={img}
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
                img={img}
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
