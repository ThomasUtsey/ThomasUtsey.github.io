import React from "react";
import "./skills.css";

const SkillCard = ({ skills }) => {
  console.log(skills,'SKILLS--------------------');
  return (
    <div className="skill-container">
      <div className="name"> 
        <span className="skill-name">{skills.name}</span>
        {/* Only render the URL div and link if skills.url exists */}
        {skills.url && (
       <span className="url">
       <a 
         href={skills.url}
         target="_blank"
         rel="noopener noreferrer"
       >
         Credly
       </a>
     </span>)}
      </div>
      <div className="level">{skills.level}</div>
      <div className="description">{skills.summary}</div>
      <div className="certs">Issued On: {skills.date}</div>
    </div>
  );
};
export default SkillCard;
