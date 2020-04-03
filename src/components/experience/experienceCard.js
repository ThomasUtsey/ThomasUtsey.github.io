import React from "react";
import "./experience.css";

const ExperienceCard = ({ data }) => {
  
  const summ = data.summary.split("\n");
  
  return (
    <div className="experience-card">
      <h2 className="exp-title">{data.company}</h2>
      <div className="exp-pos">{data.position}</div>
      <div className="exp-date">Year of completion: {data.end.year?data.end.year:'Current'}</div>
      <div className="exp-summary">{summ.map(e => <div key={e}>{e}</div>)}</div>
    </div>
  );
};
export default ExperienceCard;
