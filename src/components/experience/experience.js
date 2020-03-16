import React from "react";
import ExperienceCard from './experienceCard'

const Experience = props => {
  console.log(props, "experience");
  return (
    <div className="experience">
      {" "}
      {props.data.map(e => {
        return <ExperienceCard
                data ={e}
        />
      })}
    </div>
  );
};
export default Experience;
