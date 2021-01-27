import React from "react";
import "../projectFaces-styles.css";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Software as a Service App</h4>
        <img
          className="img-project"
          src="/images/mypetgroomingapp-screenshot.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Subscription based software created using React, NodeJs, Express,
            GraphQL, MySql, Sequelize, PassportJs, Stripe, Html, etc...
          </p>
          <a
            href="/project16"
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
