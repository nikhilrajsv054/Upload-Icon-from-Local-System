// configureStore.js
import { createStore } from 'redux';
import iconReducer from './reducer';

const Store = () => {
  const store = createStore(iconReducer);
  return store;
};

export default Store;
