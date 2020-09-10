import React from "react";
import "./profilecard.css";
import aws from "../../aws-certified-solutions-architect-associate.png";
import lambda from "../../full-stack-web-development-technical-interviewing.png";

const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <a
        target="AWS"
        href="https://www.youracclaim.com/badges/ee993dc0-d738-4e95-a904-64a84dc8ad4b"
      >
        <img src={aws} alt="Aws certified" />
      </a>
      <a
        target="Lambda"
        href="https://www.youracclaim.com/badges/26e15f7d-b938-4f63-bef4-482e76ad6759"
      >
        <img src={lambda} alt="Lambda endorsed" />
      </a>

      <div className="name-container">
        {/* <img src={data.picture} alt="pic of me"/> */}
        <div>
          <h1>{data.name}</h1>
          <h2>{data.label}</h2>
        </div>
      </div>
      <div className="profile-card-mid">
        <div className="headline">
          <h2>"{data.headline}"</h2>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
