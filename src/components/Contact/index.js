import React from 'react';
import './style.css';

export default function index() {
    return (
        <div className="container">
            <div className="col-md-12" id="connectBoxContact">
                <h3 className="connectTitle"><b>Connect with me</b></h3><hr></hr>
                <section className="row">
                    <div className="col-sm-6">
                        <a href="https://github.com/alexisyepes" target="blank"><img alt="github" src="/images/GitHub.png"
                            id="connectIcon1" />
                            <h3 style={{ color: "white" }} className="linkLabels">Github</h3>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://www.linkedin.com/in/alexis-sanabria-80002574/" target="blank"><img alt="linkedin" src="/images/linkedIn.png"
                            id="connectIcon2" />
                            <h3 style={{ color: "white" }} className="linkLabels">LinkedIn</h3>
                        </a>
                    </div>
                </section>
                <br></br><br></br>
                <a href="mailto: alexisyep@gmail.com"><h4 style={{ color: "white" }}><b><i class="fas fa-envelope-square"></i> alexisyep@gmail.com</b></h4></a>
                <h4><b><i class="fas fa-phone-square"></i> 905 299 2366</b></h4>
                <h4><b><i class="fas fa-map-marker-alt"></i> Cambridge, ON</b></h4>
                <br></br>
                <hr></hr>
                <a href="kj"><h4 style={{ color: "white", fontSize: 25 }}><b>Click to view resume</b></h4></a>


            </div>
        </div>
    )
}
