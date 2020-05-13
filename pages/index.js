import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchContainer from '../components/SearchContainer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchContainer />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
};

export default Index;