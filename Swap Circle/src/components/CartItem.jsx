import React from 'react'

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem