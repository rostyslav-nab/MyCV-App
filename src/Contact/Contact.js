import React from 'react';
import './contact.scss'
import Nav from '../Nav/Nav';
import './bear.scss';

class Contact extends React.Component {
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
                                <div className="text-zone new-format media-contacts">
                                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                                    <div className="title"><h1 className="h1900" id="main-effect-header">
                                        Contact Me
                                  </h1></div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link white" href="https://www.facebook.com/rostyslav.nabok.9" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-32.png" /> Facebook</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.linkedin.com/in/b-deppo/" target="_blank" rel="noopener noreferrer"><img alt="linkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-32.png" /> linkedIn</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="mailto:rostuslav.nab@gmail.com" target="_blank" rel="noopener noreferrer"><img alt="Email" src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/mail-32.png" /> Email</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://github.com/rostyslav-nab" target="_blank" rel="noopener noreferrer"><img alt="GitHub" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-32.png" /> GitHub</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tel:+380507544969" target="_blank" rel="noopener noreferrer"><img alt="Call me" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/phone-32.png" /> Call me</a>
                                        </li>
                                    </ul>
                                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                                </div>
                            </div>

                            <div className="col-8" id="bear-id">
                                <div className="bear">
                                    <div className="bear__ears">
                                        <div className="bear__ears__left ear"></div>
                                        <div className="bear__ears__right ear"></div>
                                    </div>
                                    <div className="bear__body">
                                        <div className="bear__eyes">
                                            <div className="bear__eyes--left eye"></div>
                                            <div className="bear__eyes--right eye"></div>
                                        </div>
                                        <div className="bear__nose">
                                            <div className="bear__nose--inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;