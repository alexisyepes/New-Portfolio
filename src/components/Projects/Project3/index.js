import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/clicky-game">
            <button type="button" className="btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://alexisyepes.github.io/clicky-game/">
            <button type="button" className="btn btn-info p0title-btn2">
              Live site
            </button>
          </a>
          <a href="/work">
            <button type="button" className="btn btn-info p0title-btn3">
              <i className="far fa-arrow-alt-circle-left"></i> to Projects
            </button>
          </a>
        </div>
        <div className="container project1Box">
          <h1 className="projectTitles">Clicky Game</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project3"
                src="./images/project3.PNG"
                className="project3"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h3 className="p3description">
                <b>Description</b>
              </h3>
              <p className="p3projectParag">
                This is a memory game created with React. The application
                renders different images of The Incredibles Super Heroes to the
                screen. Each image listens for click events that re-order them
                to random positions.
              </p>
            </div>
          </div>

          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project3SecondPic.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h3 className="p3buildingTitle">
                <b>Building Tools</b>
              </h3>
              <br />
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>React (JSX)</li>
                <li>ES6</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
