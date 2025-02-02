import React from 'react';
import './Project.css';

function Project({ index, img, text, color, links, projectKey }) {  // Destructure props
  return (  
    <div className={index === 0 ? "projectItemLeft" : "projectItemRight"}>
      <img src={img} alt={projectKey} style={{ borderColor: color }} />
      <h1>{projectKey}</h1>
      <p dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
      <div style={{"display": "flex", "gap":"10px", justifyContent: index === 0 ? "flex-start" : "flex-end"}}>
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
                        style={{ display: "block", margin: "5px 0" }}
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
