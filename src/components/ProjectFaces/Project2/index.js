import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Guess the word</h4>
        <img className="img-project" src="/images/project12.png" alt="pic 0" />
        <div className="project-face-info">
          <p className="text-center">
            Simple game where the user has to guess the correct country-word in
            less the 9 guesses.
          </p>
          <a
            href="/project12"
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
