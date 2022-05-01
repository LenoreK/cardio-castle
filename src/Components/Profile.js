import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'
import { Tabs, Row } from 'react-bootstrap';
import { Tab, Container } from 'react-bootstrap';

function Profile() {
    return (
        <body>
            <div className='main-container'>
                <TopBar />
                <Aside />
                <main>
                    <div className='one-row'>
                        <Tabs defaultActiveKey="first">
                            <Tab eventKey="first" title="Week 1" className="week-1">
                                <div className='daily'>
                                    <Container fluid className="a">
                                        <h2>Day 1</h2>
                                    </Container>
                                    <Container fluid className="b">
                                        <h2>Day 2</h2>
                                    </Container>
                                    <Container fluid className="c">
                                        <h2>Day 3</h2>
                                    </Container>
                                    <Container fluid className="d">
                                        <h2>Day 4</h2>
                                    </Container>
                                    <Container fluid className="e">
                                        <h2>Day 5</h2>
                                    </Container>
                                    <Container fluid className="f">
                                        <h2>Day 6</h2>
                                    </Container>
                                    <Container fluid className="g">
                                        <h2>Day 7</h2>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="second" title="Week 2">
                                <div className='daily'>
                                    <Container fluid className="a">
                                        <h2>Day 1</h2>
                                    </Container>
                                    <Container fluid className="b">
                                        <h2>Day 2</h2>
                                    </Container>
                                    <Container fluid className="c">
                                        <h2>Day 3</h2>
                                    </Container>
                                    <Container fluid className="d">
                                        <h2>Day 4</h2>
                                    </Container>
                                    <Container fluid className="e">
                                        <h2>Day 5</h2>
                                    </Container>
                                    <Container fluid className="f">
                                        <h2>Day 6</h2>
                                    </Container>
                                    <Container fluid className="g">
                                        <h2>Day 7</h2>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="third" title="Week 3">
                                <div className='daily'>
                                    <Container fluid className="a">
                                        <h2>Day 1</h2>
                                    </Container>
                                    <Container fluid className="b">
                                        <h2>Day 2</h2>
                                    </Container>
                                    <Container fluid className="c">
                                        <h2>Day 3</h2>
                                    </Container>
                                    <Container fluid className="d">
                                        <h2>Day 4</h2>
                                    </Container>
                                    <Container fluid className="e">
                                        <h2>Day 5</h2>
                                    </Container>
                                    <Container fluid className="f">
                                        <h2>Day 6</h2>
                                    </Container>
                                    <Container fluid className="g">
                                        <h2>Day 7</h2>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="fourth" title="Week 4">
                                <div className='daily'>
                                    <Container fluid className="a">
                                        <h2>Day 1</h2>
                                    </Container>
                                    <Container fluid className="b">
                                        <h2>Day 2</h2>
                                    </Container>
                                    <Container fluid className="c">
                                        <h2>Day 3</h2>
                                    </Container>
                                    <Container fluid className="d">
                                        <h2>Day 4</h2>
                                    </Container>
                                    <Container fluid className="e">
                                        <h2>Day 5</h2>
                                    </Container>
                                    <Container fluid className="f">
                                        <h2>Day 6</h2>
                                    </Container>
                                    <Container fluid className="g">
                                        <h2>Day 7</h2>
                                    </Container>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="three-row">
                        Hello
                    </div>
                </main>
        <footer>
            <small>&copy; Copyright 2022 Cardio Castle</small>
        </footer>
    </div>
</body>
    )
}

export default Profile