const Cart = ({addQuantity,minusQuantity,cartItems,total,getTotal}) => {
  
    return (<main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
       { cartItems.map(item => (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={() =>{ minusQuantity(item)}}
      >
        -
      </button>
      <span class="quantity-text center">{item.itemQuantity}</span>
      <button
        class="quantity-btn add-btn center"
        onClick={() => {addQuantity(item)}}
      >
        +
      </button>
    </li>
  ))}
      </ul>
    </div>
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">{total}</span>
      </div>
    </div>
  </main>)
}

export default Cart