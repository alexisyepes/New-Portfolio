import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/TriviaGame">
            <button type="button" class="fixed btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://alexisyepes.github.io/TriviaGame/">
            <button type="button" class="btn btn-info p0title-btn2">
              Live site
            </button>
          </a>
          <a href="/work">
            <button type="button" class="btn btn-info p0title-btn3">
              <i class="far fa-arrow-alt-circle-left"></i> to Projects
            </button>
          </a>
        </div>
        <div className="container project1Box">
          <h1 className="projectTitles">Canada Trivia</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project11.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p11Titles">Description</h1>
              <p className="p11projectParag">
                How much do you know about Canada? Answer the questions before
                time's up and results will be displayed at the end.
              </p>
            </div>
          </div>

          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project11SecondPic.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p11Titles">Building Tools</h1>
              <br />
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
