import React, { Component } from "react";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="container about-container">
        <div className="row ">
          <article>
            <div className="col-md-12 aboutBox">
              <h1 className="aboutTitle">Alex Y Sanabria</h1>
              <article>
                <img
                  className="pic"
                  alt="my pic"
                  src="https://res.cloudinary.com/bootcamp2019/image/upload/v1557632591/photoOfMeSmall.jpg"
                ></img>
                <p className="aboutParag">
                  My name is Alexis Yepes Sanabria, a Full Stack Developer from
                  Cambridge, Ontario, with a background in graphic design. I'm
                  passionate about music and computers, and love solving
                  problems. <br />
                  I'm fully bilingual in English and Spanish
                </p>
              </article>
              <br></br>
              <hr></hr>
              <br></br>
              <div className="iconsBox">
                <div className="skills-wrapper">
                  <h1 className="skillsTitle">Skills</h1>
                  <h3 className="skills-parag-subtitle">
                    <i className="fas fa-laptop-code"></i> I have experience
                    with these technologies :
                  </h3>
                  <p className="skillsParag">
                    React Js, Node Js, HTML5, CSS3, SASS, Javascript, GraphQl,
                    MySql, MongoDB, Nodemailer, Bootstrap, Photoshop,
                    Illustrator, Express Js, Handlebars.Js, Firebase, Heroku,
                    Ajax, MVC pattern, Git version control
                  </p>
                  <div className="col-md-12" id="connectBox">
                    <h3>
                      <b>Connect with me</b>
                    </h3>
                    <section className="row">
                      <div className="col-sm-6">
                        <a href="https://github.com/alexisyepes" target="blank">
                          <img
                            alt="github"
                            src="/images/GitHub.png"
                            id="connectIcon1About"
                          />
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          href="https://www.linkedin.com/in/alexis-sanabria-80002574/"
                          target="blank"
                        >
                          <img
                            alt="linkedin"
                            src="/images/linkedIn.png"
                            id="connectIcon2About"
                          />
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default About;
