import React from 'react';
import { Button, Form } from 'react-bootstrap';

function DailyComponent() {
    return (
        <div className="three-row">
            <div className="dayHeader">
                {/* Need to add in code for changing the number */}
                <h2 className="dayHeader">Day 2</h2>
            </div>
            <div className="stats">
                <div className="choiceSmiley">
                    <h3 className='feel'>How did you feel today?</h3>
                    <img className="smiley" src="../smiley-2.png"></img>
                    <img className="frownie" src="../frownie-2.png"></img>
                </div>
                <Form className='distanceDuration'>
                    <Form.Group className="mb-3" controlId="formBasicDuration">
                        <Form.Label>Duration:</Form.Label>
                        <Form.Control type='number' placeholder="Enter in minutes..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDistance">
                        <Form.Label>Distance:</Form.Label>
                        <Form.Control type='number' placeholder="Enter in miles..." />
                    </Form.Group>
                </Form>
                <div className="notesContainer">
                    <h3 className="notes">Notes:</h3>
                    <Form.Group className="textArea1" controlId="formBasicUser">
                        <Form.Control as='textarea' rows={6} placeholder="Write a Goal..." />
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}

export default DailyComponent