import React from 'react'

import list from './Icons/list.png'
import block from './Icons/block.png'
import IconButton from './IconButton'


function ViewSwitcher({ setView }) {

    const [ listIsActive, setActive ] = React.useState(true)

    return (
        <div className='flex'>
            <IconButton 
                src={ list } 
                active={ listIsActive }
                onClick={ () => { setView('list'); setActive(true) }}
            />

            <IconButton 
                src={ block } 
                active={ !listIsActive }
                onClick={ () => { setView('block'); setActive(false) }}
            />
        </div>
    )
}

export default ViewSwitcher
