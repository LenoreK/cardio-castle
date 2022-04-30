import './App.css';
import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import TopBar from './Components/TopBar';
import { useState } from 'react';


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout")
  }

  return (
    <div className='main'>
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
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
