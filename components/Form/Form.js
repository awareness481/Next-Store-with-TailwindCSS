import React, { useState } from "react";
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
      <FormStructure setData={setData} />
    </>
  );
};

export default Form;