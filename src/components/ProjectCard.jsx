import React from "react";
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, imageUrl, liveUrl, sourceUrl }) {
    return (
      <div className="project-card">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-links">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Demo</a>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">View Source Code</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;