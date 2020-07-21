import Form from '../components/Form/Form';
import { withRedux } from '../lib/with-redux';

const FormTest = () => {
  return (
    <Form />
  )
}

export default withRedux(FormTest);