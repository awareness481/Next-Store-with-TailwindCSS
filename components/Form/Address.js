import React, { useState } from "react";

const Address = ({ incrementStep, step, setData, data }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setSteet] = useState("");

  return (
    <>
      <label htmlFor="country">Country</label>
      <input
        name="country"
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <label htmlFor="city">City</label>
      <input
        name="city"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="street">Street</label>
      <input
        name="street"
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
    </>
  );
};


export default Address;