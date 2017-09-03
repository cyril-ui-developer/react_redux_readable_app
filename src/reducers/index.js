import { combineReducers } from 'redux';
import readableReducer from './readable-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  readableStore: readableReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;