import { connect } from 'react-redux';
// import { } from 'src/actions';
import Field from 'src/components/LoginForm/Field';
import { changeInputValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  // console.log(state);
  currentValue: state[ownProps.name],

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCurrentValue: (newValue) => {
    // console.log('dispatch');
    dispatch(changeInputValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
