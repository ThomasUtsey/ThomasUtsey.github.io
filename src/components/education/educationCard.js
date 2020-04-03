import React from "react";
import "./education.css";

const EducationCard = ({ data }) => {
  const summ = data.description.split("\n");
  return (
    <div  className="education-card">
      <h2 className="edu-title">{data.institution}</h2>
      <div className="edu-dsc">{summ.map(e => <div key={e}>{e}</div>)}</div>
      <div className="edu-date">Year of completion:  {data.end.year}</div>
      <div className="edu-grade">{data.gpa}</div>
    </div>
  );
};
export default EducationCard;
