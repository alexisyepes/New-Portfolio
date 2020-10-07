import React from "react";
import "./style.css";

export default function index() {
  return (
    <div className="container boxWrapper">
      <main className="row">
        <div className="col-md-12 mainBox">
          <article className="block" id="workBox">
            <a
              className="text-center nounderline"
              href="https://www.aypwebcreations.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="goToFreelancePage-btn">
                <b>Visit freelance Page for real-life projects</b>
              </button>
            </a>
            <h1 className="block-header">
              Portfolio <span className="side-projects">(side projects)</span>{" "}
            </h1>
            <hr></hr>
            <br></br>
            <div className="row">
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/amazingPetGrooming.png"
                  alt="pic 0"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project0"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Amazing Pet Grooming</h4>
                    <hr></hr>
                    <p>
                      This Full-Stack-App was created for an actual business
                      using React, NodeJs, Express, MySql, Sequelize,
                      PassportJs, JWT.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/eventManagementSystem.png"
                  alt="pic 0"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project-EventManage"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Event Management System</h4>
                    <hr></hr>
                    <p>
                      This full-stack-app will allow the users to organize their
                      schedule in a better way. Organize parties, meetings, and
                      much more. Created using React, Node, Express, MongoDb,
                      Passport, JWT, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/diaryApp.png"
                  alt="pic 0"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project14"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Diary App</h4>
                    <hr></hr>
                    <p>
                      This full-stack-app can be used as a virtual diary to
                      write your personal thoughts, memories, or any other
                      important staff you wish to keep secret. Created using
                      React, Node, Express, MongoDb, Passport, JWT, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/vendorBooker_Logo.png"
                  alt="pic 0"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project1"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Vendor Booker</h4>
                    <hr></hr>
                    <p>
                      The idea behind this site is to provide small business
                      owners with a platform where new and existing clients can
                      book services. Credentials to test client:
                      valentina@email.com Password: 123456 Credentials to test
                      Admin: Cata@email.com Password: 123456
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/googleBookScreenShot.PNG"
                  alt="pic 0"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project2"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Book Search</h4>
                    <hr></hr>
                    <p>
                      This is a Full-stack app made with google-book APIs and
                      React. All types of books are available through
                      google-play store, but you have to buy them yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/clicky-game2.PNG"
                  alt="pic 9"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project3"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Clicky Game</h4>
                    <hr></hr>
                    <p>
                      This is a memory game created with React. The application
                      renders different images of The Incredibles Super Heroes
                      to the screen. Each image listens for click events that
                      re-order them to random positions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/bbclogo.png"
                  alt="pic 9"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project4"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>News Scraper</h4>
                    <hr></hr>
                    <p>
                      This is a web app that lets users view and leave comments
                      on the latest news from BBC science section. Using Cheerio
                      we grab the news from the BBC website, save them to our
                      Mongo database and render them in our app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/eventPlannerLogo3.png"
                  alt="pic 8"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project5"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Event Planner</h4>
                    <hr></hr>
                    <p>
                      Event Planner A web server with registered API endpoints,
                      pushing dynamically built html from handlebar templates
                      with SQL data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/eatDaBurger.PNG"
                  alt="pic 8"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project6"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Eat da burger!</h4>
                    <hr></hr>
                    <p>
                      Eat da Burger, is a full-stack app where users can create
                      new burgers to be added to the Menu. Once a new burger is
                      created, it will be displayed on the Menu with a button to
                      be devoured.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/screenshotHome.PNG"
                  alt="pic 7"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project7"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Friend Finder</h4>
                    <hr></hr>
                    <p>
                      This is a compatibility-based "FriendFinder" application
                      -- basically a dating app. This full-stack site will take
                      in results from your users' surveys, then compare their
                      answers with those from other users. The app will then
                      display the name and picture of the user with the best
                      overall match.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/card_back.png"
                  alt="pic 6"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project8"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Memory Game</h4>
                    <hr></hr>
                    <p>
                      Our web version of the popular memory card game where the
                      objective is to collect the most pairs of cards. This
                      version will allow a player to play any of the three
                      modes: easy, timed, and challenge.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/cityBlackAndWhite.jpg"
                  alt="pic 5"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project9"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Train Schedule</h4>
                    <hr></hr>
                    <p>
                      Moment.js was used to handle time in this app. Users can
                      add trains to the Schedule and arrival time and frequency
                      will be added automatically to the table.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/giphy_logo.png"
                  alt="pic 4"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="project10"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Giphy App</h4>
                    <hr></hr>
                    <p>
                      Small project to display gifs from the Giphy website,
                      based on the user's choice. It also adds a new button with
                      new gifs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/canadaBackground.jpg"
                  alt="pic 3"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project11"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Canada Trivia</h4>
                    <hr></hr>
                    <p>
                      How much do you know about Canada? Answer the questions
                      before time's up and results will be displayed at the end.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/youWin.png"
                  alt="pic 1"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project12"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Guess the word</h4>
                    <hr></hr>
                    <p>
                      Simple game where the user has to guess the correct
                      country-word in less the 9 guesses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 containerTest">
                <img
                  className="img-fluid imageTest"
                  src="/images/blueCrystal.png"
                  alt="pic 2"
                ></img>
                <a
                  style={{ marginBottom: "30px", width: "100%" }}
                  href="/project13"
                  className="btn btn-info btn1"
                  role="button"
                >
                  More info
                </a>
                <div className="middleTest">
                  <div className="textTest">
                    <h4>Crystal Collector</h4>
                    <hr></hr>
                    <p>
                      In this game the user will add points when clicking on the
                      crystals. Each crystal has its own value, and the
                      objective is to match the random number given displayed on
                      top.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" id="connectBoxWork">
                <h1 className="connectBoxWork">
                  <b>Connect with me</b>
                </h1>
                <section className="row">
                  <div className="col-sm-6">
                    <a href="https://github.com/alexisyepes" target="blank">
                      <img
                        alt="github"
                        src="/images/GitHub.png"
                        id="connectIcon1Work"
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
                        id="connectIcon2Work"
                      />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./videos/transition.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
}
