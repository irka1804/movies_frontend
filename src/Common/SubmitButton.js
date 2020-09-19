import React from 'react'


function SubmitButton({ text, disabled=false, onClick = () => {} }) {

    return (
        <button 
            className={ `${ disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-purple-300' } text-black py-2 px-4 mb-auto rounded focus:outline-none` }
            disabled={ disabled }
            type='submit'
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

export default SubmitButton
