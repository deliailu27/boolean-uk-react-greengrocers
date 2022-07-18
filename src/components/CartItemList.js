import { useState } from 'react'

const CartItemList = props => {
  const ItemsinCart = props.cartItems
  for (let i = 0; i < ItemsinCart.length; i++) {
    Object.assign(ItemsinCart[i], { itemQuantity: 0 })
    console.log('items in cart:', ItemsinCart)
  }
  props.setCartItems(ItemsinCart)

  const addQuantity = item => {
    for (let i = 0; i < ItemsinCart.length; i++) {
      if (ItemsinCart[i] === item) {
        console.log(ItemsinCart[i])
        ItemsinCart[i].itemQuantity += 1
      }
    }
    props.setCartItems(ItemsinCart)
  }
  const minusQuantity = item => {
    for (let i = 0; i < ItemsinCart.length; i++) {
      if (ItemsinCart[i] === item) {
        ItemsinCart[i].itemQuantity -= 1
      }
    }
    props.setCartItems(ItemsinCart)
  }

  return ItemsinCart.map(item => (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={() => minusQuantity(item)}
      >
        -
      </button>
      <span class="quantity-text center">{item.itemQuantity}</span>
      <button
        class="quantity-btn add-btn center"
        onClick={() => addQuantity(item)}
      >
        +
      </button>
    </li>
  ))
}

export default CartItemList
