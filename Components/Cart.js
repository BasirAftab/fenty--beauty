import React from 'react';
import '../index.css';

const Cart = ({ cartItem, setCartItem }) => {
  const removeFromCart = (product) => {
    setCartItem(cartItem.filter(item => item.id !== product.id));
  };

  return (
    <div className="cart-container">
      {cartItem.length === 0 ? (
        <p className='cartheading'>Your cart is empty</p>
      ) : (
        cartItem.map((item) => (

          <div key={item.id} className="cart-item">

            <img src={item.image} alt={item.name} />

          <div className='main'>

            <div className='paraprice'>
            <p>{item.name}</p>
            <p>RS: {item.price}</p>
            <p>quantity: - 1 +</p>

            </div>

            <div className='removebtn'>
            <button onClick={() => removeFromCart(item)}>Remove</button>
            
            </div>
          </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
