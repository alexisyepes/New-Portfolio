import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">Event Handler App</h4>
        <img
          className="img-project"
          src="/images/event-management-system-scrsht.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            This full-stack-app will allow the users to organize their schedule
            in a better way. Organize parties, meetings, and much more.
          </p>
          <a
            href="/project-EventManage"
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
