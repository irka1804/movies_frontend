import React from 'react'


function SubmitButton({ text, onClick = () => {} }) {

    return (
        <button 
            className='bg-purple-300 text-black py-2 px-4 rounded focus:outline-none'
            type='submit'
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

export default SubmitButton
