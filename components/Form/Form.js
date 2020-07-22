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
  card: "",
  card_name: "",
  expire_date: "",
  cvv: "",
};

const Form = ({ items }) => {
  const [data, setData] = useState({ ...defaultData });

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

  return (
    <>
      <Navbar />
      <FormStructure setData={setData} next={setDisplayPayment} />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart,
});

export default connect(mapStateToProps)(Form);
