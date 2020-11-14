import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Book Search</h4>
        <img className="img-project" src="/images/project2.png" alt="pic 0" />
        <div className="project-face-info">
          <p className="text-center">
            This is a Full-stack app made with google-book APIs and React
            connected to a MongoDB database
          </p>
          <a
            href="/project2"
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
