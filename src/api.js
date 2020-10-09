import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const getGenres = (language = 'en') => {
  return api({
    method: 'GET',
    url: '/genres',
    params: {
      language,
    },
  }).then(
    (response) => {
      let genres = {}
      response.data.genres.map(
        (genre) => (genres[genre.id] = { name: genre.name })
      )
      return genres
    },
    (error) => ({})
  )
}

export const getMovies = ({ genres, year, rate, language }) =>
  api({
    method: 'GET',
    url: '/movies',
    params: {
      with_release_dates: 1,
      with_genres: genres,
      'vote_average.gte': rate[0],
      'vote_average.lte': rate[1],
      language,
      year,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  })
