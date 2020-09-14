import React from 'react'
import {Redirect} from 'react-router-dom';
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'
import { FORM_ERROR } from 'final-form'

import Error from './Error'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'
import Label from './Label'


function LoginPage () {

    const onSubmit = ({login, password}) => {
        const users = JSON.parse(window.localStorage.getItem('users'))
        const user = users.find(u => u.login === login)
        if (!user) return { [FORM_ERROR]: 'loginPage.errors.unknownUser' }
        if (user.password !== password) return { [FORM_ERROR]: 'loginPage.errors.wrongPassword' }

        window.localStorage.setItem('currentUser', login)
    }

    const { t } = useTranslation()

    return (
        <Form
            onSubmit={ onSubmit }
            render={ ({ handleSubmit, submitError }) => (
                <form 
                    onSubmit={ handleSubmit } 
                    className='w-full max-w-lg bg-white shadow-md rounded px-8 py-6 mx-auto'
                >
                    <div className='flex my-4'>
                        <Label text={ t('loginPage.username') }/>
                        <EmailInput/>
                    </div>

                    <div className='flex'>
                        <Label text={ t('loginPage.password') }/>
                        <PasswordInput/>
                    </div>

                    <Error error={ t(submitError) }/>
                    <SubmitButton text={ t('loginPage.signIn') }/>
                </form>
            )}
        />
    )
}

export default LoginPage
