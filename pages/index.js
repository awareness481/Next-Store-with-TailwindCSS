import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';

const Index = ({laptops}) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchContainer />
      <ResultsContainer laptops={laptops} />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
};


// This API implementantion is for DEV ONLY
// Remove when appropriate

export async function getStaticProps() {

  const res = await fetch('http://localhost:3005/laptops');
  const laptops = await res.json();

  return {
    props: {
      laptops
    }
  }

}

export default Index;