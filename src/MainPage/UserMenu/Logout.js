import React from 'react'
import { useTranslation } from 'react-i18next'
import { withRouter } from "react-router-dom"

import SubmitButton from '../../Common/SubmitButton'


function Logout({ history }) {

    const logout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('currentUser')
        history.push('/login')
    }

    const { t } = useTranslation()

    return (
        <SubmitButton text={ t('mainPage.logout') } onClick={ logout }/>
    )
}

export default withRouter(Logout)
