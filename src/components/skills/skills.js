import React from "react";
import SkillCard from "./skillscard";
import './skills.css'

const Skills = (props) => {
  console.log(props,'-----------------------------------HERE')
  return <div>
    <div>
    {/* <h1>Skills</h1> */}
    </div>
  {/* <div className="skills">{props.data.map(e => {
    return <SkillCard
      skills={e}
    />
  })}</div>; */}
  <div className="certifications-header">
    <h1>Certifications</h1>
    </div>
  <div className="skills">{props.certs.map(e => {
    return <SkillCard
      skills={e}
    />
  })}</div>;
  </div>
};

export default Skills;

