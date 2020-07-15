import React from 'react'
import './myWork.scss'
import {Card, Button} from 'react-bootstrap'

export const MyWork = () => {
    return (
        <>
            <div className="col-10 col-lg-4 col-md-5">
                <Card className="card-container" style={{width: '18rem', background: "#181818"}}>
                    <Card.Img variant="top" src="./my-work1.png"/>
                    <Card.Body>
                        <Card.Title className="main-card-title">Portfolio</Card.Title>
                        <Card.Text className="descr-card-title">
                            This is my main resume site that you see now
                        </Card.Text>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://kyiv.codes/">View</a></Button>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://github.com/rostyslav-nab/my-portfolio">Github
                            source code</a></Button>
                    </Card.Body>
                </Card>
                <Card className="card-container" style={{width: '18rem', background: "#181818"}}>
                    <Card.Img variant="top" src="./my-work2.png"/>
                    <Card.Body>
                        <Card.Title className="main-card-title">Currency Exchange</Card.Title>
                        <Card.Text className="descr-card-title">
                            The site receives data on current exchange rates using the free API
                        </Card.Text>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://currency-exchange-6527c.web.app/">View</a></Button>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://github.com/rostyslav-nab/Currency-exchange">Github
                            source code</a></Button>
                    </Card.Body>
                </Card>
            </div>
            <div className={'col-10 col-lg-4 col-md-5'}>
                <Card className="card-container" style={{width: '18rem', background: "#181818"}}>
                    <Card.Img variant="top" src="./my-work3.png"/>
                    <Card.Body>
                        <Card.Title className="main-card-title">StarWars BD</Card.Title>
                        <Card.Text className="descr-card-title">
                            StarWars Heroes Site
                        </Card.Text>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://swapi2.web.app/">View</a></Button>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://github.com/rostyslav-nab/swapi">Github
                            source code</a></Button>
                    </Card.Body>
                </Card>
                <Card className="card-container" style={{width: '18rem', background: "#181818"}}>
                    <Card.Img variant="top" src="./my-work4.png"/>
                    <Card.Body>
                        <Card.Title className="main-card-title">Unsplash React Native App</Card.Title>
                        <Card.Text className="descr-card-title">
                            Getting images from Unsplash and rendering in full size
                        </Card.Text>
                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer"
                                                                       href="https://github.com/rostyslav-nab/React-Native-App">Github
                            source code</a></Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
