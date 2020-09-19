import React from 'react'


function GenreTag({ onClick, active, name }) {

    return (
        <div
            className={`${active ? 'bg-purple-200' : 'bg-purple-100'} inline-block text-black py-2 px-4 m-1 rounded cursor-pointer focus:outline-none`}
            onClick={ onClick }
        >
            { name }
        </div>
    )
}

export default GenreTag
