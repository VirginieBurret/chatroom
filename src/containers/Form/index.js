import { connect } from 'react-redux';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  message: state.messageEnConstruction,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
