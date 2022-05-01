import React from 'react';

import Aside from './Aside.js'

function Profile() {
    return (
        <body>
            <div className='main-container'>
                <h1 className='title'>Cardio Castle</h1>
                <Aside />
                <main>
                    <div className='one-row'>Row 1</div>
                    <div className='two-row'>Row 2</div>
                    <div className='three-row'>Row 3</div>
                </main>
        <footer>
            Footer
        </footer>
    </div>
</body>
    )
}

export default Profile