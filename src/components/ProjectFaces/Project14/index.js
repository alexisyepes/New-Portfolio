import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Diary App</h4>
        <img className="img-project" src="/images/diaryApp.png" alt="pic 0" />
        <div className="project-face-info">
          <p className="text-center">
            This full-stack-app can be used as a virtual diary to write your
            personal thoughts, memories, or any other important stuff
          </p>
          <a
            href="/project14"
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
