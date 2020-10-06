import React from 'react'
import classnames from 'classnames'

function IconButton({
  src,
  onClick,
  className,
  width = 40,
  height = 40,
  active = false,
  disabled = false,
}) {
  const styles = classnames(
    'inline-block rounded items-center cursor-pointer flex-shrink-0 w-10 p-px',
    className,
    {
      'bg-purple-400': active,
    }
  )

  return (
    <div className={styles} onClick={onClick} disabled={disabled}>
      <img src={src} alt="" style={{ width, height }} />
    </div>
  )
}

export default IconButton
