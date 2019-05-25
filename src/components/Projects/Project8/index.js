import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/project1Alexis"><button type="button" class="fixed btn btn-info title-btn1">Github</button></a>
                    <a target="blank" href="https://alexisyepes.github.io/project1Alexis/"><button type="button" class="btn btn-info title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" class="btn btn-info title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="projectTitles">Memory Game</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project8.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h1>Description</h1>
                            <br/>
                            <p className="projectParag" style={{ fontSize: "20px" }}>Our web version of the popular memory card game where the 
                            objective is to collect the most pairs of cards. This version will allow a player to play 
                            any of three modes: easy (just choose the number of pairs), timed (same as easy but with timed 
                            countdown) and challenge (a progressively difficult game). The player will also be able to log 
                            his/her game stats on a leader board using name and country.
                            Two third party API's were used in this project. One from http://superheroapi.com/ and the 
                            other one from https://restcountries.eu/. The superheroes one to render the images on the cards, 
                            and the flag images to be displayed on the leaderboard.
                    
                        </p>
                        </div>
                    </div>

                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project8SecondPic.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h1>Building Tools</h1>
                            <br />
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>AJAX</li>
                                <li>Google Firebase (Real time database)</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
