import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.scss';
import Nav from '../Nav/Nav';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mainContent">
                    <div className="leftBlock">
                        <Nav />
                    </div>
                    <div className="container">
                        <div class="row">
                            <div class="col-4">
                                <div className="text-zone">
                                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                                    <div className="title"><h1 id="main-effect-header">
                                        Hi, I'm Rostyslav, <br /> web developer
                                          </h1></div>
                                    <p className="text-muted">Front-End Developer / React / Freelancer</p>
                                    <div className="btn-contact">
                                        <a>
                                            <span class="text">CONTACT ME</span>
                                            <span class="line -right"></span>
                                            <span class="line -top"></span>
                                            <span class="line -left"></span>
                                            <span class="line -bottom"></span>
                                        </a>
                                    </div>
                                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                                </div>
                            </div>

                            <div class="col-8">
                                <img src="./jblue.png" className="main-img" width="400px" height="600px" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;