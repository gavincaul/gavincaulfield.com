import { useState, useEffect } from "react";
import "./Home.css";
import HomeNavBar from "../components/HomeNavBar.tsx";
import LinkedInPFP from "../data/home/LinkedInPFP.jpg";
import LinkedInMogg from "../data/home/linkedinMogg.jpg";
import gotg from "../data/home/gotg.jpeg";
import chicago from "../data/home/chicago.jpeg";
import meandyurt from "../data/home/meandyurt.jpeg";
import arch from "../data/home/arch.jpeg";
import myhouse from "../data/home/myhouse.jpg";
import ColorDropdown from "../components/ColorDropdown.tsx";

export default function Home() {
  const [colorPalette, setColorPalette] = useState(() => {
    const stored = sessionStorage.getItem("colorPalette");
    return stored
      ? JSON.parse(stored)
      : {
          name: "Forest",
          background: "36, 49, 25",
          primary: "98, 148, 96",
          secondary: "150, 190, 140",
          accent: "172, 236, 161",
          text: "201, 242, 199",
        };
  });

  useEffect(() => {
    sessionStorage.setItem("colorPalette", JSON.stringify(colorPalette));
  }, [colorPalette]);

  const [hoveredImage, setHoveredImage] = useState(null);
  const [pfpClick, setPfpClick] = useState(false);
  const [washAnimate, setWashAnimate] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const [badgeAnim, setBadgeAnim] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // eslint-disable-next-line
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(!isMobile);
      setHoveredTitle(!hoveredTitle);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (isMobile) {
      setHoveredTitle(true);
    }
  }, [isMobile]);
  const handlePfpClick = () => {
    
    setWashAnimate(true);
    setTimeout(() => {
      setPfpClick(true);
    }, 100);
  };
  const iframeData = {
    gotg: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2950710952705!2d-104.88626000502411!3d38.871490358429114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87135012b5cc9c93%3A0x4e9df5263bf6dab!2sGarden%20of%20the%20Gods!5e0!3m2!1sen!2sus!4v1735935741255!5m2!1sen!2sus",
    arch: "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1558.5240655614928!2d-90.18584880225833!3d38.62477378654032!3m2!1i1024!2i768!4f13.1!2m1!1sst%20louis%20arch!5e0!3m2!1sen!2sus!4v1735940144832!5m2!1sen!2sus",
    chicago:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2100.8916361678753!2d-87.61279882699004!3d41.86899167943912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1735940326081!5m2!1sen!2sus",
  };

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
    

      <div
        className="name"
        onMouseEnter={() => {
          setHoveredTitle(true);
          setBadgeAnim(true);
        }}
        onMouseLeave={() => {
          setBadgeAnim(false);
          setTimeout(() => {
            setHoveredTitle(badgeAnim);
          }, 1000);
        }}
      >
        Gavin Caulfield
        {hoveredTitle && !isMobile && (
          <div
            className="namebadge"
            style={{
              animation: badgeAnim
                ? "badge 0.5s forwards, snakeBox 1.5s infinite"
                : "badgeReverse 0.5s forwards, snakeBox 1.5s infinite",
            }}
          >
            gavdog
          </div>
        )}
      </div>
      <ColorDropdown setColorPalette={setColorPalette} />
      <HomeNavBar borderColor={colorPalette.secondary} />
      <div className="centerConsole">
        <div className="imgs">
          <div className="stacked-imgs">
            <div
              onMouseEnter={() => setHoveredImage("gotg")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={gotg}
                style={{ borderColor: "#DB2B39" }}
                className="pfp subpics"
                alt="gardenotg"
              />
              {!isMobile && hoveredImage === "gotg" && (
                <iframe
                  title="gotg"
                  className="iframeTransition"
                  src={iframeData.gotg}
                  width="200"
                  height="150"
                  style={{
                    "--translate-sx": "-200px",
                    "--translate-sy": "0%",
                    "--translate-ex": "-420px",
                    "--translate-ey": "-80%",
                    border: "dashed #DB2B39",
                  }}
                  allowFullScreen=""
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredImage("yuri")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={meandyurt}
                style={{ borderColor: "#F3A712" }}
                className="pfp subpics"
                alt="me and yurt"
              />
              {!isMobile && hoveredImage === "yuri" && (
                <div className="imageTransition">
                  <img alt="yuri" src={myhouse} width="200" height="150"></img>
                </div>
              )}
            </div>
          </div>
          <div className="pfp-container" onClick={handlePfpClick}>
            <img
              src={pfpClick ? LinkedInMogg : LinkedInPFP}
              className="pfp"
              alt="LinkedIn Profile"
            />
            <div className={`washEffect ${washAnimate ? "animate" : ""}`}></div>
          </div>
          <div className="stacked-imgs">
            <div
              onMouseEnter={() => setHoveredImage("arch")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={arch}
                style={{ borderColor: "#85B79D" }}
                className="pfp subpics"
                alt="arch"
              />
              {!isMobile && hoveredImage === "arch" && (
                <iframe
                  title="arch"
                  className="iframeTransition"
                  src={iframeData.arch}
                  width="200"
                  height="150"
                  style={{
                    "--translate-sx": "-200px",
                    "--translate-sy": "0%",
                    "--translate-ex": "-20px",
                    "--translate-ey": "-85%",
                    border: "dashed #85B79D",
                  }}
                  allowFullScreen=""
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredImage("chicago")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={chicago}
                style={{ borderColor: "#F0CEA0" }}
                className="pfp subpics"
                alt="chicago"
              />
              {!isMobile && hoveredImage === "chicago" && (
                <iframe
                  title="chicago"
                  className="iframeTransition"
                  src={iframeData.chicago}
                  width="200"
                  height="150"
                  style={{
                    "--translate-sx": "-200px",
                    "--translate-sy": "0%",
                    "--translate-ex": "-20px",
                    "--translate-ey": "85%",
                    border: "dashed #F0CEA0",
                  }}
                  allowFullScreen=""
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="answer">
            <span className="q">WHO: </span> A UD graduate, musician, dancer, software developer, and human with a passion for
            learning and problem solving.
          </div>
          <div className="answer">
            <span className="q">WHAT: </span> Full Stack development, network
            security and management,{" "}
            <a
              style={{ color: "#12EDED" }}
              href="https://sites.udel.edu/hci-lab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HCI research
            </a>
            , modern dance, {" "}
            <a
              style={{ color: "#12EDED" }}
              href="/file?src=CRC.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              interdisciplinary research,
            </a> and system hardening.
          </div>
          <div className="answer">
            <span className="q">WHERE: </span> Frankford, Delaware -- New York, New
            York.
          </div>
          <div className="answer">
            <span className="q">WHEN: </span> Now, today, tomorrow, and always.
          </div>
          <div className="answer">
            <span className="q">WHY: </span> I can't help my curiosity; it'll
            kill me one day (^･ｪ･^).
          </div>
          <div className="answer">
            <span className="q">HOW: </span> Drink of the month:{" "}
            <a
              style={{ color: "#12EDED" }}
              href="https://m.media-amazon.com/images/I/71CdoaKygBL._UF894,1000_QL80_.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor Allen's french vanilla k-cup.
            </a>
          </div>
          <div className="answer">
            <span className="q">CONTACT: </span> <a
              style={{ color: "#12EDED" }}
              href="mailto:gavindcaulfield@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gavindcaulfield@gmail.com   
            </a>{" — "}
              (845) 793-4757
          </div>
        </div>
      </div>
    </div>
  );
}
