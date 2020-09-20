import React from 'react'


function IconButton({ src, onClick, width=50, height=50, active=false, disabled=false }) {
    return (
        <div 
            className={ `${active ? 'bg-purple-400' : ''} inline-block w-auto h-auto p-1 cursor-pointer` }
            onClick={ onClick }
            disabled={ disabled }
        >
            <img src={ src } alt=''/>
        </div>
    )
}

export default IconButton
