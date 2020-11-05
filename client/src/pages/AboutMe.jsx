import React from 'react';
import "../assets/css/style.css";
import aboutme from "../assets/images/about-me.jpeg";
import clickonme from "../assets/images/clickonme.png";
import resume from "../assets/Eduardo_Pineda_Resume.pdf"

function AboutMe() {
    return (
        <div>
            <main className="card-main mx-auto">
                <h2 className="card-title"><strong>About Me</strong></h2>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <a href={aboutme}>
                            <img
                                src={aboutme}
                                className="card-img"
                                alt="Eduardo Pineda"
                            />
                        </a>

                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                                <strong>My name is Eduardo Pineda, and live in Augusta, GA with my
                                girlfriend, and our two cats, Cocoa & Pepe. I enjoy watching
                                sports(basketball & football), playing video games, traveling,
                                learning new skills, and trying as many foods as i possibly can.
                                Currently enrolled in Georgia Tech's Coding Boot Camp, with the
                                hopes of becoming a full-stack web developer. Decided to pursue
                                this path after not finding my calling while working in many
                                dirrent fields, which include: construction, retail, customer
                                service, management, and public service. Previous job experience
                                shows my versatility and adaptability to changing environments and
                                situations.</strong>

                            </p>
                            <p className="card-text-2">
                                <strong>While still in the process of completing my program, I'm doing
                                everything in my power, to learn as much as possible, about Front
                                and Back End Developement. Placing full confidence in myself to be
                                successful in my future endeavors. Provided is my porfolio,
                                showing a number of assignments that have kept me quite busy and
                                show my progress as a student. Please check out my Contact Page,
                                which provies my contact information and numerous links.</strong>

                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="card mx-auto" id="contact-card">
                <div className="card-body">
                    <h2 className="card-title text-center"><strong>Reach Out to Me!</strong></h2>
                    <hr />
                    <h4 className="card-subtitle mb-2 text-muted text-center" id="contact-text">
                        <strong>Here's a few different way to keep in touch or check in on my
                        progress:</strong>

                    </h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul><strong><li>Phone #: (706)618-2155</li>
                                <li><a href="mailto: edibozu@gmail.com">Email</a></li>
                                <li><a href="https://github.com/Edibozu">GitHub Repository</a></li>
                                <li><a href="https://www.linkedin.com/in/eduardo-pineda-5595431b6/">LinkedIn</a></li>
                                <li><a href={resume}>Grab a copy of my resume!</a></li></strong>

                            </ul>
                        </div>
                        <a href={clickonme}>
                            <img className="pic" alt="clickonme" src={clickonme}></img>
                        </a>

                    </div>
                </div>
            </div>

        </div>


    );
}

export default AboutMe;