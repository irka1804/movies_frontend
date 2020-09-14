import React from 'react'

import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'


function Header() {
    return (
        <div className='flex bg-purple-300 rounded max-w-lg justify-items-center mx-auto p-3'>
            <Logo/>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header
