import React, { useState, useReducer, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { getGenres } from '../../api'
import UserMenu from './Components/UserMenu'
import ItemsSelecting from '../../Components/ItemsSelecting'
import FavMoviesPanel from './Components/FavMoviesPanel'

function MainPage({ history }) {
  const currentUser = window.localStorage.getItem('currentUser')
  const { t, i18n } = useTranslation()

  if (!currentUser) {
    history.push('/login')
  }

  const [genres, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'updateNames': {
        let newState = { ...state }
        Object.keys(action.names).map(
          (id) =>
            (newState[id] = {
              ...state[id],
              name: action.names[id].name,
            })
        )
        return newState
      }
      case 'click':
        return {
          ...state,
          [action.genreId]: {
            ...state[action.genreId],
            active: !state[action.genreId].active,
          },
        }
      default:
        return state
    }
  }, JSON.parse(window.localStorage.getItem('genres')) || {})

  useEffect(() => {
    getGenres(i18n.language).then((apiGenres) =>
      dispatch({ type: 'updateNames', names: apiGenres })
    )
  }, [i18n.language])

  useEffect(() => {
    window.localStorage.setItem('genres', JSON.stringify(genres))
  }, [genres])

  const [movies, setMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies')) || {}
  )

  const saveMovies = (newMovies) => {
    window.localStorage.setItem('movies', JSON.stringify(newMovies))
    setMovies(newMovies)
  }

  const filteredMovies = Object.keys(movies)
    .filter((movieId) =>
      Object.keys(genres).every(
        (genreId) =>
          !genres[genreId].active ||
          movies[movieId].genre_ids.includes(Number(genreId))
      )
    )
    .reduce((obj, movieId) => ((obj[movieId] = movies[movieId]), obj), {})

  const onWatch = (movieId) => {
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
      <UserMenu />
      <ItemsSelecting
        label={t('chooseGenres')}
        items={genres}
        setClick={(genreId) => dispatch({ type: 'click', genreId })}
      />
      <FavMoviesPanel
        movies={filteredMovies}
        onWatch={onWatch}
        onDelete={onDelete}
      />
    </div>
  )
}

export default MainPage
