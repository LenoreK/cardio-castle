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
                        Hello
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