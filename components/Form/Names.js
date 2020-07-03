import React, { useState } from "react";

const Names = ({ incrementStep, step, setData, data }) => {
  const [fistName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      fistName,
      lastName
    });
    incrementStep(step++);
  };

  return (
    <>
      <label htmlFor="firstName">First name</label>
      <input
        name="fistName"
        type="text"
        value={fistName}
        onChange={(e) => setFistName(e.target.value)}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        name="lastname"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSubmit}>Next</button>
    </>
  );
};

export default Names;