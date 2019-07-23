import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* <a target="blank" href="https://github.com/alexisyepes/Vendor-booker"><button type="button" className="btn btn-info p0title-btn1">Github</button></a> */}
                    <a target="blank" href="https://amazingpetgrooming.herokuapp.com"><button type="button" className="btn btn-info p0title-btn2">Live site</button></a>
                    <a href="/work"><button type="button" className="btn btn-info p1title-btn3"><i className="far fa-arrow-alt-circle-left"></i> to Projects</button></a>
                </div>
                <div className="container project0Box">

                    <h1 className="projectTitles">Amazing Pet Grooming</h1>
                    <hr></hr>
                    <div className="row projectPair">
                        <div className="col-md-6">
                            <img alt="project0" src="./images/amazingPetGroomingScreenshot.jpg" className="project0"></img>
                        </div>
                        <div className="col-md-6 project0TextBox">
                            <h1 className="p0description">Description</h1>
                            <p className="p0projectParag">This full-stack-App was created for a pet grooming business and it's is a work in progress as more features are getting added. Credentials to test the admin page are: <br />test@test.ca <br />Password: 123456.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
