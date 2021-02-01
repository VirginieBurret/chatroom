import { connect } from 'react-redux';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  message: state.messageEnConstruction,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessage: (newValue) => {
    // console.log(newValue);
    dispatch({
      type: 'CHANGE_MESSAGE_IN_CONSTRUCTION',
      newValue, //  newValue : newValue
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
