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
        setGenres(newGenres)
    }

    const [ movies, setMovies ] = React.useState(JSON.parse(window.localStorage.getItem('movies')) || {})

    const saveMovies = (newMovies) => {
        window.localStorage.setItem('movies', JSON.stringify(newMovies))
        setMovies(newMovies)
    }

    const filteredMovies = (
        Object.keys(movies).filter(
            movieId => Object.keys(genres).every(
                genreId => !genres[genreId].active || movies[movieId].genre_ids.includes(Number(genreId))
            )
        ).reduce((obj, movieId) => (obj[movieId] = movies[movieId], obj), {})
    )

    const onWatch = (movieId) => {
        console.log(movieId)
        let newMovies = { ...movies }
        newMovies[movieId].watched = !newMovies[movieId].watched
        saveMovies(newMovies)
    }

    const onDelete = (movieId) => {
        let newMovies = { ...movies }
        delete newMovies[movieId]
        saveMovies(newMovies)
    }

    return (
        <div>
            <UserMenu/>
            <GenresSelecting genres={ genres } setGenres={ saveGenres }/>
            <FavMoviesPanel movies={ filteredMovies } onWatch={ onWatch } onDelete={ onDelete }/>
        </div>
    )
}

export default MainPage
