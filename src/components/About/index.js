import React, { Component } from 'react';
import './style.css';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <article>
                        <div className="col-md-12 aboutBox">
                            <h1 className="aboutTitle">About Me</h1>
                            <article>
                            <img className="pic" alt="my pic" src="https://res.cloudinary.com/bootcamp2019/image/upload/v1557632591/photoOfMeSmall.jpg"></img>
                            <p className="aboutParag">
                                My name is Alexis Yepes Sanabria, a Full Stack Developer with a background in graphic design.
                              I'm passionate about music and computers, and love solving problems. Fully bilingual in English/Spanish
                            </p>
                            </article>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <div className="iconsBox">
                                <h1 className="skillsTitle">SKILLS<span><hr className="lineUnderSkills" style={{ background: "black" }}></hr>
                                    <p className="skillsParag">Demostrated experience in:<br /><br /> HTML5, CSS3, Javascript, JQuery,
                                        Node.Js, React, Bootstrap, MySql, MongoDB, Github, Photoshop, Illustrator, Express, Handlebars.Js,
                                Firebase, Ajax, MVC pattern, Git version control</p></span></h1>

                                <img className="aboutIcons" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834672/html.png"></img>
                                <img className="aboutIconsCss" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,q_auto:best,w_120/v1557834671/css.png"></img>
                                <img className="aboutIconsJs" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834671/javascript.png"></img>
                                <img className="aboutIconsJq" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834672/jquery.png"></img>
                                <img className="aboutIconsNode" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834684/node.png"></img>
                                <img className="aboutIconsReact" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834699/react.png"></img>
                                <img className="aboutIconsBootstrap" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834671/bootstrap.png"></img>
                                <img className="aboutIconsMysql" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834672/mysql.png"></img>
                                <img className="aboutIconsMongodb" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834671/mongodb.png"></img>
                                <img className="aboutIconsGithub" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_100,w_120/v1557835506/GitHub.png"></img>
                                <img className="aboutIconsPs" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,q_auto:best,w_120/v1557834691/photoshop.png"></img>
                                <img className="aboutIconsIll" alt="html" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_70,w_120/v1557834671/illustrator.png"></img>
                                <div className="col-md-12" id="connectBox">
                                    <h3><b>Connect with me</b></h3>
                                    <section className="row">
                                        <div className="col-sm-6">
                                            <a href="https://github.com/alexisyepes" target="blank"><img alt="github" src="/images/GitHub.png"
                                                id="connectIcon1About" /></a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="https://www.linkedin.com/in/alexis-sanabria-80002574/" target="blank"><img alt="linkedin" src="/images/linkedIn.png"
                                                id="connectIcon2About" /></a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default About;