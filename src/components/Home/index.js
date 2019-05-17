import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 homeBox">           
            <h3 className="homeSubtitle">Alexis Yepes Sanabria</h3>
            <hr style={{ width: "70%" }}></hr>
            <h6 className="fullStackDev">| Full Stack Developer |</h6>
            <div className="linkToAbout">
              <a href="/about" style={{ textDecoration: "none" }}> <h6 className="homeAboutMeBox">More About Me</h6></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
