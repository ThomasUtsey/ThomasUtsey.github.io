import React from "react";
import SkillCard from "./skillscard";
import './skills.css'

const Skills = (props) => {
  
  return <div className="skills">{props.data.map(e => {
    return <SkillCard
      skills={e}
    />
  })}</div>;
};

export default Skills;

