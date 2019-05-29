import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/eventPlanner"><button type="button" class="fixed btn btn-info p5title-btn1">Github</button></a>
                    <a target="blank" href="https://fast-springs-87530.herokuapp.com/"><button type="button" class="btn btn-info p5title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" class="btn btn-info p5title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="p5projectTitles">Event Planner</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project5SecondPic.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <br/>
                            <h3 className="p5descriptionTitle"><b>Description</b></h3>
                            <p className="p5projectParag">Event Planner A web server with registered API endpoints,
                            pushing dynamically built html from handlebar templates with SQL data. We have built an
                            event planner app with UIs for event planners and another for event attendees.
                        </p>
                        </div>
                    </div>

                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project5.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h3 className="p5buildingTitle"><b>Building Tools</b></h3>
                            <br />
                            <h4 className="p5frontTile">FRONT END</h4>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                                <li>Express-handlebars (templating handling)</li>
                            </ul>
                            <br/>
                            <h4 className="p5backTile">BACK END</h4>
                            <ul>
                                <li>node.js</li>
                                <li>Express</li>
                                <li>MySql and Sequelize</li>
                                <li>Moment JS</li>
                                <li>Full Calendar</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project5ThirdPic.png" className="project5ThirdPic"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
