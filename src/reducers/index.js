import { combineReducers } from 'redux';
import readable from './readable-reducer';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './posts-reducer';
import categoriesReducer  from './categories-reducer';
import commentsReducer  from './comments-reducer';

const reducers = {
  form: formReducer,
  postsStore:postsReducer,
  categoriesStore:categoriesReducer ,
  commentsStore: commentsReducer 
}

const rootReducer = combineReducers(reducers);

export default rootReducer;