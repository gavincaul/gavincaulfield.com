import React from "react";
import "./Project.css";

function Project({ index, img, text, color, links, projectKey }) {
  function convertMarkdown(text) {
    return text
      
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
     
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.*?)__/g, "<strong>$1</strong>")
    
      .replace(/(^|[^*])\*(?!\*)([^*]+)\*(?!\*)/g, '$1<em>$2</em>')
      .replace(/(^|[^_])_(?!_)([^_]+)_(?!_)/g, '$1<em>$2</em>')

      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      // Newlines
      .replace(/\n/g, "<br />");
  }
  return (
    <div className={index === 0 ? "projectItemLeft" : "projectItemRight"}>
      <img src={img || null} alt={projectKey} style={{ border: `4px ridge rgb(${color} `}} />
      <h1>{projectKey}</h1>
      <p  dangerouslySetInnerHTML={{
                __html: convertMarkdown(text),
              }} />
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: index === 0 ? "flex-start" : "flex-end",
        }}
      >
        {links.map((l, linkIndex) => {
          if (linkIndex % 2 === 0) {
            const linkName = l;
            const linkURL = links[linkIndex + 1];
            return (
              <a
                key={linkIndex}
                href={linkURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{

                  display: "block",
                  margin: "5px 0",
                  textDecoration: "underline"
                }}
              >
                {linkName}
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Project;
