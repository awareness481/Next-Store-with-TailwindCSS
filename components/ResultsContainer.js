import React from 'react';
import Filters from './Filters';
import Results from './Results';

const ResultsContainer = ({laptops}) => {
  return (
    <div className='w-full flex flex-row'>
      <Filters />
      <Results laptops={laptops} />
    </div>
  )
}

export default ResultsContainer;