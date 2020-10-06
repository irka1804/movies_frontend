import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Logo() {
  const { t } = useTranslation()

  return (
    <Link className="text-lg w-full" to="/">
      {t('header.site-name')}
    </Link>
  )
}

export default Logo
