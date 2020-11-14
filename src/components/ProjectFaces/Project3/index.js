import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Canada Trivia</h4>
        <img
          className="img-project"
          src="/images/project11SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            How much do you know about Canada? Answer the questions before
            time's up and results will be displayed at the end.
          </p>
          <a
            href="/project11"
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
