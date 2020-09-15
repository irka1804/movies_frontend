import React from 'react'
import { useTranslation } from 'react-i18next'
import { withRouter } from "react-router-dom"

import SubmitButton from '../Common/SubmitButton'
import ViewSwitcher from './ViewSwitcher'


function FavMoviesControl({ history }) {

    const { t } = useTranslation()

    return (
        <div className='flex mt-8 justify-end'> 
            <div className='mr-auto'>
                { t('mainPage.yourFavoriteMovies') }
            </div>

            <SubmitButton text={ t('mainPage.addMovie') } onClick={ () => history.push('/search') }/>

            <ViewSwitcher/>
        </div>
    )
}

export default withRouter(FavMoviesControl)
