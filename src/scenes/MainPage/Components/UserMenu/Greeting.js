import React from 'react'
import { useTranslation } from 'react-i18next'

function Greeting({ username }) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center mx-4">
      {t('mainPage.greeting')}, {username}
    </div>
  )
}

export default Greeting
