import React from "react";

const index = () => {
  return (
    <div className="container-project-face">
      <div>
        <h4 className="text-center text-light">News Scraper</h4>
        <img
          className="img-project"
          src="/images/project4SecondPic.png"
          alt="pic 0"
        />
        <div className="project-face-info">
          <p className="text-center">
            This is a web app that lets users view and leave comments on the
            latest news from BBC science section.
          </p>
          <a
            href="/project4"
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
