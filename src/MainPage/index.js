import React from 'react'

import UserMenu from './UserMenu'
import GenresSelecting from './GenresSelecting'
import FavMoviesControl from './FavMoviesControl'


function MainPage({ history }) {

    const currentUser = window.localStorage.getItem('currentUser')

    if (!currentUser) {
        history.push('/login')
    }

    return (
        <div>
            <UserMenu/>
            <GenresSelecting/>
            <FavMoviesControl/>
        </div>
    )
}

export default MainPage
