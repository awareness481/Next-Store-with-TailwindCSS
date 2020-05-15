import { INIT_RESULTS } from '../actions/index';
import { withRedux } from '../lib/with-redux';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';

import * as data from '../api-sample.json';

const Index = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <SearchContainer />
      <ResultsContainer />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
};

Index.getInitialProps = ({reduxStore}) => {

  const { dispatch } = reduxStore;
  dispatch({
    type: INIT_RESULTS,
    results: data.default.laptops
  })

  return {};

}

export default withRedux(Index);