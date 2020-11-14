import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Giphy App</h4>
        <img
          className="img-project"
          src="/images/project10SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Small project to display gifs from the Giphy website, based on the
            user's choice. It also adds a new button with new gifs.
          </p>
          <a
            href="/project10"
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
