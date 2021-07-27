import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import userReducer from './user.reducer';
import task from './taskLisk.reducer';

export default combineReducers({
  productReducer,
  userReducer,
  task
})
