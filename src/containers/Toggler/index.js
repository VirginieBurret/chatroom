import { connect } from 'react-redux';
import { toggleOpen } from 'src/actions';
import Toggler from 'src/components/Toggler';

const mapStateToProps = (state) => ({
// console.log(state)

});

const mapDispatchToProps = (dispatch) => ({
  changeOpen: () => {
    // console.log('fonction qui va changer open');
    dispatch(toggleOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);
