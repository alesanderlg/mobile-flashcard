import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../redux/reducers/index';

// Applying middlewares to the store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

// Creating the store configuration
const store = createStoreWithMiddleware(
  reducer
);

export default store;