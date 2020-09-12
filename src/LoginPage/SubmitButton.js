import React from 'react'


function SubmitButton({ text }) {
    return (
        <button 
            className='bg-purple-300 text-black py-2 px-4 mt-4 rounded focus:outline-none'
            type='submit'
        >
            { text }
        </button>
    )
}

export default SubmitButton
