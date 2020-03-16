import React from "react";
import "./projects.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <img src={data.images[0].resolutions.thumbnail.url} alt=" project homepage"/>
      <h2 className="proj-title">{data.name}</h2>
      <div className="proj-dsc">{data.summary}</div>

      <div className="proj-links">links</div>
      <a href={data.githubUrl}>GitHub</a>
    </div>
  );
};
export default ProjectCard;
