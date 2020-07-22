import React from "react";
import style from "./CartModal.module.css";
import Link from 'next/link';

const CartModal = ({ cart, visibility, setVisibility }) => {
  if (Object.keys(cart).length === 0) return null;

  return (
    <div
      className={`${style.cartModal} cartModal ${visibility} absolute flex flex-col`}
      onMouseLeave={() => setVisibility("invisible")}
    >
      {Object.keys(cart).map((item) => (
        <div className={`${style.item} item`} key={cart[item].id}>
          <img src={cart[item].image} className={`${style.img} img`} />
          <h2 className="self-center pb-2 text-xl">{cart[item].name}</h2>

          {/* <span>{cart[item].price}</span> */}
        </div>
      ))}
      <Link href='/order'>
          <button className='mx-auto mb-1 w-1/2 rounded-md px-4 py-2 text-lg bg-yellow-vivid-500 text-white'>Checkout</button>
      </Link>
    </div>
  );
};

export default CartModal;
