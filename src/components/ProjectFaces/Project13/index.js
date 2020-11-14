import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Vendor Booker</h4>
        <img
          className="img-project"
          src="/images/project1-scrsht.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            Project developed by 4 collaborators from the University of Toronto,
            where I was in charge of the Authentication part
          </p>
          <a
            href="/project1"
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
