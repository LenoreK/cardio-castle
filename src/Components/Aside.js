import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react'

function Profile(props) {
    let [enteredGoal, setEnteredGoal] = useState('')

    return (
    <aside>
        <h2 className='welcome'>Welcome Name</h2>
        <div className="monthly-goal">
            <Form className='goal-form'>
                <h2 className="write-goal">Write a Goal</h2> 
                <div className="form-inner">
                    <Form.Group className="textArea" controlId="formBasicUser">
                        <Form.Control as='textarea' rows={6} placeholder="Write a Goal..." onChange={
                            (e) => {
                                let value = e.target.value
                                console.log(value)
                                setEnteredGoal(value)
                            }
                        }/>
                    </Form.Group>
                    <Button classID="startGoalId" className="startGoal" type='submit' variant='primary' onClick={function(e){
                        props.handleGoalData(e, enteredGoal)
                        console.log("onClick")
                        console.log(enteredGoal)
                        }}>
                            Start Goal
                    </Button>
                    <br />
                    <Button classID="finishGoalId" className="finishGoal" type='delete' onClick={function(e){
                        props.handleGoalFinish(e, enteredGoal)
                        console.log("onClickFinish")
                        console.log(enteredGoal)
                        }}>
                            Finish Goal
                    </Button>
                </div>
            </Form> 
        </div>
    </aside>
    )
}

export default Profile
