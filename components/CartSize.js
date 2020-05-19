import React from 'react';
import style from './CartSize.module.css';

const CartSize = ({ cart }) => {
  if (Object.keys(cart).length === 0) return null;

  return (
    <div className={`${style.size} text-center rounded`}>
      <span className='p-2'>{Object.keys(cart).length}</span>
    </div>
  );
}

export default CartSize;
