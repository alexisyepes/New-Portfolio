import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div className="project-info-btn-container">
          <a
            target="blank"
            href="https://github.com/alexisyepes/pet-grooming-public-repo"
          >
            <button type="button" className="btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a
            target="blank"
            href="https://pet-grooming-public-repo.herokuapp.com/"
          >
            <button type="button" className="btn btn-info p0title-btn2">
              Live site
            </button>
          </a>
          <a href="/work">
            <button type="button" className="btn btn-info p0title-btn3">
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
                src="./images/amazingPetGroomingScreenshot.png"
                className="project0 mb-2"
              />
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot1.png"
                className="project0 mb-2"
              />
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot2.png"
                className="project0"
              />
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0description">DESCRIPTION</h1>

              <div className="p0projectParag">
                This application was created for a real pet grooming business to
                solve a number of issues they were facing before. Note: The code
                on this repository is exactly the same as the one being used in
                production for the business; however this repo is hosted in
                heroku using a different domain name and database than the one
                being used in the real app.<br></br>
                <a
                  target="blank"
                  href="https://github.com/alexisyepes/PetgroomingWebApplication"
                >
                  See more detailed information on Github
                </a>
                <br></br>
                Credentials to test the protected pages are: <br />
                <br />
                Admin (Has full access to all routes/areas) <br />
                Email: alexsanabria@fullstackdev.com <br />
                Password: 123456
                <hr />
                Receptionist (Can access the receptionist control panel) <br />
                Email: maryJohnson@gmail.com <br />
                Password: 123456 <br />
                <hr />
                Groomer 1 (Can only access her/his calendar) <br />
                Email: nathalies@gmail.com <br />
                Password: 123456 <br />
                <hr />
                Groomer 2 (Can only access her/his calendar) <br />
                Email: peterpan@gmail.com <br />
                Password: 123456 <br />
                <hr />
                Customer (Can only have access to the Client-registration page){" "}
                <br />
                Email: client@gmail.com <br />
                Password: 123456
              </div>
              <a
                href="https://pet-grooming-public-repo.herokuapp.com/"
                target="blank"
              >
                Link to site hosted in heroku
              </a>
            </div>
          </div>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot3.png"
                className="project0 mb-2"
              />
              <img
                alt="project0"
                src="./images/amazingPetGroomingScreenshot4.png"
                className="project0"
              />
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
