import React from "react";
import "./DefenceCard.css";

const DefenceCard = ({ project }) => {
  return (
    <div className="defence-card">
      <img src={project.image} alt={project.name} className="card-image" />
      <div className="card-content">
        <h2>{project.name}</h2>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Organization:</strong> {project.organization}</p>
        <p><strong>Induction Year:</strong> {project.inductionYear}</p>
        <p className="description">{project.description}</p>
        {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="learn-more-link"
  >
    Learn More →
  </a>
)}

      </div>
    </div>
  );
};

export default DefenceCard;
