import React from "react";
import "./skills.css";

const SkillCard = ({ skills }) => {
  console.log(skills);
  return (
    <div className="skill-container">
      <div className="name">{skills.name}</div>
      <div className="bar">
        <div className="bar-name"> Profficiency: </div>
              <div id="bar-indicator">{skills.rating}
              .bar-segemnt
              
              </div>
      </div>
      <div className="yoe">
        Experience:{skills.yearsOfExperience * 12} months
      </div>
    </div>
  );
};
export default SkillCard;
