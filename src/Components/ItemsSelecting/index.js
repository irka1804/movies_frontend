import React from 'react'

import ItemTag from './ItemTag'

function ItemsSelecting({ label, items, setClick }) {
  if (!items || items.length === 0) return ''
  return (
    <div>
      <div className="mb-2">{label}</div>
      <div>
        {Object.keys(items).map((itemId) => (
          <ItemTag
            key={itemId}
            onClick={(e) => {
              e.preventDefault()
              setClick(itemId)
            }}
            {...items[itemId]}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemsSelecting
