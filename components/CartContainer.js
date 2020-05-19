import React from 'react';
import { connect } from 'react-redux';

import CartIcon from './svg/CartIcon';
import CartSize from './CartSize';

const CartContainer = ({ cart }) => {
  return (
    <div className='cart relative w-10 h-10'>
      <CartIcon />
      <CartSize cart={cart} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(CartContainer);