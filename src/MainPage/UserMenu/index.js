import React from 'react'

import Greeting from './Greeting'
import Logout from './Logout'


function UserMenu() {

    const username = window.localStorage.getItem('currentUser')

    return (
        <div className='flex mx-auto align-items-center justify-end mt-4'>
            <Greeting username={ username }/>
            <Logout/>
        </div>
    )
}

export default UserMenu
