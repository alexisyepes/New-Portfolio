import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/trainSchedule"><button type="button" class="fixed btn btn-info title-btn1">Github</button></a>
                    <a target="blank" href="https://alexisyepes.github.io/trainSchedule/"><button type="button" class="btn btn-info title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" class="btn btn-info title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="projectTitles">Train Schedule</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project9.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h3>Description</h3>
                            <p className="projectParag" style={{ fontSize: "16px" }}>Moment.js was used to handle time in this app.
                            Simple app where the users can add trains to the Schedule and arrival time and frequency will be added
                            automatically to the table.
                        </p>
                            <h3>Technologies used</h3>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>Moment JS</li>
                                <li>Firebase (Database)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
