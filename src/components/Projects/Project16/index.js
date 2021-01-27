import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div className="project-info-btn-container">
          <p className="btn btn-warning mt-2">
            <strong>Private Repo: Code available upon request</strong>
          </p>
          <a target="blank" href="https://www.mypetgroomingapp.com/">
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
          <h1 className="projectTitles">Software as a Service App</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="/images/mypetgroomingapp-screenshot.png"
                className="project0 mb-2"
              />
              <iframe
                className="youtubeVideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/d54GVwWTbP4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video"
              ></iframe>
              <img
                alt="project0"
                src="./images/petProfile.png"
                className="project0"
              />
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0description">DESCRIPTION</h1>

              <div className="p0projectParag">
                This SaaS, provides a simple way for small businesses to manage
                their clients (humans, pets, and services), their appointments
                (including online booking and clients-personal-profile), and
                their employees (virtual punch clock), as well as detailed
                reports on employees working hours, commission earned, etc.
                <br></br>
                Users can choose among different membership packages to
                subscribe either monthly or yearly.
                <br></br>
                <br></br>
                <img
                  alt="project0"
                  src="./images/punchClock.gif"
                  className="project0 mb-2"
                />
                <img
                  alt="project0"
                  src="./images/addAppointmentsToCalendar.gif"
                  className="project0 mb-2"
                />
                <h4 className="text-center mt-3">Payment processing</h4>
                <img
                  alt="project0"
                  src="./images/credit-cards.png"
                  className="project0 mt-2"
                />
              </div>
              <br></br>
              <a href="https://www.mypetgroomingapp.com/" target="blank">
                <h4 className="text-center">
                  {" "}
                  <strong> Link to site hosted at heroku</strong>{" "}
                </h4>
              </a>
            </div>
          </div>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="./images/singleDayReportDocsCommission.png"
                className="project0"
              />
              <img
                alt="project0"
                src="./images/singleDayReportDocs.png"
                className="project0"
              />
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0building">BUILDING TOOLS</h1>
              <hr />
              <h4 className="p0titles">FRONT END</h4>
              <ul>
                <li className="technologiesUsedList">HTML</li>
                <li className="technologiesUsedList">CSS</li>
                <li className="technologiesUsedList">Javascript</li>
                <li className="technologiesUsedList">
                  React (Class and Functional Components)
                </li>
                <li className="technologiesUsedList">Context Api</li>
                <li className="technologiesUsedList">Apollo Client</li>
                <li className="technologiesUsedList">MailGun</li>
                <li className="technologiesUsedList">Bootstrap</li>
                <li>Adobe Illustrator and PhotoShop</li>
              </ul>
              <h4 className="p0titles">BACK END</h4>
              <ul>
                <li className="technologiesUsedList">node.js</li>
                <li className="technologiesUsedList">GraphQL</li>
                <li className="technologiesUsedList">Express</li>
                <li className="technologiesUsedList">NodeMailer</li>
                <li className="technologiesUsedList">
                  MySql / JAWS_DB (Heroku)
                </li>
                <li className="technologiesUsedList">Sequelize</li>
                <li className="technologiesUsedList">Passport-Local and JWT</li>
              </ul>
              <h4 className="p0titles">PAYMENT PROCESSOR</h4>
              <ul>
                <li className="technologiesUsedList">Stripe</li>
                <li className="technologiesUsedList">Stripe webhooks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
