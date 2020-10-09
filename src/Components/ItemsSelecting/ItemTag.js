import React from 'react'
import classnames from 'classnames'

function ItemTag({ onClick, active, name }) {
  return (
    <div
      className={classnames(
        'inline-block text-black py-2 px-4 m-1 rounded cursor-pointer focus:outline-none',
        {
          'bg-purple-300': active,
          'bg-purple-100': !active,
        }
      )}
      onClick={onClick}
    >
      {name}
    </div>
  )
}

export default ItemTag
