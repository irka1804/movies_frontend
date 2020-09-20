import React from 'react'
import { useTranslation } from 'react-i18next'
import { withRouter } from "react-router-dom"

import SubmitButton from '../Common/SubmitButton'
import ViewSwitcher from '../Common/ViewSwitcher'
import ListMovie from '../Common/VideoViewType/ListMovie'
import BlockMovie from '../Common/VideoViewType/BlockMovie'
import WatchedButton from '../Common/WatchedButton'
import DeleteButton from '../Common/DeleteButton'


function FavMoviesPanel({ history, movies, onWatch, onDelete }) {

    const { t } = useTranslation()

    const [ viewType, setViewType ] = React.useState('list')
    const [ watched, setWatched ] = React.useState({})

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
                    { Object.keys(movies).map(movieId => 
                        <li key={ movieId } className={ `${movies[movieId].watched ? 'bg-gray-300' : ''} flex` }>
                            <ListMovie movie={ movies[movieId] }>
                                <WatchedButton onClick = { () => onWatch(movieId) }/>
                                <DeleteButton onClick = { () => onDelete(movieId) }/>
                            </ListMovie>
                        </li>
                    )}
                </ol>
                : <div className='grid grid-cols-4 gap-10 m-10'>
                    { Object.keys(movies).map((movieId) =>
                        <div key={ movieId } className=''>
                            <BlockMovie
                                movie={ movies[movieId] }
                                right={ 
                                    <div>
                                        <WatchedButton onClick = { () => onWatch(movieId) }/>
                                        <DeleteButton onClick = { () => onDelete(movieId) }/>
                                    </div>
                                }
                            />
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default withRouter(FavMoviesPanel)
