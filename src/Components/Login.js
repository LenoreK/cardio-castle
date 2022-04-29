import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Login() {
    return (
        <div>
          <form className='form'>
              <label>
                  Username:
                  <input type="text"/>
                </label>
                <label>
                    Password:
                    <input type="password"/>
                </label>
                <div className="button">
                    <ul>
                        <li>
                            <Button variant='primary'>
                            <Link className='link' to="/profile">
                                Login
                            </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default Login