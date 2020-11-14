import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Clicky Game</h4>
        <img
          className="img-project"
          src="/images/project3SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            This is a simple memory game created with React. Try not to click on
            the image already clicked
          </p>
          <a
            href="/project3"
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
