import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Event Planner</h4>
        <img
          className="img-project"
          src="/images/project5SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Event Planner with registered API endpoints, pushing dynamically
            built html from handlebar templates with SQL data.
          </p>
          <a
            href="/project5"
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
