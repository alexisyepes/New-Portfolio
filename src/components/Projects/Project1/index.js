import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div>
          <a target="blank" href="https://github.com/alexisyepes/Vendor-booker">
            <button type="button" className="btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://vendor-booker-alex.herokuapp.com/">
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
        <div className="container project1Box">
          <h1 className="projectTitles">Vendor Booker </h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project1.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p1description">Description</h1>
              <p className="p1projectParag">
                This is a project developed by multiple collaborators. This app
                is a fully functional and fully responsive site deployed in
                Heroku. The idea behind this site is to provide small business
                owners with a platform where new and existing clients can book
                services; allowing the owner to manage the sheduling of staff
                better. The project is based on node.js, express.js and
                react.js. The back end is backed by MongoDB and Mongoose as the
                ORM. The aplication has been deployed in Heroku using their mLab
                database application.
                <br />
                <br />
                Credentials to test the app:
                <br /> <br />
                Client: valentina@email.com Password: 123456 <br />
                Admin: Cata@email.com Password: 123456
              </p>
            </div>
          </div>

          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project1"
                src="./images/project1SecondPic.png"
                className="project1"
              ></img>
            </div>
            <div className="col-md-6 project1TextBox">
              <h1 className="p1building">Building Tools</h1>
              <br />
              <h4 className="p1titles">FRONT END</h4>
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>React (JSX)</li>
                <li>Bootstrap</li>
                <li>AXIOS</li>
                <li>REDUX</li>
                <li>Full calendar</li>
                <li>Google Firebase (user authentication)</li>
              </ul>
              <h4 className="p1titles">BACK END</h4>
              <ul>
                <li>node.js</li>
                <li>Express</li>
                <li>Mongoose / mLab MongoDB (Heroku)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
