import React from 'react'
import { useTranslation } from 'react-i18next';


function LanguageSwitcher () {

    const { i18n } = useTranslation()

    const changeLanguage = () => {
        const currentLng = i18n.language
        const otherLng = currentLng === 'en' ? 'ru' : 'en'

        i18n.changeLanguage(otherLng)
    }

    return (
        <button 
            className='ml-auto bg-purple-400 px-2 rounded focus:outline-none'
            onClick={ changeLanguage }
        >
            { i18n.language }
        </button>
    )
}

export default LanguageSwitcher
