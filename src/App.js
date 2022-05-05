import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
import TopBar from './Components/TopBar';
import {useEffect, useState,Fragment } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

function App(props) {
  let [enteredUsers, setEnteredUsers] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [userData, setUserData] = useState({})
  let [goalData, setGoalData] = useState('')
  let [goalDay, setGoalDay] = useState('')
  let [weekData, setWeekData] = useState('')

  const API_URL = 'https://cardio-castle-foundation.herokuapp.com/users/'

  // Fetching Entered User
  useEffect(() => {
		if(enteredUsers) {
      console.log(`useEffect - ${enteredUsers}`)
			const fetchData = async () => {
        let fetchString = API_URL + enteredUsers		
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
				let resData = await response.json();
				if (resData.id != null) {
					setUserData(resData)
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

  // Fetching Goal Data
  const handleGoalData = (e, goalData) => {
    const API_Goal = 'https://cardio-castle-foundation.herokuapp.com/goals/'
		e.preventDefault()
    console.log(goalData)
		setGoalData(goalData)
    let userID = userData.id
    if(goalData) {
			const fetchData = async () => {
        let fetchString = API_Goal + goalData + "?userId=" + userID
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
				let resData = await response.json();
				if (resData.id != null) {
					setGoalData(resData)
          console.log(resData)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
    }
	}

  //handle weekly data
  const handleWeekData = (e, weekData) => {
    const API_Week = 'https://cardio-castle-foundation.herokuapp.com/'
		e.preventDefault()
    console.log(weekData)
		setGoalData(weekData)
    let userID = userData.id
    if(weekData) {
			const fetchData = async () => {
        let fetchString = API_Week + weekData + "?userId=" + userID
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
				let resData = await response.json();
				if (resData.id != null) {
					setWeekData(resData)
          console.log(resData)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
    }
	}

  // Fetching Goal_Day Data
  const handleGoalDayData = (e, goalDay) => {
    const API_Goal_Day = 'https://cardio-castle-foundation.herokuapp.com/Goal_Day/'
		e.preventDefault()
    console.log(goalDay)
		setGoalData(goalDay)
    let userID = userData.id
    if(goalDay) {
			const fetchData = async () => {
        let fetchString = API_Goal_Day + goalDay + "?userId=" + userID
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
				let resData = await response.json();
				if (resData.id != null) {
					setGoalDay(resData)
          console.log(resData)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
    }
	}

  return (

    <div className='body'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <Fragment><LoginForm handleEnteredUser={handleEnteredUser} /></Fragment>
              } />
            <Route path="/Profile" element={<Profile handleGoalData={handleGoalData} handleGoalDayData={handleGoalDayData} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
