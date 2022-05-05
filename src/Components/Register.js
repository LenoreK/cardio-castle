import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Register(props) {
    let [enteredUser, setEnteredUser] = useState('')
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Register</h2>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Create Username:</Form.Label>
                <Form.Control type='text' placeholder="Enter username"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setEnteredUser(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button type="submit" variant="primary" onClick={function(e){
                    props.handleNewUser(e, enteredUser)
                    console.log("onClick")
                    console.log(enteredUser)
                    }}><Link className="link" to="/Profile">Submit</Link>
            </Button>
        </div>
    </Form>
    )
}

export default Register