import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getGenres = (language) => api({
    method: 'GET',
    url: '/genres',
    params: {
        language
    }
})


export const getMovies = ({ genres, release, min_rate }) => api({
    method: 'GET',
    url: '/movies',
    params: {
        'with_genres': genres,
        'release_date.gte': release,
        'vote_average.gte': min_rate,
    }
})
