import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            target="blank"
            href="https://github.com/alexisyepes/event-management-system"
          >
            <button type="button" className="btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://alexis-event-handler.herokuapp.com/">
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
          <h1 className="projectTitles">Event Management System</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/eventManageSystem2.JPG"
                className="project0"
              ></img>
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0description">DESCRIPTION</h1>
              <p className="p0projectParag">
                This full-stack-app will allow you to organize your schedule in
                a better way. You can create events to be added to your own
                personal account, and add guests to those events. Using a
                calendar to select the desired dates and times, you will manage
                your appointments to keep track on your busy schedule and never
                miss those important dates. Organize parties, meetings, and much
                more.<br></br>
                <a
                  target="blank"
                  href="https://github.com/alexisyepes/event-management-system"
                >
                  See more detailed information on Github
                </a>
                <br></br>
                Credentials to test the personal page are: <br />
                alexfullstackdev@gmail.com <br />
                Password: 123456.<br></br>
              </p>
            </div>
          </div>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/eventManageSystem.JPG"
                className="project0"
              ></img>
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0building">BUILDING TOOLS</h1>
              <br />
              <h4 className="p0titles">FRONT END</h4>
              <ul>
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
                <li className="technologiesUsedList">Passport Js</li>
                <li className="technologiesUsedList">Json Web Token</li>
                <li className="technologiesUsedList">MongoDb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
