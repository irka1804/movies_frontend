import React from 'react'
import { Field } from 'react-final-form'


function EmailInput () {
    return (
        <Field
            className='shadow appearance-none border rounded w-7/12 py-2 px-3 ml-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='login'
            type='email'
            component='input'
        />
    )
}

export default EmailInput
