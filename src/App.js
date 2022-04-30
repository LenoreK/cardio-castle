import './App.css';
import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import TopBar from './Components/TopBar';
import { useState } from 'react';


function App() {

  const adminUser = {
    username: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({username: "", paswword: ""});
  const [error, setError] = useState("");

  return (
    <div className='main'>
      <Router>
        <header>
          <div className="topBar">
            <ul>
              <li>
                <Link to="/Profile"></Link>
              </li>
            </ul>
          </div>
        </header>

        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*
<Router>
        <header>
          <div className="topBar">
            <ul>
              <li>
                <Link to="/profile"></Link>
              </li>
            </ul>
          </div>
        </header>

        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
*/
