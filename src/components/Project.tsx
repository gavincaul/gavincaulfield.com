import React from 'react';
import './Project.css';

function Project({ img, text, color, link, projectKey }) {  // Destructure props
  return (  
    <div className='projectItem'>
      <img src={img} alt={projectKey} style={{ borderColor: color }} />
      <h1>{projectKey.charAt(0).toUpperCase() + projectKey.slice(1)}</h1>
      <p dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
      <a
        href={link[1]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link[0]}
      </a>
    </div>
  );
}

export default Project;
