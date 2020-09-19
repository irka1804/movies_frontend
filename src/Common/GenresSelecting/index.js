import React from 'react'
import { useTranslation } from 'react-i18next'

import { getGenres } from '../../api'
import GenreTag from './GenreTag'


function GenresSelecting({ genres, setGenres }) {

    const { t, i18n } = useTranslation()

    const memoSetGenres = React.useCallback(setGenres, [])

    React.useEffect(() => {
        let newGenres = {}
        getGenres(i18n.language)
        .then(
            response => {
                response.data.genres.map(
                    (g) => newGenres[g.id] = { ...genres[g.id], 'name': g.name }
                )
                memoSetGenres({ ...newGenres })
            },
            error => {
                memoSetGenres({})
                console.log(error)
            }
        )
    }, [ i18n.language, memoSetGenres ])

    const onClick = (genreId) => {
        let newGenres = genres
        newGenres[genreId].active = !newGenres[genreId].active
        memoSetGenres(newGenres)
    }

    return (
        <div>
            <div>
                { t('mainPage.chooseGenres') }:
            </div>
            <div>
                { genres.length === 0 ? 'null' :
                    Object.keys(genres).map((g) => 
                        <GenreTag 
                            key={ g }
                            onClick={ (e) => { e.preventDefault(); onClick(g) }} 
                            { ...genres[g] } 
                        />
                    )
                } 
            </div>
        </div>
    )
}

export default GenresSelecting
