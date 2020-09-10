import React from "react";
import "./skills.css";

const SkillCard = ({ skills }) => {
  console.log(skills);
  return (
    <div className="skill-container">
      <div className="name">{skills.name}</div>
    </div>
  );
};
export default SkillCard;
