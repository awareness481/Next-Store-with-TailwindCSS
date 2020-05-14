import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';

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

export default Index;