import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
import TopBar from './Components/TopBar';
import {useEffect, useState } from 'react';

function App(props) {
  let [enteredUsers, setEnteredUsers] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

  const API_URL = 'https://cardio-castle-foundation.herokuapp.com/users/'

  useEffect(() => {
    console.log("useEffect - API")
		if(enteredUsers) {
      console.log(`useEffect - ${enteredUsers}`)
			const fetchData = async () => {
        let fetchString = API_URL + enteredUsers
        console.log(fetchString)				
        let response = await fetch(fetchString,{
          mode: "no-cors",
          method: "GET",
          headers: {
            "Accept": "application/json"
        }})
        console.log(response)
        console.log(`fetch - ${response}`)
				let resData = await response.body.json().then((response) => {
          console.log(response.body);
          return dispatch({
            type: "GET_CALL",
            response: response.body
          });
        })
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
            <Route path="/" element={<LoginForm handleEnteredUser={handleEnteredUser} />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
