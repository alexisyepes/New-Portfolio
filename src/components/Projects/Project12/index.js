import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/Word-Guess-Game"><button type="button" class="fixed btn btn-info title-btn1">Github</button></a>
                    <a target="blank" href="https://alexisyepes.github.io/Word-Guess-Game/"><button type="button" class="btn btn-info title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" class="btn btn-info title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="projectTitles">Word Guess Game</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project12.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h3><b>Description</b></h3>
                            <p className="projectParag">Simple game where the user has to guess the correct
                            country-word in less the 9 guesses.
                        </p>
                            <h3><b>Building Tools</b></h3>
                            <br />
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}