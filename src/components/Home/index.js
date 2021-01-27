import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 homeBox">
            <h3 className="homeSubtitle">Alexis Yepes Sanabria</h3>
            <hr style={{ width: "70%" }}></hr>
            <h6 className="fullStackDev"> Full-Stack Developer </h6>
            <div className="linkToAbout">
              <a href="/about" style={{ textDecoration: "none" }}>
                {" "}
                <h6 className="homeAboutMeBox">More About Me</h6>
              </a>
            </div>
            <br />
            <a
              className="text-center"
              href="/images/new-resume-2021.pdf"
              target="blank"
            >
              <h4 style={{ color: "white", fontSize: 25 }}>
                <b>Click to view resume</b>
              </h4>
            </a>

            {/* <a
              className="text-center"
              href="https://www.aypwebcreations.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="goToFreelancePage-btn">
                <b>Go to freelance Page</b>
              </button>
            </a> */}
          </div>
        </div>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted>
            <source src="./videos/letters.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
      </div>
    );
  }
}
