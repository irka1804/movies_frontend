import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ViewSwitcher from '../../../Components/ViewSwitcher'
import ListMovie from '../../../Components/VideoViewType/ListMovie'
import BlockMovie from '../../../Components/VideoViewType/BlockMovie'
import SubmitButton from '../../../Components/SubmitButton'

function SearchMoviesPanel({ label = '', movies, setMovies }) {
  const { t } = useTranslation()

  const [viewType, setViewType] = useState('list')
  const [favMovies, setFavMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies')) || {}
  )

  const saveMovie = (movie) => {
    const favMovies = JSON.parse(window.localStorage.getItem('movies')) || {}

    let newFavMovies = favMovies

    newFavMovies[movie.id] = movie

    window.localStorage.setItem('movies', JSON.stringify(newFavMovies))

    setFavMovies(newFavMovies)
  }

  const saveButton = (movie) => (
    <SubmitButton
      className="ml-auto"
      text={t('save')}
      onClick={(e) => {
        e.preventDefault()
        saveMovie(movie)
      }}
      disabled={movie.id in favMovies}
    />
  )

  return (
    <div>
      <div className="flex justify-end">
        <div className="mr-auto"> {label} </div>
        <ViewSwitcher setView={setViewType} />
      </div>

      {viewType === 'list' ? (
        <ol className="list-decimal divide-y">
          {movies.map((movie) => (
            <li key={movie.id} className="">
              <ListMovie movie={movie}>{saveButton(movie)}</ListMovie>
            </li>
          ))}
        </ol>
      ) : (
        <div className="flex grid gap-y-8 justify-around">
          {movies.map((movie) => (
            <BlockMovie
              key={movie.id}
              movie={movie}
              bottom={saveButton(movie)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchMoviesPanel
