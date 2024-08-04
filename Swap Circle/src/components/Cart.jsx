import React from 'react'
import CartItem from './CartItem'

const cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map(item =>(
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
        ))
      )}
    </div>
  )
}

export default cart