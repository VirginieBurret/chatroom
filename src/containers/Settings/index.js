import { connect } from 'react-redux';

import Settings from 'src/components/Settings';


const mapStateToProps = (state) => ({
// console.log(state)
  open: state.open,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
