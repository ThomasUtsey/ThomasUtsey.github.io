import React from "react";
import "./projects.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <img
        className="proj-img"
        src={data.images[0].resolutions.thumbnail.url}
        alt=" project homepage"
      />
      <h2 className="proj-title">{data.name}</h2>
      <div className="proj-dsc">{data.summary}</div>

      <div className="proj-links">links</div>
      <div>
        <a target="Github" href={data.githubUrl}>
          GitHub-repo
        </a>
      </div>
      <div>
        <a target="Website" href={data.website}>
          See-the-Website
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
