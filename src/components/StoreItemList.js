import { useState } from 'react'

const StoreItemList = props => {
  const storeItems = props.storeItems
  const cartItems = props.cartItems

  const addItem = item => {
    const newCart = [...cartItems]
    newCart.push(item)
    props.setCartItems(newCart)
    console.log(item)
  }

  return storeItems.map(item => (
    <li className="storeItem">
      <div class="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.id} />
      </div>
      <button onClick={() => addItem(item)}>Add to cart</button>
    </li>
  ))
}
export default StoreItemList
