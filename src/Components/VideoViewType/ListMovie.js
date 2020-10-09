import React from 'react'

import Rating from './Components/Rating'
import { imgSource } from './constants'

function ListMovie({ movie, children }) {
  const srcLink = imgSource + movie.poster_path

  return (
    <div className="flex p-2 m-2">
      <img className="rounded w-40 h-full" src={srcLink} alt="" />
      <div className="w-full pl-4 text-left">
        <div className="flex items-center">
          <div className="block">
            <p className="text-xl">
              {' '}
              <b> {movie.title} </b>{' '}
            </p>
            <div>
              <Rating value={movie.vote_average} />
              <i> {(movie.release_date || '').substring(0, 4)} </i>
            </div>
          </div>
          {children}
        </div>
        <p className="my-4 text-justify overflow-hidden"> {movie.overview} </p>
      </div>
    </div>
  )
}

export default ListMovie
