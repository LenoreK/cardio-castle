import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

function TopBar() {
    return (
        <div className='title'>
            <h1 className="cardioCastle">Cardio Castle</h1>
            <Button className="logout"><Link className='link' to="/">Logout</Link></Button>
        </div>
    )
}

export default TopBar