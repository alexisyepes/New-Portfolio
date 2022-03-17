import React, { Component } from "react";
import "./style.css";

class About extends Component {
	render() {
		return (
			<div className="about-main-container">
				<div className="container about-container">
					<div className="row ">
						<article>
							<div className="col-md-12 aboutBox">
								<h1 className="aboutTitle">Alex Y Sanabria</h1>
								<article>
									<img
										className="pic"
										alt="my pic"
										src="./images/photoOfMeSmall.jpg"
									></img>
									<p className="aboutParag">
										I'm Alex Sanabria, a Full Stack Developer from Cambridge,
										Ontario. I'm passionate about music, computers, and I really
										love solving problems. <br />
										I'm also fully bilingual in English and Spanish
									</p>
								</article>
								<br></br>
								<hr></hr>
								<br></br>
								<div className="iconsBox">
									<div className="skills-wrapper">
										<h1 className="skillsTitle">Skills</h1>
										<h3 className="skills-parag-subtitle">
											<i className="fas fa-laptop-code"></i> I have experience
											with these technologies:
										</h3>
										<p className="skillsParag">
											Javascript, Typescript, React, Next Js, HTML5, Redux,
											Context, CSS, CSS Modules, Styled Components, SASS,
											Bootstrap, Handlebars Js, Firebase, Node, Express,
											GraphQL, MySql, PostgreSQL, MongoDB, Nodemailer,
											Photoshop, Illustrator, MVC pattern, Git Version Control,
											Heroku, Netlify
										</p>
										<div className="col-md-12" id="connectBox">
											<h3>
												<b>Connect with me</b>
											</h3>
											<section className="row">
												<div className="col-sm-12">
													<a
														href="https://github.com/alexisyepes"
														target="blank"
													>
														<img
															alt="github"
															src="/images/GitHub.png"
															id="connectIcon1About"
														/>
													</a>
												</div>
												{/* <div className="col-sm-6">
													<a
														href="https://www.linkedin.com/in/alexis-sanabria-80002574/"
														target="blank"
													>
														<img
															alt="linkedin"
															src="/images/linkedIn.png"
															id="connectIcon2About"
														/>
													</a>
												</div> */}
											</section>
										</div>
										{/* <a
											className="text-center"
											href="/images/new-resume-2021.pdf"
											target="blank"
										>
											<h4 style={{ color: "white", fontSize: 25 }}>
												<b>Click to view resume</b>
											</h4>
										</a> */}
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
