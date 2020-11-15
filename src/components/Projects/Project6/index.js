import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/burger">
            <button type="button" class="fixed btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://lit-shore-28259.herokuapp.com/">
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
          <h1 className="projectTitles">Eat da Burger</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project6.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h2 className="p6descriptionTitle">Description</h2>
              <p className="p6projectParag" style={{ fontSize: "20px" }}>
                Eat da Burger, is a full-stack app where users can create new
                burgers to be added to the Menu. Once a new burger is created,
                it will be displayed on the Menu with a button to be devoured.
                If the user chooses to devour the burger by clicking the
                utensils' icon, the burger will be moved to the list of devoured
                burgers with a trash button to be deleted.
              </p>
            </div>
          </div>

          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project6ThirdPic.png"
                className="project6ThirdPic"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h2 className="p6buildingTitle">Building Tools</h2>
              <br />
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>ORM</li>
                <li>MVC design pattern</li>
                <li>AJAX</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>MySql</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </div>
            {/* <div className="col-md-6">
                            <img alt="project1" src="./images/project6ThirdPic.png" className="project5ThirdPic"></img>
                        </div> */}
          </div>
        </div>
      </div>
    );
  }
}
