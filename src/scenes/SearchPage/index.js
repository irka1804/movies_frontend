import React, { useState, useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'

import { getMovies, getGenres } from '../../api'
import SearchMoviesPanel from './Components/SearchMoviesPanel'
import ItemsSelecting from '../../Components/ItemsSelecting'

function SearchPage() {
  const { t, i18n } = useTranslation()

  const [movies, setMovies] = useState([])
  const [rating, setRating] = useState([0, 10])
  const [year, setYear] = useState()

  const [genres, setGenres] = useReducer((state, action) => {
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
  }, {})

  useEffect(() => {
    getGenres(i18n.language).then((response) =>
      setGenres({ type: 'updateNames', names: { ...response } })
    )
  }, [i18n.language])

  useEffect(() => {
    getMovies({
      language: i18n.language,
      genres: Object.keys(genres).filter((genreId) => genres[genreId].active),
      rate: rating,
      year,
    }).then(
      (response) => {
        setMovies(response.data.results)
      },
      (error) => {
        setMovies([])
      }
    )
  }, [i18n.language, genres, rating, year])

  const changeRating = (newRating) => {
    if (
      (newRating[0] && newRating[0] !== rating[0]) ||
      (newRating[1] && newRating[1] !== rating[1])
    ) {
      setRating((oldRating) => [...newRating])
    }
  }

  const Range = createSliderWithTooltip(Slider.Range)

  const options = Array.from(
    { length: new Date().getFullYear() - 1880 + 1 },
    (_, index) => ({ label: index + 1880, value: index + 1880 })
  ).reverse()

  return (
    <div>
      <ItemsSelecting
        items={genres}
        setClick={(genreId) => setGenres({ type: 'click', genreId })}
      />
      <div className="flex items-center max-w-lg m-4">
        <div> {t('rating')}: </div>
        <div className="min-w-full p-4">
          <Range
            min={0}
            max={10}
            step={0.1}
            allowCross={false}
            defaultValue={rating}
            marks={{
              ...Array.from(new Array(11), (val, index) => ({
                label: [index],
              })),
            }}
            onAfterChange={(newRating) => changeRating(newRating)}
            handleStyle={[{ border: 'solid 2px #b794f4' }]}
            trackStyle={[{ backgroundColor: '#b794f4' }]}
            activeDotStyle={{ border: 'solid 2px #b794f4' }}
          />
        </div>
      </div>

      <div className="flex items-center m-4">
        <div> {t('chooseYear')}: </div>
        <Select
          className="w-32 m-4"
          placeholder="Any year"
          options={options}
          isClearable={true}
          onChange={(option) => setYear(!option || option.value)}
        />
      </div>

      <SearchMoviesPanel movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default SearchPage
