import React from 'react'

function Error({ error }) {
  return (
    <div className="text-red-500 text-md text-left italic my-2 mx-2">
      {error}
    </div>
  )
}

export default Error
