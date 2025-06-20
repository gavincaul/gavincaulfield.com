import React, { useState } from "react";
import "./ColorDropdown.css";

export default function ColorDropdown({setColorPalette}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  
    const handleColorSelect = (palette) => {
      setColorPalette(palette);          
      setDropdownVisible(false);         
    };
  const colorPalettes = [
    {
      name: "Forest",
      background: "#243119",
      primary: "#629460",
      secondary: "#96BE8C",
      accent: "#ACECA1",
      text: "#C9F2C7",
    },
    {
      name: "Sunset",
      background: "#1A1A40",
      primary: "#662E9B",
      secondary: "#F86624",
      accent: "#EA3546",
      text: "#F9F8F8",
    },
    {
      name: "Ocean",
      background: "#001f3f",
      primary: "#0074D9",
      secondary: "#7FDBFF",
      accent: "#39CCCC",
      text: "#DDDDDD",
    },
  ];

  return (
    <div className="color-dropdown-container">
      <button className="color-dropdown-button" onClick={toggleDropdown}>
        Color Pallete
      </button>

      {dropdownVisible && (
        <div className="color-dropdown"
        >
          {colorPalettes.map((palette, i) => (
            <div key={i} className="palette-row" onClick={() => handleColorSelect(palette)}>
              {Object.entries(palette).map(([role, color]) =>
                role === "name" ? null : (
                  <div
                    key={role}
                    className="color-circle"
                    title={`${palette.name} – ${role}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(palette)}
                  />
                )
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
