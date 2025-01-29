import { useState, useEffect, useRef } from "react";
import "./About.css";
import clear from "../data/about/clear.png";
import history from "../data/about/history.png";
import saveimg from "../data/about/save.png";
import clearsesh from "../data/about/x.png";
import pagesData from "../data/pages.json";
import orel from "../data/about/orel.png";
import NavBar from "../components/NavBar.tsx";

export default function About() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [historyItems, setHistoryItems] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const ctxRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutData = pagesData.pages.about;
  const timeout = (delay) => new Promise((res) => setTimeout(res, delay));
  let saveValue = sessionStorage.length;
  let letters = [
    [
      [30, 168],
      [30, 167],
      [30, 166],
      [30, 165],
      [30, 164],
      [30, 163],
      [30, 162],
      [29, 161],
      [29, 159],
      [29, 158],
      [29, 156],
      [28, 155],
      [28, 153],
      [28, 151],
      [28, 146],
      [28, 143],
      [28, 140],
      [27, 134],
      [27, 127],
      [27, 120],
      [27, 112],
      [27, 105],
      [27, 97],
      [27, 93],
      [27, 65],
      [27, 63],
      [27, 60],
      [27, 58],
      [28, 52],
      [28, 49],
      [30, 46],
      [30, 40],
      [31, 37],
      [31, 31],
      [32, 30],
      [33, 22],
      [34, 21],
      [34, 20],
      [36, 20],
      [37, 19],
      [38, 20],
      [39, 22],
      [40, 24],
      [41, 27],
      [44, 30],
      [46, 32],
      [48, 36],
      [51, 40],
      [54, 44],
      [56, 49],
      [58, 53],
      [60, 59],
      [63, 64],
      [64, 68],
      [67, 74],
      [68, 78],
      [73, 87],
      [77, 93],
      [78, 98],
      [81, 102],
      [82, 108],
      [85, 111],
      [86, 115],
      [88, 119],
      [89, 122],
      [91, 126],
      [92, 128],
      [92, 130],
      [94, 132],
      [94, 134],
      [95, 135],
      [96, 138],
      [97, 139],
      [98, 144],
      [99, 146],
      [99, 147],
      [100, 150],
      [100, 152],
      [101, 155],
      [102, 158],
      [102, 160],
      [103, 163],
      [103, 166],
      [103, 168],
      [104, 170],
      [104, 171],
      [104, 173],
      [105, 176],
      [105, 177],
      [105, 178],
      [106, 178],
    ],
    [
      [118, 101],
      [118, 102],
      [118, 103],
      [118, 104],
      [118, 105],
      [118, 106],
      [118, 107],
      [118, 108],
      [118, 110],
      [118, 113],
      [119, 115],
      [119, 118],
      [119, 120],
      [120, 121],
      [120, 123],
      [120, 124],
      [121, 126],
      [121, 127],
      [122, 129],
      [122, 130],
      [122, 132],
      [123, 133],
      [123, 135],
      [123, 136],
      [124, 137],
      [124, 138],
      [124, 139],
      [124, 140],
      [124, 143],
      [125, 144],
      [125, 145],
      [125, 146],
      [125, 147],
      [125, 148],
      [125, 149],
      [125, 150],
      [125, 151],
      [125, 152],
      [125, 155],
      [125, 156],
      [125, 157],
      [125, 158],
      [125, 159],
      [125, 160],
      [125, 161],
      [125, 162],
      [125, 164],
      [125, 165],
      [125, 166],
      [125, 165],
      [125, 164],
      [125, 163],
      [125, 162],
      [126, 161],
      [126, 160],
      [126, 159],
      [126, 158],
      [126, 156],
      [128, 152],
      [129, 149],
      [129, 147],
      [129, 143],
      [130, 140],
      [131, 138],
      [131, 135],
      [132, 133],
      [132, 132],
      [132, 131],
      [133, 131],
      [133, 130],
      [134, 129],
      [135, 128],
      [136, 127],
      [142, 123],
      [143, 122],
      [144, 121],
      [145, 121],
      [146, 121],
      [147, 121],
      [148, 121],
      [149, 121],
      [150, 121],
      [151, 122],
      [152, 123],
      [153, 124],
      [153, 125],
      [156, 128],
      [159, 132],
      [159, 133],
      [159, 134],
      [159, 135],
      [159, 136],
      [159, 137],
      [159, 144],
      [158, 147],
      [158, 149],
      [157, 150],
      [157, 151],
      [156, 153],
      [151, 160],
      [150, 163],
      [149, 165],
      [147, 168],
      [146, 168],
      [145, 170],
      [144, 170],
      [143, 170],
      [143, 169],
      [142, 169],
      [141, 168],
      [140, 167],
      [140, 166],
      [140, 165],
      [140, 164],
      [140, 163],
      [140, 162],
      [140, 161],
      [140, 160],
      [140, 159],
      [141, 156],
      [141, 154],
    ],
    [
      [221, 125],
      [220, 125],
      [220, 124],
      [219, 124],
      [218, 123],
      [217, 123],
      [216, 122],
      [215, 122],
      [213, 122],
      [212, 121],
      [210, 121],
      [209, 121],
      [207, 121],
      [205, 121],
      [204, 121],
      [202, 121],
      [200, 121],
      [199, 122],
      [198, 123],
      [196, 124],
      [195, 125],
      [194, 126],
      [193, 127],
      [189, 134],
      [186, 137],
      [185, 140],
      [185, 142],
      [185, 144],
      [184, 147],
      [184, 150],
      [183, 154],
      [183, 157],
      [183, 160],
      [183, 162],
      [183, 163],
      [183, 165],
      [185, 167],
      [187, 167],
      [188, 168],
      [189, 168],
      [190, 168],
      [191, 168],
      [192, 169],
      [193, 169],
      [194, 169],
      [195, 169],
      [196, 169],
      [197, 169],
      [198, 169],
      [199, 169],
      [202, 169],
      [204, 168],
      [207, 166],
      [211, 164],
      [215, 161],
      [217, 159],
      [221, 156],
      [223, 154],
      [224, 152],
      [226, 151],
      [227, 150],
      [227, 148],
      [228, 148],
      [228, 146],
      [230, 141],
      [230, 139],
      [230, 138],
      [230, 136],
      [230, 134],
      [230, 133],
      [230, 131],
      [230, 128],
      [230, 127],
      [230, 126],
      [230, 125],
      [230, 124],
      [228, 123],
      [227, 122],
      [226, 122],
      [225, 122],
      [224, 122],
      [223, 122],
    ],
    [
      [262, 127],
      [261, 127],
      [261, 128],
      [261, 130],
      [260, 131],
      [260, 134],
      [259, 136],
      [259, 138],
      [259, 142],
      [259, 144],
      [259, 147],
      [259, 150],
      [260, 153],
      [261, 155],
      [262, 156],
      [262, 159],
      [265, 161],
      [265, 162],
      [266, 164],
      [267, 167],
      [268, 170],
      [269, 172],
      [270, 174],
      [271, 175],
      [271, 176],
      [274, 177],
      [275, 177],
      [276, 177],
      [277, 177],
      [278, 177],
      [279, 176],
      [280, 176],
      [280, 175],
      [280, 174],
      [281, 174],
      [282, 173],
      [282, 171],
      [283, 170],
      [287, 161],
      [288, 152],
      [289, 149],
      [289, 145],
      [290, 142],
      [290, 138],
      [290, 136],
      [290, 134],
      [290, 133],
      [290, 132],
      [290, 131],
      [290, 130],
      [289, 129],
      [289, 128],
      [289, 127],
      [288, 127],
    ],
    [
      [322, 45],
      [321, 45],
      [321, 46],
      [320, 47],
      [320, 48],
      [320, 49],
      [320, 50],
      [319, 51],
      [319, 54],
      [318, 57],
      [317, 61],
      [317, 64],
      [317, 68],
      [316, 71],
      [316, 75],
      [314, 78],
      [314, 81],
      [314, 84],
      [313, 87],
      [313, 90],
      [313, 92],
      [313, 96],
      [313, 98],
      [313, 101],
      [313, 111],
      [313, 115],
      [313, 120],
      [314, 123],
      [314, 125],
      [314, 128],
      [314, 132],
      [316, 135],
      [316, 138],
      [316, 141],
      [317, 144],
      [317, 148],
      [317, 151],
      [317, 156],
      [319, 172],
      [321, 177],
      [322, 179],
      [322, 181],
      [323, 182],
      [323, 184],
      [324, 185],
      [325, 186],
      [325, 187],
      [326, 188],
      [327, 188],
      [328, 188],
      [328, 189],
      [331, 189],
      [333, 189],
      [334, 189],
      [336, 188],
      [338, 187],
      [340, 185],
      [342, 184],
      [343, 184],
      [352, 172],
      [356, 164],
    ],
    [
      [296, 97],
      [297, 97],
      [298, 97],
      [299, 97],
      [300, 97],
      [301, 97],
      [302, 97],
      [304, 97],
      [305, 97],
      [306, 96],
      [307, 96],
      [308, 96],
      [311, 96],
      [312, 96],
      [313, 96],
      [315, 96],
      [317, 96],
      [319, 96],
      [320, 96],
      [321, 96],
      [322, 96],
      [325, 96],
      [326, 94],
      [328, 94],
      [329, 94],
      [330, 94],
      [331, 94],
      [332, 93],
      [333, 93],
      [334, 93],
      [335, 93],
      [336, 93],
    ],
    [
      [13, 99],
      [13, 98],
      [15, 98],
      [16, 97],
      [17, 97],
      [18, 97],
      [19, 95],
      [20, 95],
      [23, 94],
      [24, 94],
      [26, 93],
      [30, 93],
      [33, 91],
      [36, 91],
      [38, 91],
      [41, 90],
      [42, 90],
      [45, 90],
      [46, 88],
      [49, 88],
      [51, 87],
      [52, 87],
      [55, 87],
      [56, 85],
      [58, 85],
      [60, 85],
      [62, 84],
      [63, 84],
      [64, 83],
      [67, 83],
      [68, 81],
      [69, 81],
      [70, 81],
      [74, 79],
      [75, 79],
      [76, 79],
      [77, 78],
      [79, 78],
      [80, 76],
      [81, 76],
      [84, 75],
      [85, 74],
      [86, 74],
      [87, 72],
      [89, 72],
      [90, 72],
      [90, 71],
      [91, 71],
      [92, 70],
      [93, 70],
      [94, 70],
      [96, 69],
    ],
  ];

  useEffect(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctxRef.current = ctx;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.strokeStyle = "black";
      function clearBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setIsClear(true);
      }

      if (!isLoaded) {
        clearBoard();
        const drawLetter = async (letter) => {
          ctx.moveTo(letter[0][0], letter[0][1]);
          ctx.beginPath();
          for (const [x, y] of letter) {
            ctx.lineTo(Math.round(x), Math.round(y));
            ctx.stroke();
            await timeout(5); //minimum delay
          }
          ctx.closePath();
        };
        const drawLetters = async () => {
          for (const letter of letters) {
            await drawLetter(letter);
          }
          setIsLoaded(true);
        };
        drawLetters();
      }

      const startDrawing = (e) => {
        if (isLoaded) {
          if (isClear) {
            clearBoard();
          }

          setIsClear(false);
          setIsDrawing(true);
          ctx.beginPath();
          ctx.moveTo(e.offsetX, e.offsetY);
        }
      };
      const draw = (e) => {
        if (isDrawing) {
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
        }
      };

      const stopDrawing = () => {
        if (isDrawing) {
          setIsDrawing(false);
          ctx.closePath();
        }
      };

      // Add event listeners
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseleave", stopDrawing);

      return () => {
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mousemove", draw);
        canvas.removeEventListener("mouseup", stopDrawing);
        canvas.removeEventListener("mouseleave", stopDrawing);
      };
    },
    // eslint-disable-next-line
    [isDrawing, isLoaded]
  );

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setIsClear(true);
  };
  const save = (i) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL();
      sessionStorage.setItem(i, dataURL);
      isHistoryVisible && getHistory();
      i += 1;
    }
  };
  const getHistory = () => {
    const items = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      items.push(value);
    }
    setHistoryItems(items);
  };
  const clearSession = () => {
    sessionStorage.clear();
    setHistoryItems([]);
    setIsHistoryVisible(false);
  };

  const toggleHistoryVisibility = () => {
    if (!isHistoryVisible) {
      getHistory();
    }
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="background">
      <NavBar></NavBar>
      <div className="drawCanvas">
        <canvas
          ref={canvasRef}
          width="450"
          height="200"
          style={{ border: "4px ridge rgb(180, 55, 55)" }}
        />
        {isLoaded && (
          <div className="popupControls">
            <div className="popup">Want to try?</div>
            <button className="clear" onClick={clearBoard}>
              <img src={clear} alt="clear" />
            </button>
            <button className="history" onClick={toggleHistoryVisibility}>
              <img src={history} alt="history" />
            </button>
          </div>
        )}
        {!isClear && (
          <div className="save">
            <button className="savebutton" onClick={() => save(saveValue)}>
              <img src={saveimg} alt="save" />
            </button>
          </div>
        )}
        {isHistoryVisible && historyItems.length > 0 && (
          <div className="historyDisplay">
            {historyItems.map((dataURL, index) => (
              <div key={index} className="historyItem">
                <img src={dataURL} alt={`saved-canvas-${index}`} />
              </div>
            ))}
            <button className="clearsesh" onClick={clearSession}>
              <img src={clearsesh} alt="clear session" />
            </button>
          </div>
        )}
      </div>
      <div className="aboutItems">
        {Object.keys(aboutData).map((key, index) => {
          // eslint-disable-next-line
          const { img, text, color, order, link } = aboutData[key];
          const picture = require(`../data/imgs/${img}`);
          console.log(picture);
          return (
            <div className="aboutItem" key={index}>
              <img src={picture} alt={key} style={{ borderColor: color }} />
              <h1>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: text.replace(/\n/g, "<br />"),
                }}
              />
              <a href={link[1]} target="_blank" rel="noopener noreferrer">
                {link[0]}
              </a>
            </div>
          );
        })}
      </div>
      <img src={orel} alt="orel" style={{ height: "100px", width: "auto" }} />
    </div>
  );
}
