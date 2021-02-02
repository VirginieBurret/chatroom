import { connect } from 'react-redux';
import { doLogin } from 'src/actions';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({ // je peux la mettre nulle si j'en ai pas besoin
// console.loge(state)

});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    //console.log('je veux me connecter container');
    dispatch(doLogin());// je dispatche mon action 
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
