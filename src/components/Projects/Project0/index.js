import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
	render() {
		return (
			<div>
				<div>
					{/* <a target="blank" href="https://github.com/alexisyepes/Vendor-booker"><button type="button" className="btn btn-info p0title-btn1">Github</button></a> */}
					<a
						target="blank"
						href="https://petgroomingwebapplication.herokuapp.com/"
					>
						<button type="button" className="btn btn-info p0title-btn2">
							Live site
						</button>
					</a>
					<a href="/work">
						<button type="button" className="btn btn-info p1title-btn3">
							<i className="far fa-arrow-alt-circle-left"></i> to Projects
						</button>
					</a>
				</div>
				<div className="container project0Box">
					<h1 className="projectTitles">Amazing Pet Grooming</h1>
					<hr></hr>
					<div className="row projectPair">
						<div className="col-md-6">
							<img
								alt="project0"
								src="./images/amazingPetGroomingScreenshot.jpg"
								className="project0"
							></img>
						</div>
						<div className="col-md-6 project0TextBox">
							<h1 className="p0description">Description</h1>
							<p className="p0projectParag">
								This full-stack-App was created for a pet grooming business and
								it's is a work in progress as more features are getting added. A
								calendar is getting integrated for the staff to handle
								appointments based on each employee schedule. Credentials to
								test the admin page are: <br />
								test1@test.ca <br />
								Password: 123456.<br></br>
								Credentials to test employees page are:
								<br />
								testEmployee@email.com <br />
								Password: 123456.<br></br>
							</p>
						</div>
					</div>
					<div className="row projectPair">
						<div className="col-md-6">
							<img
								alt="project0"
								src="./images/amazingPetGroomingScreenshot1.jpg"
								className="project0"
							></img>
						</div>
						<div className="col-md-6 project0TextBox">
							<h1 className="p0building">Building Tools</h1>
							<br />
							<h4 className="p0titles">FRONT END</h4>
							<ul>
								<li>HTML, CSS</li>
								<li>Javascript</li>
								<li>React (JSX)</li>
								<li>Bootstrap</li>
								<li>AXIOS</li>
								<li>React Big Calendar</li>
							</ul>
							<h4 className="p0titles">BACK END</h4>
							<ul>
								<li>node.js</li>
								<li>Express</li>
								<li>MySql / JAWS_DB (Heroku)</li>
								<li>Passport-Local and JWT</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
