import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a target="blank" href="https://github.com/alexisyepes/google-book-search-react"><button type="button" class="fixed btn btn-info title-btn1">Github</button></a>
                    <a target="blank" href="https://googlebooksearch-sanabria.herokuapp.com/"><button type="button" class="btn btn-info title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" class="btn btn-info title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project1Box">

                    <h1 className="projectTitles">Book Search</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project2.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project2TextBox">
                            <h2><b>Description</b></h2>
                            <p className="projectParag">This is a Full-stack app made with google-book APIs and React.
                            All types of books are available through google-play store, but you have to buy them yourself :) .
                        </p>
                        </div>
                    </div>

                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project2SecondPic.png" className="project1"></img>
                        </div>
                        <div className="col-md-6 project1TextBox">
                            <h2><b>Building Tools</b></h2>
                            <br />
                            <h4>FRONT END</h4>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>Javascript</li>
                                <li>React (JSX)</li>
                                <li>Bootstrap</li>
                                <li>AXIOS</li>
                            </ul>

                            <h4>BACK END</h4>
                            <ul>
                                <li>node.js</li>
                                <li>Express</li>
                                <li>Mongoose / mLab MongoDB (Heroku)</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img alt="project1" src="./images/project2ThirdPic.png" className="project1ThirdPic"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
