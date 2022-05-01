import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'

function Profile() {
    return (
        <body>
            <div className='main-container'>
                <TopBar />
                <Aside />
                <main>
                    <div className='one-row'>
                        <div>Week 1</div>
                        <div>Week 2</div>
                        <div>Week 3</div>
                        <div>Week 4</div>
                    </div>
                    <div className='two-row'>Row 2</div>
                    <div className='three-row'>Row 3</div>
                </main>
        <footer>
            <small>&copy; Copyright 2022 Cardio Castle</small>
        </footer>
    </div>
</body>
    )
}

export default Profile