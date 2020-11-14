import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Eat da burger</h4>
        <img
          className="img-project"
          src="/images/project6SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Users can create new burgers to be added to the Menu to be devoured
            later by clicking a button
          </p>
          <a
            href="/project6"
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
