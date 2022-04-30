import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';

function LoginForm() {
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button type='submit' variant='primary'>
                <Link className='link' to="/Profile">Login</Link>
            </Button>
        </div>
    </Form>
    )
}

export default LoginForm