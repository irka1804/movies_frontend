import React from 'react'

import i18n from './i18n'
import { useTranslation } from 'react-i18next';

function Logo() {
    const { t } = useTranslation()

    return (
        <div className='text-lg w-full'>
            { t('header.site-name') }
        </div>
    )
}

class LanguageSwitcher extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            language: i18n.language,
        }

        this.changeLanguage = this.changeLanguage.bind(this)
    }

    changeLanguage() {
        const currentLng = i18n.language
        const otherLng = currentLng === 'en' ? 'ru' : 'en'

        i18n.changeLanguage(otherLng)
        this.setState({ 'language': otherLng })
    }

    render() {
        return (
            <button 
                className='ml-auto bg-purple-400 px-2 rounded focus:outline-none'
                onClick={ this.changeLanguage }
            >
                { this.state.language }
            </button>
        )
    }
}

function Header() {
    return (
        <div className='flex bg-purple-300 rounded max-w-lg justify-items-center mx-auto p-3'>
            <Logo/>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header
