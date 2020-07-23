import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';

const Order = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      <Checkout />
    </>
  )
}

export default Order;