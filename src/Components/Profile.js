import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'
import WeeklyRecord from './WeeklyRecords.js'

function Profile() {
    return (
        <body>
            <div className='main-container'>
                <TopBar />
                <Aside />
                <main>
                    <WeeklyRecord />
                    <div className="three-row">
                        {/* Need to add days that switch */}
                        <h1>Day 2</h1>
                    </div>
                </main>
        <footer>
            <small>&copy; Copyright 2022 Cardio Castle</small>
        </footer>
    </div>
</body>
    )
}

export default Profile