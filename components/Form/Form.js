import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import FormStructure from "./FormStructure";
import StripeForm from "./StripeForm";

const defaultData = {
  firtName: "",
  lastName: "",
  street: "",
  country: "",
  city: "",
  email: "",
  phone: "",
};

const Form = ({ items }) => {
  const [data, setData] = useState({ ...defaultData });
  const [displayPayment, setDisplayPayment] = useState(0);
  

  // return (
  //   <>
  //     <Navbar />
  //     {displayPayment ? (
  //       <FormStructure setData={setData} next={setDisplayPayment} />
  //     ) : (
  //       <StripeForm />
  //     )}
  //   </>
  // );

  if (displayPayment === 0) {
    return (
      <>
      <Navbar />
      <FormStructure setData={setData} next={setDisplayPayment} />
      </>
    )
  } else if (displayPayment === 1) {
    return (
      <>
      <Navbar />
      <StripeForm />
      </>
    )
  }
};

const mapStateToProps = (state) => ({
  items: state.cart,
});

export default connect(mapStateToProps)(Form);
