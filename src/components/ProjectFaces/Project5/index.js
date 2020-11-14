import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Train Schedule</h4>
        <img className="img-project" src="/images/project9.png" alt="pic 0" />
        <div className="project-face-info">
          <p className="text-center">
            Users can add trains to the Schedule and arrival time and frequency
            will be added automatically to the table.
          </p>
          <a
            href="/project9"
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
