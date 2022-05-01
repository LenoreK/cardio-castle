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
                        <Tab eventKey="first" title="Week 1">Week 1</Tab>
                            <Tab eventKey="second" title="Week 2">Week 2</Tab>
                            <Tab eventKey="third" title="Week 3">Week 3</Tab>
                            <Tab eventKey="fourth" title="Week 4">Week 4</Tab>
                        </Tabs>
                    </div>
                    <div className='three-row'>
                        <Container fluid className="a">a</Container>
                        <Container fluid className="b">b</Container>
                        <Container fluid className="c">c</Container>
                        <Container fluid className="d">d</Container>
                        <Container fluid className="e">e</Container>
                        <Container fluid className="f">f</Container>
                        <Container fluid className="g">g</Container>
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