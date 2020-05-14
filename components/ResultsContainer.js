import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  laptops: state.results
});

export default connect(mapStateToProps)(ResultsContainer);