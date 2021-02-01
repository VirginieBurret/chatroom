import { connect } from 'react-redux';
import { changeMessageInConstruction } from 'src/actions';
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  message: state.messageEnConstruction,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessage: (value) => {
    // console.log(newValue);
    dispatch(changeMessageInConstruction(value));
    // type: 'CHANGE_MESSAGE_IN_CONSTRUCTION',
    // newValue, //  newValue : newValue
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
