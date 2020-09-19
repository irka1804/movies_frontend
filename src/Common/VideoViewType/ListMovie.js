import React from 'react'


function ListMovie({ movie, children }) {

    const srcLink = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <div className='flex overflow-hidden p-2 m-2 h-40 text-xl'>
            <img className='rounded' src={ srcLink } alt='' width={100} />
            <div>
                <p className=''> { movie.title } </p>
                <p> { movie.overview } </p>
            </div>
            { children }
        </div>
    )
}

export default ListMovie
