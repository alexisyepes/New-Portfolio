import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/newsScraper"><button type="button" className="btn btn-info p3title-btn1">Github</button></a>
                    <a target="blank" href="https://alexyepesnewscraper.herokuapp.com/"><button type="button" className="btn btn-info p3title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" className="btn btn-info p3title-btn3"><i className="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="projectTitles">News Scraper</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project4.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h2 style={{ textAlign: "center" }}>Description</h2>
                            <p className="projectParag">This is a web app that lets users view and leave comments on the latest
                            news from BBC science section. Using Cheerio we grab the news from the BBC website, save them to our
                            Mongo database and render them in our app.
                        </p>
                        </div>
                    </div>

                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project4SecondPic.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h2 style={{ textAlign: "center" }}>Building Tools</h2>
                            <h4>FRONT END</h4>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                                <li>Express-handlebars (templating handling)</li>
                                <li>Axios and Cheerios</li>

                            </ul>
                            <h4>BACK END</h4>
                            <ul>
                                <li>node.js</li>
                                <li>Express</li>
                                <li>Mongoose / mLab MongoDB (Heroku)</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
