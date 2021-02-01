import { connect } from 'react-redux';
import { changeMessageInConstruction, sendMessage } from 'src/actions';
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  message: state.messageInConstruction,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessage: (value) => {
    // console.log(newValue);
    dispatch(changeMessageInConstruction(value));
    // type: 'CHANGE_MESSAGE_IN_CONSTRUCTION',
    // newValue, //  newValue : newValue
  },

  sendMessage: () => {
    // eslint-disable-next-line max-len
    // console.log('je dispatche une action pour aller au reducer'); au submit je vois bien ce console.log
    // eslint-disable-next-line max-len
    dispatch(sendMessage());// c'est le sendMessage de l'action creator!! Attention, a le même nom que la prop mais c'est bien l'action creator
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
