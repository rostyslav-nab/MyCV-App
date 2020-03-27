import React from 'react';
import './skills.scss';
import Nav from "../Nav/Nav";
import MyCloud from "./tag-cloud";



class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mainContent">
                    <div className="leftBlock">
                        <Nav />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="text-zone new-format">
                                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                                    <div className="title"><h1 id="main-effect-header">
                                        Skills and <br /> Experience
                                      </h1></div>
                                    <p className="white">
                                        The main area of my expertise is front end development (client side of the web).
                                    <p />
                                        <p className="white"></p>
                                        HTML, CSS, JS, building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.
                                    </p>
                                    <p className="white">
                                        I have little experience working in freelance, I am looking for work in IT company and become Team Lead for 5 years.
                                    </p>
                                    <p className="white">English: Intermediate</p>
                                    <p className="white">Ukrainian: Native</p>
                                    <p className="white">Russian: Fluent</p>
                                    <div className="btn-contact">
                                        <a target="_blank" href="https://drive.google.com/file/d/1BdXUy26iYcyUn_Q9_baeJYeEH4Hsk1U3/view?usp=sharing" >
                                            <span className="text">View CV</span>
                                            <span className="line -right"></span>
                                            <span className="line -top"></span>
                                            <span className="line -left"></span>
                                            <span className="line -bottom"></span>
                                        </a>
                                    </div>
                                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                                </div>
                            </div>

                            <div className="col-8">
                                <MyCloud />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Skills;