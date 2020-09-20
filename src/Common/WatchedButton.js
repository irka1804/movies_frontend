import React from 'react'

import IconButton from './IconButton'
import check from './Icons/check.ico'


function WatchedButton(props) {
    return (
        <IconButton
            src={ check }
            { ...props }
        />
    )
}

export default WatchedButton
