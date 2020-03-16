import React from "react";
import "./experience.css";

const ExperienceCard = ({ data }) => {
  console.log(data);
  return (
    <div className="experience-card">
      <h2 className="exp-title">{data.company}</h2>
      <div className="exp-pos">{data.position}</div>
      <div className="exp-date">Year of completion: {data.end.year}</div>
      <div className="exp-summary">{data.summary}</div>
    </div>
  );
};
export default ExperienceCard;
