import React, { useState } from 'react'
import classnames from 'classnames'

import list from './Icons/list.ico'
import block from './Icons/block.ico'
import IconButton from './IconButton'

function ViewSwitcher({ setView, className }) {
  const [listIsActive, setActive] = useState(true)

  return (
    <div className={classnames('flex', className)}>
      <IconButton
        src={list}
        active={listIsActive}
        onClick={() => {
          setView('list')
          setActive(true)
        }}
      />

      <IconButton
        src={block}
        active={!listIsActive}
        onClick={() => {
          setView('block')
          setActive(false)
        }}
      />
    </div>
  )
}

export default ViewSwitcher
