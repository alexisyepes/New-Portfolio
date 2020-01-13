import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
	render() {
		return (
			<div>
				<div>
					<a target="blank" href="https://github.com/alexisyepes/diary-app">
						<button type="button" className="fixed btn btn-info p13title-btn1">
							Github
						</button>
					</a>
					<a
						target="blank"
						href="https://alex-sanabria-diary-app.herokuapp.com/"
					>
						<button type="button" className="btn btn-info p13title-btn2">
							Live site
						</button>
					</a>
					<a href="/work">
						<button type="button" className="btn btn-info p1title-btn3">
							<i className="far fa-arrow-alt-circle-left"></i>Projects
						</button>
					</a>
				</div>
				<div className="container project1Box">
					<h1 className="projectTitles">Diary App</h1>
					<hr></hr>
					<div className="row projectPair">
						<div className="col-md-6">
							<img
								alt="project1"
								src="./images/diaryRegisterScreenshot.JPG"
								className="project1"
							></img>
						</div>
						<div className="col-md-6 project1TextBox">
							<h1 className="p1description">Description</h1>
							<p className="p1projectParag">
								This full-stack-app can be used as a virtual diary to write your
								personal thoughts, memories, or any other important staff you
								wish to keep secret. After creating an account, you can then,
								log in to your private profile to start writing on an animated
								book that simulates page flipping. Created using React, Node,
								Express, MongoDb, Passport, JWT, etc.
							</p>
							<br />

							<h1 className="p1building">Building Tools</h1>
							<br />
							<div className="row">
								<div className="col-md-6">
									<h4 className="p14titles">FRONT END</h4>
									<ul>
										<li>React</li>
										<li>HTML, CSS</li>
										<li>Javascript</li>
										<li>Bootstrap</li>
									</ul>
								</div>
								<div className="col-md-6">
									<h4 className="p14titles">BACK END</h4>
									<ul>
										<li>node.js</li>
										<li>Express</li>
										<li>Passport Js</li>
										<li>Atlas MongoDB</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="row projectPair">
						<div className="col-md-12">
							<img
								alt="project 14"
								src="./images/myDiaryApp.gif"
								className="project1"
							></img>
						</div>
					</div>
				</div>
				;
			</div>
		);
	}
}
