import React from 'react'
import { useTranslation } from 'react-i18next'


function Greeting({ username }) {

    const { t } = useTranslation()

    return (
        <div className='flex items-center'>
            { t('mainPage.greeting') }, { username }
        </div>
    )
}

export default Greeting
