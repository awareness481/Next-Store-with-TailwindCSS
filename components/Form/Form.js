import React, { useState } from "react";
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import FormStructure from './FormStructure';


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
  const [data, setData] = useState({...defaultData})

  return (
    <>
      <Navbar />
      <FormStructure setData={setData} />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart
});

export default connect(mapStateToProps)(Form);