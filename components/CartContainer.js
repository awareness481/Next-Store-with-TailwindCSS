import React, { useState } from "react";
import { connect } from "react-redux";

import CartIcon from "./svg/CartIcon";
import CartSize from "./CartSize";
import CartModal from "./CartModal";

const CartContainer = ({ cart }) => {
  const [visibility, setVisibility] = useState("invisible");

  return (
    <div className="cart relative w-10 h-10">
      <CartIcon
        onMouseEnter={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("invisible")}
      />
      <CartSize cart={cart} />
      <CartModal cart={cart} visibility={visibility} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartContainer);
