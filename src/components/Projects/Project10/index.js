import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/GiphyApp">
            <button type="button" class="fixed btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://alexisyepes.github.io/GiphyApp/">
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
          <h1 className="projectTitles">Giphy App</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project10.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p10Titles">Description</h1>
              <p className="p10projectParag">
                Small project to display gifs from the Giphy website, based on
                the user's choice. It also adds a new button with new gifs.
              </p>
            </div>
          </div>

          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project10SecondPic.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p10Titles">Building Tools</h1>
              <br />
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>Giphy API</li>
                <li>AJAX</li>
                <li>jQuery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
