import React from 'react';

const CartModal = ({cart,  visibility }) => {
  if (Object.keys(cart).length === 0) return null;

  return (
    <div className={`cart-modal ${visibility} absolute h-64 w-full flex flex-col`}>
      {
        Object.keys(cart).map((item) => (
          <div className='item' key={cart[item].id}>
            <h2>{cart[item].name}</h2>
            {/* <img src={cart[item].image} />
            <span>{cart[item].price}</span> */}
          </div>)
        )
      }
    </div>
  );
}

export default CartModal;