import React from 'react'
import classnames from 'classnames'

function SubmitButton({
  text,
  disabled = false,
  className = '',
  onClick = () => {},
}) {
  return (
    <button
      className={classnames(
        'text-black py-2 px-4 rounded focus:outline-none',
        {
          'bg-gray-100 cursor-not-allowed': disabled,
          'bg-purple-300': !disabled,
        },
        className
      )}
      disabled={disabled}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SubmitButton
