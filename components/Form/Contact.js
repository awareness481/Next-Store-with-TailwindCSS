import React, { useState } from "react";

const Contact = ({ incrementStep, step, setData, data }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      email,
      phone,
    });
    return incrementStep(step + 1);
  };

  return (
    <>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="phone">Phone number</label>
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </fieldset>

      <button onClick={handleSubmit}>Next</button>
    </>
  );
};

export default Contact;
