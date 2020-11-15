import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/unit-4-game">
            <button type="button" class="fixed btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://alexisyepes.github.io/unit-4-game/">
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
          <h1 className="p13projectTitles">Crystal Collector</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project13.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h2 className="p13Titles">
                <b>Description</b>
              </h2>
              <p className="p13projectParag">
                In this game the user will add points when clicking on the
                crystals. Each crystal has its own value, and the objective is
                to match the random number given displayed on top.
              </p>
              <h2 className="p13Titles">
                <b>Building Tools</b>
              </h2>
              <br />
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
