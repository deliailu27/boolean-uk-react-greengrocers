import { useState } from 'react'

const StoreItemList = props => {
  const storeItems = props.storeItems

  const [ItemsAdded, setItemsAdded] = useState(false)

  return storeItems.map(item => (
    <li className="storeItem">
      <div class="store--item-icon">
        <img src="/assets/icons/.svg" alt={item.id} />
      </div>
      <button onClick={addItem}>Add to cart</button>
    </li>
  ))
}
export default StoreItemList
