import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Memory Game</h4>
        <img
          className="img-project"
          src="/images/project8SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Our web version of the popular memory card game where the objective
            is to collect the most pairs of cards.
          </p>
          <a
            href="/project8"
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
