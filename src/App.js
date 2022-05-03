import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
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

    <div className='body'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (Araz)
        </a>
      </header>

    </div>
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
