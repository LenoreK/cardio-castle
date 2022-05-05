import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'
import WeeklyRecord from './WeeklyRecords.js'
import DailyComponent from './DailyComponent'

function Profile(props) {
    return (
        <div className='main-container'>
            <TopBar />
            <Aside handleGoalData={props.handleGoalData} />
            <main>
                <WeeklyRecord />
                <DailyComponent />
            </main>
            <footer>
                <small>&copy; Copyright 2022 Cardio Castle</small>
            </footer>
        </div>
    )
}

export default Profile