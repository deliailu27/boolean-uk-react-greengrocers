import { useState } from 'react'

const StoreItemList = props => {
  const storeItems = props.storeItems
  const addItemToCart= props.addItemToCart

  return storeItems.map(item => (
    <li className="storeItem">
      <div class="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.id} />
      </div>
      <button onClick={() =>{ addItemToCart(item);getTotal()}}>Add to cart</button>
    </li>
  ))
}
export default StoreItemList
