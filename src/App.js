import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
import TopBar from './Components/TopBar';
import {useEffect, useState } from 'react';

function App() {
  let [enteredUsers, setEnteredUsers] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

  const API_URL = 'http://127.0.0.1:3000/users/'

  useEffect(() => {
    console.log("useEffect - API")
		if(enteredUsers) {
      console.log(`useEffect - ${enteredUsers}`)
			const fetchData = async () => {
        console.log(`fetchData - ${enteredUsers}`)
				document.title = `${enteredUsers} Welcome`
        console.log(`fetch - ${API_URL + enteredUsers}`)
				let response = await fetch(API_URL + enteredUsers,{mode:'no-cors'})
        console.log(`fetch - ${response}`)
				let resData = await response.json();
        console.log(`resData - ${resData}`)
				if (resData.results.length > 0) {
          console.log("HERE WE ARE")
          console.log(resData.results)
					setData(resData.results)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [enteredUsers])

  const handleEnteredUser = (e, userName) => {
		e.preventDefault()
    console.log(userName)
		setEnteredUsers(userName)
	}

  // const adminUser = {
  //   username: "admin",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({username: "", paswword: ""});
  // const [error, setError] = useState("");

  return (

    <div className='body'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm  handleEnteredUser = {handleEnteredUser}/>} />
            <Route path="/Profile" element={<Profile />} />
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
