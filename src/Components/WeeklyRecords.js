import { Tabs, Row } from 'react-bootstrap';
import { Tab, Container } from 'react-bootstrap';
import { useState } from 'react';

function WeeklyRecord(props) {

    let [goalDay, setGoalDay] = useState('')

    function change_text(e) {
        let goalDay = props.handleGoalDayData(e, goalDay)
        document.getElementById("dayHeader").innerHTML = goalDay
    }

    return (
        <div>
            <div className='one-row'>
                        <Tabs defaultActiveKey="first">
                            <Tab eventKey="first" title="Week 1" className="week-1">
                                <div className='daily'>
                                    <Container fluid className="a">
                                    <button type='button' className='button' onClick="change_text">
                                        <h2>Day 1</h2>
                                    </button>
                                    </Container>
                                    <Container fluid className="b">
                                        <button type='button' className='button'>
                                            <h2>Day 2</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="c">
                                        <button type='button' className='button'>
                                            <h2>Day 3</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="d">
                                        <button type='button' className='button'>
                                            <h2>Day 4</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="e">
                                        <button type='button' className='button'>
                                            <h2>Day 5</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="f">
                                        <button type='button' className='button'>
                                            <h2>Day 6</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="g">
                                        <button type='button' className='button'>
                                            <h2>Day 7</h2>
                                        </button>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="second" title="Week 2" className="week-2">
                                <div className='daily'>
                                    <Container fluid className="a">
                                    <button type='button' className='button'>
                                        <h2>Day 1</h2>
                                    </button>
                                    </Container>
                                    <Container fluid className="b">
                                        <button type='button' className='button'>
                                            <h2>Day 2</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="c">
                                        <button type='button' className='button'>
                                            <h2>Day 3</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="d">
                                        <button type='button' className='button'>
                                            <h2>Day 4</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="e">
                                        <button type='button' className='button'>
                                            <h2>Day 5</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="f">
                                        <button type='button' className='button'>
                                            <h2>Day 6</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="g">
                                        <button type='button' className='button'>
                                            <h2>Day 7</h2>
                                        </button>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="third" title="Week 3">
                            <div className='daily'>
                                    <Container fluid className="a">
                                    <button type='button' className='button'>
                                        <h2>Day 1</h2>
                                    </button>
                                    </Container>
                                    <Container fluid className="b">
                                        <button type='button' className='button'>
                                            <h2>Day 2</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="c">
                                        <button type='button' className='button'>
                                            <h2>Day 3</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="d">
                                        <button type='button' className='button'>
                                            <h2>Day 4</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="e">
                                        <button type='button' className='button'>
                                            <h2>Day 5</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="f">
                                        <button type='button' className='button'>
                                            <h2>Day 6</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="g">
                                        <button type='button' className='button'>
                                            <h2>Day 7</h2>
                                        </button>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey="fourth" title="Week 4">
                            <div className='daily'>
                                    <Container fluid className="a">
                                    <button type='button' className='button'>
                                        <h2>Day 1</h2>
                                    </button>
                                    </Container>
                                    <Container fluid className="b">
                                        <button type='button' className='button'>
                                            <h2>Day 2</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="c">
                                        <button type='button' className='button'>
                                            <h2>Day 3</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="d">
                                        <button type='button' className='button'>
                                            <h2>Day 4</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="e">
                                        <button type='button' className='button'>
                                            <h2>Day 5</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="f">
                                        <button type='button' className='button'>
                                            <h2>Day 6</h2>
                                        </button>
                                    </Container>
                                    <Container fluid className="g">
                                        <button type='button' className='button'>
                                            <h2>Day 7</h2>
                                        </button>
                                    </Container>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
        </div>
    )
}

export default WeeklyRecord