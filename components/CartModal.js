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
          <a>Checkout</a>
      </Link>
    </div>
  );
};

export default CartModal;
