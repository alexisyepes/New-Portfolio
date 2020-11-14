import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Friend Finder</h4>
        <img
          className="img-project"
          src="/images/project7SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            This is a compatibility-based "FriendFinder" application, basically
            a dating app.
          </p>
          <a
            href="/project7"
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
