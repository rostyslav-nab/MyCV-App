import React from 'react';
import './home.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
                                <div className="text-zone">
                                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                                    <div className="title"><h1 id="main-effect-header">
                                        Hi, I'm Rostyslav, <br /> web developer
                                          </h1></div>
                                    <p className="text-muted">Front-End Developer / React / Freelancer</p>
                                    <div className="btn-contact">
                                        <Link to="/contacts" >
                                            <span className="text">CONTACT ME</span>
                                            <span className="line -right"></span>
                                            <span className="line -top"></span>
                                            <span className="line -left"></span>
                                            <span className="line -bottom"></span>
                                        </Link>
                                    </div>
                                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                                </div>
                            </div>

                            <div className="col-8">
                                <img alt="main-img" src="./jblue.png" className="main-img" width="400px" height="600px" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;