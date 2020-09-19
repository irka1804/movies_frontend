import React from 'react'
import { useTranslation } from 'react-i18next'
import { withRouter } from "react-router-dom"

import SubmitButton from '../Common/SubmitButton'
import ViewSwitcher from '../Common/ViewSwitcher'
import ListMovie from '../Common/VideoViewType/ListMovie'
import BlockMovie from '../Common/VideoViewType/BlockMovie'


function FavMoviesPanel({ history, movies, setMovies }) {

    const { t } = useTranslation()

    const [ viewType, setViewType ] = React.useState('list')

    return (
        <div>
            <div className='flex mt-8 justify-end'> 
                <div className='mr-auto'>
                    { t('mainPage.yourFavoriteMovies') }
                </div>

                <SubmitButton text={ t('mainPage.addMovie') } onClick={ () => history.push('/search') }/>

                <ViewSwitcher setView={ setViewType }/>
            </div>

            { viewType === 'list' ?
                <ol className='list-decimal divide-y'>
                    { Object.keys(movies).map((movieId) => 
                        <li key={ movieId } className='flex'>
                            <ListMovie movie={ movies[movieId] }>
                            </ListMovie>
                        </li>
                    )}
                </ol>
                : <div className='grid grid-cols-4 gap-10 m-10'>
                    { Object.keys(movies).map((movieId) =>
                        <div className=''>
                            <BlockMovie
                                movie={ movies[movieId] }
                            />
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default withRouter(FavMoviesPanel)
