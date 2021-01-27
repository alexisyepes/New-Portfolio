import React from "react";
import "../projectFaces-styles.css";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Printing memories</h4>
        <img
          className="img-project"
          src="https://res.cloudinary.com/bootcamp2019/image/upload/v1593400594/ayp%20web%20creations/project1.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            E-commerce website for sublimation products created using: React,
            MySql, Sequelize, NodeJs, Stripe, Html, etc..
          </p>
          <a
            href="/project15"
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
