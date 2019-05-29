import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                <a target="blank" href="https://github.com/alexisyepes/friend-finder"><button type="button" class="fixed btn btn-info p7title-btn1">Github</button></a>
                <a target="blank" href="https://blooming-dusk-13977.herokuapp.com/"><button type="button" class="btn btn-info p7title-btn2">Live site</button></a>
                <a href="/work"><button type="button" class="btn btn-info p7title-btn3"><i class="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
            </div>
            <div className="container project1Box">

                <h1 className="projectTitles">Friend Finder</h1>
                <hr></hr>
                <div className="row projectPair">
                    <div className="col-md-6">
                        <img alt="project1" src="./images/project7.png" className="project1"></img>
                    </div>
                    <div className="col-md-6 project1TextBox">
                        <h2 className="p7descriptionTitle">Description</h2>
                        <p className="p7projectParag" >This is a compatibility-based "FriendFinder" application -- 
                        basically a dating app. This full-stack site will take in results from your users' surveys, 
                        then compare their answers with those from other users. The app will then display the name and 
                        picture of the user with the best overall match.
                        </p>
                    </div>
                </div>

                <div className="row projectPair">
                    <div className="col-md-6">
                        <img alt="project1" src="./images/project7SecondPic.png" className="project1"></img>
                    </div>
                    <div className="col-md-6 project1TextBox">
                        <h2 className="p7buildingTitle">Building Tools</h2>
                        <br/>
                        <ul>
                            <li>HTML, CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>node.js</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>


            </div>
            </div>
        )
    }
}
