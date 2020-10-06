import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import className from 'classnames'

import SubmitButton from '../../../../Components/SubmitButton'
import ViewSwitcher from '../../../../Components/ViewSwitcher'
import ListMovie from '../../../../Components/VideoViewType/ListMovie'
import BlockMovie from '../../../../Components/VideoViewType/BlockMovie'
import WatchedButton from '../../../../Components/WatchedButton'
import DeleteButton from '../../../../Components/DeleteButton'

function FavMoviesPanel({ history, movies, onWatch, onDelete }) {
  const { t } = useTranslation()

  const [viewType, setViewType] = useState('list')

  return (
    <div>
      <div className="flex m-4 mt-8 justify-end items-center">
        <div className="mr-auto">{t('mainPage.yourFavoriteMovies')}</div>

        <SubmitButton
          text={t('mainPage.addMovie')}
          onClick={() => history.push('/search')}
        />

        <ViewSwitcher className="ml-4" setView={setViewType} />
      </div>

      {viewType === 'list' ? (
        <ol className="list-decimal divide-y">
          {Object.keys(movies).map((movieId) => (
            <li
              key={movieId}
              className={className({
                disabled: movies[movieId].watched,
              })}
            >
              <ListMovie movie={movies[movieId]}>
                <WatchedButton
                  className="ml-auto"
                  onClick={() => onWatch(movieId)}
                />
                <DeleteButton onClick={() => onDelete(movieId)} />
              </ListMovie>
            </li>
          ))}
        </ol>
      ) : (
        <div className="flex grid gap-y-8 justify-around">
          {Object.keys(movies).map((movieId) => (
            <BlockMovie
              key={movieId}
              className={className({
                disabled: movies[movieId].watched,
              })}
              movie={movies[movieId]}
              right={
                <div>
                  <WatchedButton onClick={() => onWatch(movieId)} />
                  <DeleteButton onClick={() => onDelete(movieId)} />
                </div>
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default withRouter(FavMoviesPanel)
