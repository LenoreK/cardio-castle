import './App.css';
import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import TopBar from './Components/TopBar';


function App() {

  return (
    <div className='main'>
      <Router>
        <header>
          <div className="topBar">
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
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
