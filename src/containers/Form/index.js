import { connect } from 'react-redux';

import Form from 'src/components/Form';

const mapStateToProps = (state) => {
  console.log(state);
  
  return({
    message: 'test',
  });
  
};

export default connect(mapStateToProps)(Form);
