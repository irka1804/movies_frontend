import React from 'react'


function GenreTag({ name, id }) {

    const [ isActive, setIsActive ] = React.useState(
        JSON.parse(window.localStorage.getItem('genresIds')).includes(id)
    )

    const onClick = () => {
        const genresIds = JSON.parse(window.localStorage.getItem('genresIds')) || []

        const newGenresIds = genresIds.includes(id) ? (
            genresIds.splice(genresIds.indexOf(id), 1),
            genresIds
        ) : [ ...genresIds, id ]

        window.localStorage.setItem('genresIds', JSON.stringify(newGenresIds))

        setIsActive(!isActive)
    }

    return (
        <button
            className={`${isActive ? 'bg-purple-200' : 'bg-purple-100'} text-black py-2 px-4 m-1 rounded focus:outline-none`}
            onClick={ onClick }
        >
            { name }
        </button>
    )
}

export default GenreTag
