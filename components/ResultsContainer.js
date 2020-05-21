import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Filters from './Filters';
import Results from './Results';

const ResultsContainer = ({ laptops, filters }) => {
  const [filteredLaptops, setFilteredLaptops] = useState([]);

  useEffect(() => {
    let results = [];

    if (filters.length === 0) results = [...laptops];
    else {
      results = laptops.filter((laptop) => filters.includes(laptop.att_brand))
    }

    setFilteredLaptops(results);

  }, [filters])

  return (
    <div className='w-full flex flex-row'>
      <Filters />
      <Results laptops={filteredLaptops} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  laptops: state.results,
  filters: state.filters
});

export default connect(mapStateToProps)(ResultsContainer);