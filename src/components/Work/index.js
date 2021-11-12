import React from "react";
import "./style.css";
import Project18 from "../ProjectFaces/Project18";
import Project17 from "../ProjectFaces/Project17";
import Project16 from "../ProjectFaces/Project16";
import Project15 from "../ProjectFaces/Project15";
// import Project14 from "../ProjectFaces/Project14";
import Project13 from "../../components/ProjectFaces/Project13";
import Project12 from "../../components/ProjectFaces/Project12";
import Project11 from "../../components/ProjectFaces/Project11";
import Project10 from "../../components/ProjectFaces/Project10";
import Project9 from "../../components/ProjectFaces/Project9";
import Project8 from "../../components/ProjectFaces/Project8";
import Project7 from "../../components/ProjectFaces/Project7";
import Project6 from "../../components/ProjectFaces/Project6";
import Project5 from "../../components/ProjectFaces/Project5";
import Project4 from "../../components/ProjectFaces/Project4";
import Project3 from "../../components/ProjectFaces/Project3";
import Project2 from "../../components/ProjectFaces/Project2";
import Project1 from "../../components/ProjectFaces/Project1";

export default function index() {
	return (
		<div className=" boxWrapper">
			<div className=" mainBox">
				{/* <a
          className="text-center nounderline"
          href="https://www.aypwebcreations.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <button className="goToFreelancePage-btn">
            <b>Visit freelance Page for real-life projects</b>
          </button>
        </a> */}
				<h1 className="block-header">Portfolio</h1>
				<div className="project-face-wrapper">
					<Project18 />
					<Project17 />
					<Project16 />
					<Project15 />
					{/* <Project14 /> */}
					<Project13 />
					<Project12 />
					<Project11 />
					<Project10 />
					<Project9 />
					<Project8 />
					<Project7 />
					<Project6 />
					<Project5 />
					<Project4 />
					<Project3 />
					<Project2 />
					<Project1 />
					<div className="" id="connectBoxWork">
						<h1 className="connectBoxWork">
							<b>Connect with me</b>
						</h1>
						<section className="row">
							<div className="col-sm-12">
								<a href="https://github.com/alexisyepes" target="blank">
									<img
										alt="github"
										src="/images/GitHub.png"
										id="connectIcon1Work"
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
                    id="connectIcon2Work"
                  />
                </a>
              </div> */}
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
