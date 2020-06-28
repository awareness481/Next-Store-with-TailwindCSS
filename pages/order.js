import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';
import { withRedux } from '../lib/with-redux';

const Order = () => {
  return (
    <>
      <Navbar />
      <Checkout />
    </>
  )
}

export default withRedux(Order);