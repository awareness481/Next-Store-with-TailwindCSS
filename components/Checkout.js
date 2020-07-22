import React from "react";
import Link from 'next/link';
import { connect } from "react-redux";
import { REMOVE_FROM_CART } from "../actions/index";

const Checkout = ({ cart, dispatch }) => {
  console.log(cart);
  const mapCartItems = () => {
    return Object.keys(cart).map((item) => (
      <div className="item flex flex-row w-full sm:w-1/2 mx-auto sm:my-0 sm:justify-center">
        <img
          src={cart[item].image}
          className={`item__img ml-0`}
          width="100"
          height="100"
        />
        <div className="self-center px-2 flex flex-row sm:flex-col sm:px-16">
          <h2 className="text-2xl pr-8 sm:pr-0">{cart[item].name}</h2>
          <span className="text-xl self-center">${cart[item].price}</span>
        </div>
        <button
          onClick={() =>
            dispatch({
              type: REMOVE_FROM_CART,
              item,
            })
          }
          className="ml-auto mr-0 sm:mx-0"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className={`flex flex-col w-4/5 mx-auto my-0`}>
      {Object.keys(cart).length === 0 ? "No saved items" : (<div className='mt-32'>{mapCartItems()}</div>)}
      <Link href='/form-test'>
        <button className='mx-auto w-32 rounded-md px-8 py-3 mt-8 text-2xl bg-yellow-vivid-500 text-white'>Pay</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);
