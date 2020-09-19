import React from 'react'

import UserMenu from './UserMenu'
import GenresSelecting from '../Common/GenresSelecting'
import FavMoviesPanel from './FavMoviesPanel'


function MainPage({ history }) {

    const currentUser = window.localStorage.getItem('currentUser')

    if (!currentUser) {
        history.push('/login')
    }

    const [ genres, setGenres ] = React.useState(
        JSON.parse(window.localStorage.getItem('genres')) || {}
    )

    const saveGenres = (newGenres) => {
        window.localStorage.setItem('genres', JSON.stringify(newGenres))

        setGenres({ ...newGenres })
    }

    const movies = JSON.parse(window.localStorage.getItem('movies')) || {}

    const filteredMovies = (
        Object.keys(movies).filter(
            movieId => Object.keys(genres).every(
                genreId => !genres[genreId].active || movies[movieId].genre_ids.includes(Number(genreId))
            )
        ).map(movieId => movies[movieId])
    )

    return (
        <div>
            <UserMenu/>
            <GenresSelecting genres={ genres } setGenres={ saveGenres }/>
            <FavMoviesPanel movies={ filteredMovies }/>
        </div>
    )
}

export default MainPage
