import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

function TopBar() {
    return (
        <div className='title'>
            <Row className="cardioCastle">
            <h1>Cardio Castle</h1>
            </Row>
            <Row className="logout">
                <Button><Link className='link' to="/">Logout</Link></Button>
            </Row>
        </div>
    )
}

export default TopBar