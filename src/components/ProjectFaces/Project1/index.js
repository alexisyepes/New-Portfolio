import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Crystal Collector</h4>
        <img className="img-project" src="/images/project13.png" alt="pic 0" />
        <div className="project-face-info">
          <p className="text-center">
            Each crystal has its own value, and the objective is to match the
            random number given displayed on top.
          </p>
          <a
            href="/project13"
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
