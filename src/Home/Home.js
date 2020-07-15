import React from 'react'
import './home.scss'
import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className="col-4">
                <div className="text-zone">
                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                    <div className="title"><h1 id="main-effect-header">
                        Hi, I'm Rostyslav, <br/> web developer
                    </h1></div>
                    <p className="text-muted title-descr">Front-End Developer / React / Freelancer</p>
                    <div className="btn-contact">
                        <Link to="/contacts">
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
                <img alt="" src="./jblue.png" className="main-img"/>
            </div>
        </>
    )
}
