import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./posts-reducer";
import commentsReducer  from "./comments-reducer";

const reducers = {
    form: formReducer,
    postsStore:postsReducer,
    commentsStore: commentsReducer 
};

const rootReducer = combineReducers(reducers);

export default rootReducer;