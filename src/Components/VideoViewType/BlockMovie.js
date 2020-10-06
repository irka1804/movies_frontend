import React from 'react'
import styles from 'classnames'

import Rating from './Components/Rating'
import { imgSource } from './constants'

function BlockMovie({ movie, right, bottom, className }) {
  const srcLink = imgSource + movie.poster_path

  return (
    <div className={styles('inline-flex max-w-18', className)}>
      <div className="p-2 border rounded">
        <img className="rounded" src={srcLink} alt="" />
        <div className="flex my-2">
          <b> {movie.title} </b>
          <div className="ml-auto">
            <Rating value={movie.vote_average} />
            <br />
            {(movie.release_date || '????').substring(0, 4)}
          </div>
        </div>
        {bottom}
      </div>
      {right}
    </div>
  )
}

export default BlockMovie
