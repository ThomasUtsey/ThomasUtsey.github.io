import React from "react";

import github from "../../github.png";
import linkedin from "../../linkedin.png";
import resume from "../../resume.png";
import "./links.css";

const Links = () => {
  return (
    <div className="link-container">
      <a href="https://github.com/ThomasUtsey">
        <img src={github} alt="Github icon" />
      </a>
      <a href="https://www.linkedin.com/feed/">
        <img src={linkedin} alt="Linked In icon" />
      </a>
      <a href="https://resume.creddle.io/resume/66v1k2i2kf6">
        <img src={resume} alt="Resume Icon" />
      </a>
    </div>
  );
};
export default Links;
