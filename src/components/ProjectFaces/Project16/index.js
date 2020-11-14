import React from "react";
import "../projectFaces-styles.css";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Amazing Pet Grooming</h4>
        <img
          className="img-project"
          src="/images/amazingPetGroomingScreenshot.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            This Full-Stack-App was created for an actual business using React,
            NodeJs, Express, MySql, Sequelize, PassportJs, JWT.
          </p>
          <a
            href="/project0"
            className="btn btn-warning btn-block"
            role="button"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
