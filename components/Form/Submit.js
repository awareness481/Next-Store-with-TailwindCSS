import React from 'react';

const Submit = ({ incrementStep, step, setData, data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Initiating payment');
  }

  return (
    <>
      <button type='submit' onSubmit={handleSubmit}>Confirm order</button>
    </>
  );
}

export default Submit;