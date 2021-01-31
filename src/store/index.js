import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import du reducer combine
import reducer from 'src/reducers';

// on met en place le store
const store = createStore(reducer, composeWithDevTools);

// on rend dispo le store
export default store;
