import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="mainBox-projects">
        <div className="project-info-btn-container">
          <a
            target="blank"
            href="https://github.com/alexisyepes/sublimation-store"
          >
            <button type="button" class="fixed btn btn-info p0title-btn1">
              Github
            </button>
          </a>
          <a target="blank" href="https://www.printingmemories.ca/">
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
          <h1 className="projectTitles">Printing Memories</h1>
          <hr></hr>
          <div className="row projectPair">
            <div className="col-md-6">
              <img
                alt="project0"
                src="https://res.cloudinary.com/bootcamp2019/image/upload/v1593400594/ayp%20web%20creations/project1.png"
                className="project0 mb-2"
              />
              <img
                alt="project0"
                src="./videos/mug.gif"
                className="project0 mb-2"
              />
              <img
                alt="project0"
                src="./videos/petTag.gif"
                className="project0 mb-2"
              />
            </div>
            <div className="col-md-6 project0TextBox">
              <h2 className="p0description">DESCRIPTION</h2>

              <div className="p0projectParag">
                This e-commerce site was designed for a sublimation store where
                users customize their products before buying them online.
                <br></br>
                All products can be fully customizable and are saved in the
                shopping cart (Using Redux and Redux-persist)
                <br></br>
                The General products page contains non-customizable products
                that the owner of the site update and add to the inventory from
                time to time.
                <br></br>
                <img
                  alt="project0"
                  src="./images/printingMemories1.png"
                  className="project0 mb-2 mt-2"
                />
                <h4 className="text-center mt-3">Payment processing</h4>
                <img
                  alt="project0"
                  src="./images/credit-cards.png"
                  className="project0 mt-2"
                />
              </div>
              <br></br>
              <a href="https://www.printingmemories.ca/" target="blank">
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
                src="./images/shoppingCart.png"
                className="project0"
              />
              <img
                alt="project0"
                src="./images/printingMemories2.png"
                className="project0"
              />
            </div>
            <div className="col-md-6 project0TextBox">
              <h1 className="p0building">BUILDING TOOLS</h1>
              <hr />
              <h4 className="p0titles">FRONT END</h4>
              <ul>
                <li className="technologiesUsedList">HTML</li>
                <li className="technologiesUsedList">
                  CSS/SASS (Pure) No external libraries were used
                </li>
                <li className="technologiesUsedList">Javascript</li>
                <li className="technologiesUsedList">
                  React (Class and Functional Components)
                </li>
                <li className="technologiesUsedList">Redux</li>
                <li className="technologiesUsedList">MailGun</li>
                <li>Adobe Illustrator and PhotoShop</li>
              </ul>
              <h4 className="p0titles">BACK END</h4>
              <ul>
                <li className="technologiesUsedList">NodeJs</li>
                <li className="technologiesUsedList">Express</li>
                <li className="technologiesUsedList">NodeMailer</li>
                <li className="technologiesUsedList">MongoDB / Mongo Atlas</li>
              </ul>
              <h4 className="p0titles">PAYMENT PROCESSOR</h4>
              <ul>
                <li className="technologiesUsedList">Stripe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
