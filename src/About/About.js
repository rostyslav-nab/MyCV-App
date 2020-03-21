import React from 'react';
import './about.scss'
import Nav from '../Nav/Nav'

class About extends React.Component {
    render() {
        return (
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
                                    ABOUT ME</h1></div>
                                <p className="white">
                                    Applying for a position Front-End developer. Student of the National Aviation University, studying at the Faculty of Cybersecurity, computer and software engineering.
                                </p>
                                <p className="white">
                                    I am fond of Web development for the past 3 years. I have good analytical skills. Easy to learn. I work well in the team.
                                </p>
                                <p className="white">
                                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                                </p>
                                <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                            </div>
                        </div>

                        <div className="col-8 experiment">
                            <div className="wrapper">
                                <article id="viewport">
                                    <section id="pyramid">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </section>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;