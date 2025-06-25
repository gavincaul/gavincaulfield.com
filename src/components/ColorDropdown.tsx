import React, { useState } from "react";
import "./ColorDropdown.css";

export default function ColorDropdown({ setColorPalette }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleColorSelect = (palette) => {
    setColorPalette(palette);
    setDropdownVisible(false);
  };
  const colorPalettes = [
    {
      name: "Forest",
      background: "36, 49, 25",
      primary: "98, 148, 96",
      secondary: "150, 190, 140",
      accent: "172, 236, 161",
      text: "201, 242, 199",
    },
    {
      name: "Sunset",
      background: "26, 26, 64",    
      primary: "102, 46, 155",     
      secondary: "248, 102, 36",   
      accent: "234, 53, 70",       
      text: "249, 248, 248",       
    },
    {
      name: "Ocean",
      background: "0, 31, 63",     
      primary: "0, 116, 217",      
      secondary: "127, 219, 255",  
      accent: "57, 204, 204",      
      text: "221, 221, 221",       
    }
  ];

  return (
    <div className="color-dropdown-container">
      <button className="color-dropdown-button" onClick={toggleDropdown}>
        Color Pallete
      </button>

      {dropdownVisible && (
        <div className="color-dropdown">
          {colorPalettes.map((palette, i) => (
            <div
              key={i}
              className="palette-row"
              onClick={() => handleColorSelect(palette)}
            >
              {Object.entries(palette).map(([role, color]) =>
                role === "name" ? null : (
                  <div
                    key={role}
                    className="color-circle"
                    title={`${palette.name} – ${role}`}
                    style={{
                      backgroundColor: color.includes(",")
                        ? `rgb(${color})`
                        : color,
                    }}
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
