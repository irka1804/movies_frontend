import React from 'react'


function BlockMovie({ movie, right, bottom }) {

    const srcLink = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <div className='flex'>
            <div className='max-w-sm p-2 border rounded'>
                <img className='rounded' src={ srcLink } alt=''/>
                <div className='flex'>
                    { movie.title }
                    <div className='ml-auto'>
                        { movie.vote_average }
                        <br/>
                        { movie.release_date.substring(0, 4)} 
                    </div>
                </div>
                { bottom }
            </div>
            { right }
        </div>
    )
}

export default BlockMovie
