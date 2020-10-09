import React from 'react'

import IconButton from './IconButton'
import del from './Icons/delete.ico'

function WatchedButton(props) {
  return <IconButton src={del} {...props} />
}

export default WatchedButton
