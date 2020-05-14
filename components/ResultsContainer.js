import React from 'react';
import Filters from './Filters';
import Results from './Results';

const ResultsContainer = () => {
  return (
    <div className='w-full flex flex-row'>
      <Filters />
      <Results />
    </div>
  )
}

export default ResultsContainer;