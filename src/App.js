import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
import TopBar from './Components/TopBar';
import {useEffect, useState,Fragment } from 'react';

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
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
        console.log(response)
        console.log(`fetch - ${response}`)
				let resData = await response.json();
        console.log(resData)
				if (resData.length > 0) {
          console.log("HERE WE ARE")
          console.log(resData)
					setData(resData)
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
            <Route path="/" element={
              <Fragment><LoginForm handleEnteredUser={handleEnteredUser} /></Fragment>
              } />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  
  );
}

export default App;
