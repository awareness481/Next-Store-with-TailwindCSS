import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { withRedux } from '../lib/with-redux';

const Order = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      <Checkout />
      <Link href='/form-test'>
        <a>Pay</a>
      </Link>
    </>
  )
}

export default withRedux(Order);