import React from 'react';

const Review = ({ incrementStep, step, setData, data }) => {

  const handleReview = (e) => {
    e.preventDefault();

    incrementStep(0);
  }

  const handleNext = (e) => {
    e.preventDefault();

    incrementStep(step++);
  }

  return (
    <>
      <button onClick={handleReview}>Review</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Review;