// import de redux et de l'enhancer
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import du reducer combine
import reducer from 'src/reducers';
import debug from 'src/middlewares/debug';
import ajax from 'src/middlewares/ajax';

// on met en place le store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(debug, ajax)),
);

// on rend dispo le store
export default store;
