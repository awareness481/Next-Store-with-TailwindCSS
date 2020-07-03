import React, { useState } from "react";

const Contact = ({ incrementStep, step, setData, data }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Phone number</label>
      <input
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </>
  );
};

export default Contact;
