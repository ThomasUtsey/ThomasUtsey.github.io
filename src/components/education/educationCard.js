import React from "react";
import "./education.css";

const EducationCard = ({ data }) => {
  console.log(data);
  return (
    <div className="education-card">
      <h2 className="edu-title">{data.institution}</h2>
      <div className="edu-dsc">{data.description}</div>
      <div className="edu-date">Year of completion:  {data.end.year}</div>
      <div className="edu-grade">{data.gpa}</div>
      <div className="edu-links">links</div>
    </div>
  );
};
export default EducationCard;
