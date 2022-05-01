import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

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
                    <div className='three-row'>Row 3</div>
                </main>
        <footer>
            <small>&copy; Copyright 2022 Cardio Castle</small>
        </footer>
    </div>
</body>
    )
}

export default Profile