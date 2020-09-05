import React from 'react'
import { Form, Field } from 'react-final-form'
import { withTranslation } from 'react-i18next'


function Error({ error }) {
    return (
        <div> 
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
            <div>
                <Form
                    onSubmit={ this.handleSubmit }

                    render={ ({ handleSubmit }) => (
                        <form onSubmit={ handleSubmit }>
                            <div>
                                <label> { t('loginPage.username') } </label>
                                <Field
                                    name='login'
                                    type='text'
                                    component='input'
                                />
                            </div>
                            <div>
                                <label> { t('loginPage.password') } </label>
                                <Field
                                    name='password'
                                    type='password'
                                    component='input'
                                />
                            </div>
                            <Error error={ t(this.state.error) }/>
                            <button type='submit'> 
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
