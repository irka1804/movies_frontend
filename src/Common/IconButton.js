import React from 'react'


function IconButton({ src, onClick, width=50, height=50, active=true }) {
    return (
        <div 
            className={ `${active ? 'bg-purple-400' : ''} p-1 cursor-pointer` }
            onClick={ onClick }
            disabled={ !active }
        >
            <img src={ src } alt='' width={ width } height={ height }/>
        </div>
    )
}

export default IconButton
