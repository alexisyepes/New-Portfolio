import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            target="blank"
            href="https://github.com/alexisyepes/PetgroomingWebApplication"
          >
            <button type="button" className="btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a
            target="blank"
            href="https://petgroomingwebapplication.herokuapp.com/"
          >
            <button type="button" className="btn btn-info p0title-btn2">
              Live site
            </button>
          </a>
          <a href="/work">
            <button type="button" className="btn btn-info p1title-btn3">
              <i className="far fa-arrow-alt-circle-left"></i>Projects
            </button>
          </a>
        </div>
        <div className="container project0Box">
          <h1 className="projectTitles">Pet Grooming Web Application</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot.jpg"
                className="project0"
              ></img>
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0description">DESCRIPTION</h1>

              <p className="p0projectParag">
                This application was created for a real pet grooming business to
                solve a number of issues they were facing before. Note: The code
                on this repository is not exactly the same as the one being used
                in production for the business (privacy, database, and
                confidentiality reasons), but it is close enough to show the
                overall functionality of this application.<br></br>
                <a
                  target="blank"
                  href="https://github.com/alexisyepes/PetgroomingWebApplication"
                >
                  See more detailed information on Github
                </a>
                <br></br>
                Credentials to test the admin page are: <br />
                test1@test.ca <br />
                Password: 123456.<br></br>
                Credentials to test employees page are:
                <br />
                testEmployee@email.com <br />
                Password: 123456.<br></br>
              </p>
              <a href="https://www.amazingpetgrooming.ca" target="blank">
                Link to real site
              </a>
            </div>
          </div>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot1.jpg"
                className="project0"
              ></img>
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0building">BUILDING TOOLS</h1>
              <br />
              <h4 className="p0titles">FRONT END</h4>
              <ul>
                <li className="technologiesUsedList">HTML, CSS</li>
                <li className="technologiesUsedList">Javascript</li>
                <li className="technologiesUsedList">React (JSX)</li>
                <li className="technologiesUsedList">Bootstrap</li>
                <li className="technologiesUsedList">AXIOS</li>
                <li className="technologiesUsedList">React Big Calendar</li>
                <li>Adobe Illustrator and Photoshop</li>
              </ul>
              <h4 className="p0titles">BACK END</h4>
              <ul>
                <li className="technologiesUsedList">node.js</li>
                <li className="technologiesUsedList">Express</li>
                <li className="technologiesUsedList">Sequelize</li>
                <li className="technologiesUsedList">
                  MySql / JAWS_DB (Heroku)
                </li>
                <li className="technologiesUsedList">Passport-Local and JWT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
