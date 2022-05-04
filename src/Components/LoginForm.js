import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function LoginForm(props) {
    let [enteredUser, setEnteredUser] = useState('')
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' placeholder="Enter username"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setEnteredUser(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button type='submit' variant='primary'>
                <Link className='link' to="/Profile">Login</Link>
            </Button>
            {/* <Button type="submit" variant="primary" onClick={function(e){
                    props.handleEnteredUser(e, enteredUser)
                    console.log("onClick")
                    console.log(enteredUser)
                    }}>
                Test
            </Button> */}
        </div>
    </Form>
    )
}

export default LoginForm