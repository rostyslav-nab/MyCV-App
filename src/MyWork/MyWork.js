import React from 'react';
import './myWork.scss'
import Nav from '../Nav/Nav';
import { Card, Button } from 'react-bootstrap';

class MyWork extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mainContent">
                    <div className="leftBlock">
                        <Nav />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Card className="card-container" style={{ width: '18rem', background: "#181818" }}>
                                    <Card.Img variant="top" src="./my-work1.png" />
                                    <Card.Body>
                                        <Card.Title className="main-card-title">Portfolio</Card.Title>
                                        <Card.Text>
                                            <p className="descr-card-title">This is my main resume site that you see now</p>
                                        </Card.Text>
                                        <Button className="card-btn" variant="dark"><a target="_blank" without rel="noopener noreferrer" href="https://my-portfolio-f4f05.web.app/">View</a></Button>
                                        <Button className="card-btn" variant="dark"><a target="_blank" without rel="noopener noreferrer" href="https://github.com/rostyslav-nab/my-portfolio">Github source code</a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MyWork;