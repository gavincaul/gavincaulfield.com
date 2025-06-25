import ReactDOM from "react-dom";
import React, { ReactNode, useState } from "react";

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Overlay({ children, onClose }: OverlayProps) {
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
