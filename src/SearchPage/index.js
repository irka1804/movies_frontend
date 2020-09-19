import React from 'react'
import { useTranslation } from 'react-i18next'

import { getMovies } from '../api'
import ViewSwitcher from '../Common/ViewSwitcher'
import ListMovie from '../Common/VideoViewType/ListMovie'
import BlockMovie from '../Common/VideoViewType/BlockMovie'
import SubmitButton from '../Common/SubmitButton'


function SearchPage() {

    const { t, i18n } = useTranslation()

    const [movies, setMovies] = React.useState([])
    const [viewType, setViewType] = React.useState('list')
    const [favMovies, setFavMovies] = React.useState(
        (JSON.parse(window.localStorage.getItem('movies')) || {})
    )

    React.useEffect(() => {
        getMovies({ language: i18n.language })
        .then(
            response => {
                setMovies(response.data.results)
            },
            error => {
                setMovies([])
                console.log(error)
            }
        )
    }, [i18n.language])

    const saveMovie = (movie) => {
        const favMovies = JSON.parse(window.localStorage.getItem('movies')) || {}

        let newFavMovies = favMovies

        newFavMovies[movie.id] = movie

        window.localStorage.setItem('movies', JSON.stringify(newFavMovies))

        setFavMovies(newFavMovies)
    }

    const saveButton = (movie) => (
        <SubmitButton 
            text={ t('save') } 
            onClick={ (e) => { e.preventDefault(); saveMovie(movie) } }
            disabled={ movie.id in favMovies }
        />
    )

    return (
        <div>
            <ViewSwitcher setView={ setViewType }/>

            { viewType === 'list' ?
                <ol className='list-decimal divide-y'>
                    { movies.map((movie) => 
                        <li key={ movie.id } className='flex'>
                            <ListMovie movie={ movie }>
                                { saveButton(movie) }
                            </ListMovie>
                        </li>
                    )}
                </ol>
                : <div className='grid grid-cols-4 gap-10 m-10'>
                    { movies.map((movie) =>
                        <BlockMovie
                            key={ movie.id }
                            movie={ movie }
                            bottom={ saveButton(movie) }
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default SearchPage
