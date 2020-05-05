import React from "react";

import github from "../../github.png";
import linkedin from "../../linkedin.png";
import resume from "../../resume.png";
import "./links.css";

const Links = () => {
  return (
    <div className="link-container">
      <a target="_blank" href="https://github.com/ThomasUtsey">
        <img src={github} alt="Github icon" />
        Github
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/thomasutsey/">
        <img src={linkedin} alt="Linked In icon" />
        Linkedin
      </a>
      <a target="_blank" href="https://resume.creddle.io/resume/66v1k2i2kf6">
        <img src={resume} alt="Resume Icon" />
        Resume
      </a>
    </div>
  );
};
export default Links;
