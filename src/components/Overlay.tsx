import ReactDOM from "react-dom";
import React, { ReactNode, useState } from "react";

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Overlay({ children, onClose }: OverlayProps) {
  const [colorPalette, setColorPalette] = useState(() => {
    const stored = sessionStorage.getItem("colorPalette");
    return stored
      ? JSON.parse(stored)
      : {
          name: "Forest",
          background: "#243119",
          primary: "#629460",
          secondary: "#96BE8C",
          accent: "#ACECA1",
          text: "#C9F2C7",
        };
  });

  return ReactDOM.createPortal(
    <div
      className="overlay"
      style={
        {
          "--color0": colorPalette.background,
          "--color1": colorPalette.primary,
          "--color2": colorPalette.secondary,
          "--color3": colorPalette.accent,
          "--color4": colorPalette.text,
        } as any
      }
      onClick={onClose}
    >
      <div className="overlayContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}
