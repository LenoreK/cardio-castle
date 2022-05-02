import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Profile() {
    return (
    <aside>
        <h2 className='welcome'>Welcome Name</h2>
        <div className="monthly-goal">
            <Form className='goal-form'>
                <h2 className="write-goal">Write a Goal</h2> 
                    <div className="form-inner">
                        <Form.Group className="textArea" controlId="formBasicUser">
                            <Form.Control as='textarea' rows={6} placeholder="Write a Goal..." />
                        </Form.Group>
                            <Button className="startGoal" type='submit' variant='primary'>Start Goal</Button>
                            <br />
                            <Button className="finishGoal" type="submit">Finish Goal</Button>
                            </div>
                        </Form> 
                    </div>
                </aside>
    )
}

export default Profile
