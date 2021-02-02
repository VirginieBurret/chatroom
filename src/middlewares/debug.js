const debug = (store) => (next) => (action) => {
  console.log('dans debug', action);
  next(action);
};

export default debug;
