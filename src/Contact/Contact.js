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
                                <div className="text-zone new-format">
                                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                                    <div className="title"><h1 className="h1900" id="main-effect-header">
                                        Contact Me
                                  </h1></div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link white" href="https://www.facebook.com/rostyslav.nabok.9" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src="https://www.shareicon.net/data/32x32/2017/05/22/886208_facebook_512x512.png" />Facebook</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.linkedin.com/in/b-deppo/" target="_blank" rel="noopener noreferrer"><img alt="linkedIn" src="https://www.shareicon.net/data/32x32/2017/05/22/886191_social-media_512x512.png" />linkedIn</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="mailto:rostuslav.nab@gmail.com" target="_blank" rel="noopener noreferrer"><img alt="Email" src="https://www.shareicon.net/data/32x32/2016/06/21/607410_email_128x128.png" />Email</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://github.com/rostyslav-nab" target="_blank" rel="noopener noreferrer"><img alt="GitHub" src="https://www.shareicon.net/data/32x32/2016/06/20/607083_black_128x128.png" />GitHub</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tel:+380507544969" target="_blank" rel="noopener noreferrer"><img alt="Call me" src="https://cdn2.iconfinder.com/data/icons/line-hero-essentials/32/Essentials_phone_telephone_vintage-32.png" />Call me</a>
                                        </li>
                                    </ul>
                                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                                </div>
                            </div>

                            <div className="col-8" id="bear-id">
                                <div class="bear">
                                    <div class="bear__ears">
                                        <div class="bear__ears__left ear"></div>
                                        <div class="bear__ears__right ear"></div>
                                    </div>
                                    <div class="bear__body">
                                        <div class="bear__eyes">
                                            <div class="bear__eyes--left eye"></div>
                                            <div class="bear__eyes--right eye"></div>
                                        </div>
                                        <div class="bear__nose">
                                            <div class="bear__nose--inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;