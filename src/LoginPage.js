import React from 'react'
import { Form, Field } from 'react-final-form'
import { withTranslation } from 'react-i18next'


function Error({ error }) {
    return (
        <div className='text-red-500 text-md text-left italic my-2 mx-2'> 
            { error }
        </div>
    )
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validate ({login, password}) {
        let users = JSON.parse(window.localStorage.getItem('users'))
        let user_exist = false
        let error = ''
        users.forEach((user) => {
            if (user.login === login) {
                user_exist = true
                if (user.password !== password) {
                    error = 'loginPage.errors.wrongPassword'
                }
            }   
        })
        if (!user_exist) {
            error = 'loginPage.errors.unknownUser'
        }

        return error
    }

    handleSubmit (props) {
        let error = this.validate(props)
        
        this.setState({ error })

        if (!error) {
            window.localStorage.setItem('current_user', props.login)
        }
    }

    render () {
        const { t } = this.props

        return (
            <div className=''>
                <Form
                    onSubmit={ this.handleSubmit }
                    render={ ({ handleSubmit }) => (
                        <form 
                            onSubmit={ handleSubmit } 
                            className='w-full max-w-lg bg-white shadow-md rounded px-8 py-6 mx-auto'
                        >
                            <div className='flex my-4'>
                                <label className='block text-gray-700 text-lg my-2 mx-2'> 
                                    { t('loginPage.username') } 
                                </label>
                                <Field
                                    className='shadow appearance-none border rounded w-7/12 py-2 px-3 ml-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    name='login'
                                    type='text'
                                    component='input'
                                />
                            </div>
                            <div className='flex'>
                                <label className='block text-gray-700 text-lg text-left my-2 mx-2'> 
                                    { t('loginPage.password') } 
                                </label>
                                <Field
                                    className='shadow appearance-none border rounded w-7/12 py-2 px-3 ml-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    name='password'
                                    type='password'
                                    component='input'
                                />
                            </div>
                            <Error error={ t(this.state.error) }/>
                            <button 
                                className='bg-purple-300 text-black py-2 px-4 mt-4 rounded focus:outline-none'
                                type='submit'
                            > 
                                { t('loginPage.signIn') }
                            </button>
                        </form>
                    )}
                />
            </div>
        )
    }
}

export default withTranslation()(LoginPage)
