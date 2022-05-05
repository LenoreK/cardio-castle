import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import Profile from "./Components/Profile";
import TopBar from './Components/TopBar';
import {useEffect, useState,Fragment } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import Register from './Components/Register';

function App(props) {
  let [enteredUsers, setEnteredUsers] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [userData, setUserData] = useState({})
  let [goalData, setGoalData] = useState('')
  let [isNewGoal, setIsNewGoal] = useState(false)

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
				if (resData.id != null) {
          console.log("HERE WE ARE")
          console.log(resData)
          console.log(typeof resData)
					setUserData(resData)
				} else {
          console.log("are we here?")
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

  const handleNewUser = (e, newUserName) => {
		e.preventDefault()
    console.log(newUserName)
		if(newUserName) {      
      console.log(`handleNewUser - ${newUserName}`)
      
      var defaultPassword = newUserName.charAt(1) + newUserName.length + newUserName.charAt(newUserName.length - 1) + '*'
      console.log(`handleNewUserPw - ${defaultPassword}`)

			let fetchData = async () => {
        let fetchString = API_URL
        console.log(fetchString)				
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'user_name':newUserName,'password':defaultPassword,'last_modified':'05/05/2022','last_modified_by':'WebSite'})
        })
        console.log(response)
        setMessage(response)				
			}
			fetchData()
		}
	}

  const handleGoalData = (e, goalName) => {
    let userID = userData.id
    const API_Goal = 'https://cardio-castle-foundation.herokuapp.com/goals/'
		e.preventDefault()
    if(goalName) {
      console.log(' GOAL NAME IS POPULATED ')
      /* GET GOALS AND SEE IF THE USER ALEADY HAS A GOAL */
      const fetchAllGoalData = async () => {
        let fetchString = API_Goal
        let response = await fetch(fetchString,{
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
        let resData = await response.json();

        let userHasGoal = false;

        for(let i = 0;i<resData.length;i++)
        {
          console.log(resData[i])
          if(resData[i] != null && resData[i].id != null)
          {
             if(resData[i].user_account_id == userID && resData[i].goal_status == 1)
             {
                userHasGoal = true;
             }
          }
        }

        if (userHasGoal) {
          console.log("You already have a goal finish it!")
          setMessage("You already have a goal finish it!")
        } else {    
        
          /* GET GOAL */
          console.log(' GET GOAL ')
          console.log(goalName)
          
          const fetchExistingGoalData = async () => {
            let fetchString = API_Goal + goalName + "?userId=" + userID
            let response = await fetch(fetchString,{
            crossDomain:true,
            method: 'GET',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
            let resData = await response.json();
            if (resData != null && resData.id != null) {
              console.log(' GOAL NAME EXISTS ')
              setGoalData(resData)
              console.log(resData)
            } else {
              console.log(' GOAL NAME NEW ')
              setIsNewGoal(true);
              console.log(' POST GOAL ')
              console.log(goalName)
              console.log(`handleNewGoal - ${goalName}`)
              /* POST / CREATE GOAL */
              let fetchNewGoalData = async () => {
              let fetchString = API_Goal
              console.log(fetchString)				
              let response = await fetch(fetchString,{
                crossDomain:true,
                method: 'POST',
                headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
                body: JSON.stringify({"goal_name":goalName,"goal_status":1,"last_modified":"05/01/2022","last_modified_by":"Website","user_account_id":userID})
                })
                console.log(response)
                setMessage(response)
                const fetchNewGoalDataInfo = async () => {
                  let fetchString = API_Goal + goalName + "?userId=" + userID
                  let response = await fetch(fetchString,{
                    crossDomain:true,
                    method: 'GET',
                    headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
                  let resData = await response.json();
                  if (resData != null && resData.id != null) {
                    setGoalData(resData)
                    console.log(resData)
                  } else {
                    setMessage('No Goal Found')
                  }
                }
                fetchNewGoalDataInfo()
              }
              fetchNewGoalData()	
            }
          }
          fetchExistingGoalData()            
        }
      }
      fetchAllGoalData();      
    }   
  }
  // let tbd = JSON.stringify(userData)

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
              <Fragment><LoginForm handleEnteredUser={handleEnteredUser} handleNewUser={handleNewUser} /></Fragment>
              } />
            <Route path="/Profile" element={<Profile handleGoalData={handleGoalData}/>} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
