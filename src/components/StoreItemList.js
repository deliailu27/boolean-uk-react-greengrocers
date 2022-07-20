import { useState } from 'react'

const StoreItemList = ({ addItemToCart, filteredItems }) => {
  return filteredItems.map(item => (
    <li className="storeItem">
      <div class="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.id} />
      </div>
      <button
        onClick={() => {
          addItemToCart(item)
          getTotal()
        }}
      >
        Add to cart
      </button>
    </li>
  ))
}
export default StoreItemList
