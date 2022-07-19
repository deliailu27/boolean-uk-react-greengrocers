import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import StoreItemList from './components/StoreItemList'

import Cart from './components/Cart'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  //const [total,setTotal] = useState (0)


  const addQuantity = item => {
    const existingItemsinCart = [...cartItems]
    for (let i = 0; i < existingItemsinCart.length; i++) {
      if (existingItemsinCart[i].id === item.id) {
        existingItemsinCart[i].itemQuantity++
        console.log('item to add',existingItemsinCart[i])
      }
    }
    setCartItems(existingItemsinCart)
    console.log('list after added item',existingItemsinCart)
    //getTotal()
  }

  const minusQuantity = item => {
    const existingItemsinCart = [...cartItems]
    for (let i = 0; i < existingItemsinCart.length; i++) {
      if (existingItemsinCart[i].id === item.id && existingItemsinCart[i].itemQuantity>0) {
        existingItemsinCart[i].itemQuantity--
      }
      if (existingItemsinCart[i].id === item.id && existingItemsinCart[i].itemQuantity===0){
        existingItemsinCart.splice(i,1)
      }
      setCartItems(existingItemsinCart)
    }
    //getTotal()
  }
    

    const addItemToCart = item => {
      const newCart = [...cartItems]
      item.itemQuantity = 1
      if (!newCart.includes(item)){
        newCart.push(item)
      }
      else {alert ("item already in cart, please edit quantity")}
      setCartItems(newCart)
      
    }

    const total = Math.round(cartItems.reduce((runningTotal, item) => item.price*item.itemQuantity + runningTotal, 0) * 100) / 100
    
    
    

  return (
    <>
      <header id="store">
    <h1>Greengrocers</h1>
    <ul className="item-list store--item-list">
      <StoreItemList
        storeItems={storeItems}
        addItemToCart ={addItemToCart}     />
    </ul>
  </header>
      <Cart addQuantity={addQuantity} minusQuantity={minusQuantity} cartItems={cartItems} total={total} />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
