import React from 'react'
import { useTranslation } from 'react-i18next'

import { getGenres } from '../../api'
import GenreTag from './GenreTag'


function GenresSelecting() {

    const { t, i18n } = useTranslation()

    const [genres, setGenres] = React.useState({})

    React.useEffect(() => {
        getGenres(i18n.language)
        .then(
            response => {
                setGenres(response.data.genres)
            },
            error => {
                setGenres({})
                console.log(error)
            }
        )
    }, [i18n.language])

    return (
        <div>
            <div>
                { t('mainPage.chooseGenres') }:
            </div>
            <div>
                { genres.length === 0 ? 'null' :
                    Object.keys(genres).map((g) => <GenreTag key={ genres[g].id } { ...genres[g] } />)
                } 
            </div>
        </div>
    )
}

export default GenresSelecting
