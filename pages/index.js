import { INIT_RESULTS } from '../actions/index';
import { initializeStore } from '../store';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';

import * as data from '../api-sample.json';

const Index = () => {
  return (
    <div>
      <Navbar />
      
      <SearchContainer />
      <ResultsContainer />
    </div>
  )
};

export function getStaticProps() {

  const reduxStore = initializeStore()
  console.log(data.default.laptops)
  const { dispatch } = reduxStore
  dispatch({
    type: INIT_RESULTS,
    results: data.default.laptops
  })

  return {
    props: {
      initialReduxState: reduxStore.getState()
    }
  };

}

export default Index;