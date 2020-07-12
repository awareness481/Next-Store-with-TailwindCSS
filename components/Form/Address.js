import React, { useState } from "react";

const Address = ({ incrementStep, step, setData, data }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      street,
      city,
      country,
    });
    return incrementStep(step + 1);
  };

  return (
    <>
      <fieldset>
        <label htmlFor="country">Country</label>
        <input
          name="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="street">Street</label>
        <input
          name="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </fieldset>
      <button onClick={handleSubmit}>Next</button>
    </>
  );
};

export default Address;
