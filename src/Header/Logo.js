import React from 'react'
import { useTranslation } from 'react-i18next';


function Logo() {
    const { t } = useTranslation()

    return (
        <div className='text-lg w-full'>
            { t('header.site-name') }
        </div>
    )
}

export default Logo
