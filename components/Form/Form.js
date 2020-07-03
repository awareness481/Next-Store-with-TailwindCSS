import React, { useState } from "react";
import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit;";

const steps = ["names", "address", "contact", "review", "submit"];

const defaultData = {
  firtName: "",
  lastName: "",
  address: "",
  country: "",
  city: "",
  email: "",
  phone: "",
};

const Form = ({ items }) => {
  const [formData, setFormData] = useState(defaultData);
  const [step, setStep] = useState(0);

  if (steps[step] === "names")
    return <Names incrementStep={setStep} step={step} setData={setFormData} />;
  else if (steps[step] === "address")
    return (
      <Address incrementStep={setStep} step={step} setData={setFormData} />
    );
  else if (steps[step] === "contact")
    return (
      <Contact incrementStep={setStep} step={step} setData={setFormData} />
    );
  else if (steps[step] === "review")
    return (
      <Review incrementStep={setStep} step={step} setData={setFormData} />
    );
  else if (steps[step] === "submit")
    return (
      <Submit incrementStep={setStep} step={step} setData={setFormData} />
    );
};
