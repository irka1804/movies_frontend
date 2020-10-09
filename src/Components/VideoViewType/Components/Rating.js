import React from 'react'
import classnames from 'classnames'

function Rating({ value }) {
  return (
    <div
      className={classnames('inline-block px-2 rounded w-10 text-center', {
        'bg-red-600': 0 <= value && value <= 4,
        'bg-yellow-600': 4 < value && value <= 7,
        'bg-green-600': 7 < value && value <= 10,
      })}
    >
      {value}
    </div>
  )
}

export default Rating
