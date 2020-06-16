import React from "react";
import style from "./CartModal.module.css";

const CartModal = ({ cart, visibility, setVisibility }) => {
  if (Object.keys(cart).length === 0) return null;

  return (
    <div
      className={`${style.cartModal} cartModal ${visibility} absolute h-64 flex flex-col`}
      onMouseLeave={() => setVisibility("invisible")}
    >
      {Object.keys(cart).map((item) => (
        <div className={`${style.item} item`} key={cart[item].id}>
          <img src={cart[item].image} className={`${style.img} img`} />
          <h2 className="self-center pb-2 text-xl">{cart[item].name}</h2>

          {/* <span>{cart[item].price}</span> */}
        </div>
      ))}
    </div>
  );
};

export default CartModal;
