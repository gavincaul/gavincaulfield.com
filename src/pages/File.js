import React from "react";
import { useLocation } from "react-router-dom";
import "./File.css";
import NavBar from "../components/NavBar.tsx";

function getFileType(file) {
  const ext = file.split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "webp", "gif"].includes(ext)) return "image";
  if (ext === "pdf") return "pdf";
  if (["mp4", "webm", "mov"].includes(ext)) return "video";
  return "other";
}

export default function File() {
  const filesContext = require.context("../data/files", false);
  const availableFiles = filesContext.keys().map((f) => f.replace("./", ""));
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");

  if (!src) return <div className="file-error">No file provided.</div>;
  if (!availableFiles.includes(src)) {
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
        <div className="file-error">File not found: {src}</div>
      </div>
    );
  }

  const type = getFileType(src);

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

      <div className="file-viewer-page">
        {type === "image" && (
          <img
            src={require(`../data/files/${src}`)}
            alt="Preview"
            className="file-image"
          />
        )}

        {type === "pdf" && (
          <iframe
            src={require(`../data/files/${src}`)}
            className="file-pdf"
            title="PDF Viewer"
          />
        )}

        {type === "video" && (
          <video controls className="file-video">
            <source
              src={require(`../data/files/${src}`)}
              type={`video/${
                src.endsWith(".mov") ? "quicktime" : src.split(".").pop()
              }`}
            />
            Your browser does not support the video tag.
          </video>
        )}

        {type === "other" && (
          <a
            href={require(`../data/files/${src}`)}
            download
            className="file-download"
          >
            Download File
          </a>
        )}
      </div>
    </div>
  );
}
